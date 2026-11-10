"""Local educational REST API. No external aviation data or AI."""
import json
import os
import sqlite3
import threading
import time
from pathlib import Path
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from .simulation import PHASES, FAULTS, Phase, FaultId, Telemetry, generate

app=FastAPI(title='Aircraft Systems Monitoring API',version='1.2.0',description='Educational simulated aircraft telemetry. Not for operational use.')
origins=os.environ.get('CORS_ORIGINS','http://localhost:5173,http://localhost:8080').split(',')
app.add_middleware(CORSMiddleware,allow_origins=origins,allow_credentials=False,allow_methods=['GET','POST'],allow_headers=['Content-Type'])
DB_PATH=Path(os.environ.get('DATABASE_PATH','/tmp/aircraft_telemetry.sqlite'))
_lock=threading.Lock()

def db():
 DB_PATH.parent.mkdir(parents=True,exist_ok=True)
 conn=sqlite3.connect(DB_PATH,timeout=10)
 conn.execute('CREATE TABLE IF NOT EXISTS events (id INTEGER PRIMARY KEY AUTOINCREMENT, created_at INTEGER NOT NULL, event_type TEXT NOT NULL, phase TEXT NOT NULL, payload TEXT NOT NULL)')
 conn.commit()
 return conn

def record(event_type:str,phase:str,payload:dict):
 with _lock:
  with db() as conn:
   cur=conn.execute('INSERT INTO events(created_at,event_type,phase,payload) VALUES(?,?,?,?)',(int(time.time()),event_type,phase,json.dumps(payload)))
   return cur.lastrowid

class TelemetryRequest(BaseModel):
 time: int = Field(default=0,ge=0,le=86400)
 phase: Phase = 'Cruise'
 active_faults: list[FaultId] = Field(default_factory=list,max_length=6)

class FaultRequest(BaseModel):
 fault_id: FaultId
 phase: Phase = 'Cruise'

@app.get('/health')
def health():return {'status':'ok','mode':'educational-local-api','version':'1.2.0'}

@app.get('/api/phases')
def phases():return {'phases':PHASES}

@app.get('/api/scenarios')
def scenarios():return {'scenarios':[{'id':key,**value} for key,value in FAULTS.items()]}

@app.get('/api/scenarios/{fault_id}')
def scenario(fault_id:str):
 if fault_id not in FAULTS:raise HTTPException(status_code=404,detail='Scenario not found')
 return {'id':fault_id,**FAULTS[fault_id]}

@app.post('/api/telemetry',response_model=Telemetry)
def telemetry(request:TelemetryRequest):
 reading=generate(request.time,request.phase,request.active_faults)
 record('TELEMETRY',request.phase,reading.model_dump())
 return reading

@app.post('/api/faults')
def inject_fault(request:FaultRequest):
 item=FAULTS[request.fault_id]
 event_id=record('FAULT',request.phase,{'fault_id':request.fault_id,'ata':item['ata'],'name':item['name']})
 return {'event_id':event_id,'status':'simulated','scenario':{'id':request.fault_id,**item}}

@app.get('/api/events')
def events(limit:int=50):
 if not 1<=limit<=200:raise HTTPException(status_code=422,detail='limit must be 1..200')
 with _lock:
  with db() as conn:
   rows=conn.execute('SELECT id,created_at,event_type,phase,payload FROM events ORDER BY id DESC LIMIT ?',(limit,)).fetchall()
 return {'events':[{'id':r[0],'created_at':r[1],'type':r[2],'phase':r[3],'data':json.loads(r[4])} for r in rows]}
