import os
import tempfile
from pathlib import Path
from fastapi.testclient import TestClient
from app import main
from app.simulation import generate

client=TestClient(main.app)

def test_simulated_fault_effects():
 nominal=generate(0,'Cruise',[])
 failed=generate(0,'Cruise',['electrical','engine'])
 assert nominal.dc_bus_voltage==28
 assert nominal.vhf_online is True
 assert failed.dc_bus_voltage==0
 assert failed.vhf_online is False
 assert failed.egt_c>nominal.egt_c

def test_health_and_scenarios():
 assert client.get('/health').json()['status']=='ok'
 assert len(client.get('/api/scenarios').json()['scenarios'])==6
 assert client.get('/api/scenarios/not-real').status_code==404

def test_telemetry_and_sqlite(monkeypatch):
 with tempfile.TemporaryDirectory() as tmp:
  monkeypatch.setattr(main,'DB_PATH',Path(tmp)/'test.sqlite')
  response=client.post('/api/telemetry',json={'time':10,'phase':'Climb','active_faults':['vhf']})
  assert response.status_code==200
  assert response.json()['vhf_online'] is False
  assert client.get('/api/events').json()['events'][0]['type']=='TELEMETRY'

def test_invalid_inputs():
 assert client.post('/api/telemetry',json={'time':-1}).status_code==422
 assert client.post('/api/faults',json={'fault_id':'invented'}).status_code==422

def test_flight_profile_and_landing():
 from app.simulation import phase_at, FLIGHT_END
 assert phase_at(0)=='Preflight'
 assert phase_at(1000)=='Cruise'
 assert phase_at(FLIGHT_END)=='Landed'
 climb=generate(500,'Climb',[])
 assert climb.altitude_ft>500
 assert climb.vertical_speed_fpm>0
 cruise=generate(1100,'Cruise',[])
 assert cruise.altitude_ft==35000
 assert cruise.vertical_speed_fpm==0
 descent=generate(1700,'Descent',[])
 assert descent.vertical_speed_fpm<0
 for t in (2550,2551,3000):
  landed=generate(t,'Landed',[])
  assert landed.phase=='Landed'
  assert landed.altitude_ft==0
  assert landed.airspeed_kt==0
  assert landed.vertical_speed_fpm==0

def test_fault_does_not_change_flight_path():
 normal=generate(1700,'Descent',[])
 failed=generate(1700,'Descent',['vhf','electrical'])
 assert normal.altitude_ft==failed.altitude_ft
 assert normal.airspeed_kt==failed.airspeed_kt
 assert failed.vhf_online is False
 assert failed.dc_bus_voltage==0
