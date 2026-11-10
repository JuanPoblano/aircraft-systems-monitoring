"""Simple deterministic educational telemetry; NOT a physical aircraft model."""
import math
from typing import Literal
from pydantic import BaseModel

Phase = Literal['Preflight','Takeoff','Climb','Cruise','Descent','Landing','Landed']
FaultId = Literal['electrical','vhf','engine','hydraulic','gear','fuel']
PHASES = ('Preflight','Takeoff','Climb','Cruise','Descent','Landing','Landed')
FAULTS = {
 'electrical': {'name':'Electrical Power Loss','ata':'24','system':'Electrical Power','description':'Simulated DC bus power loss','causes':['Simulated source fault','Simulated distribution fault','Simulated wiring fault']},
 'vhf': {'name':'VHF Communication Failure','ata':'23','system':'Communications','description':'Simulated VHF radio unavailability','causes':['Simulated power interruption','Simulated transceiver fault','Simulated antenna connection fault']},
 'engine': {'name':'Engine EGT Anomaly','ata':'71','system':'Power Plant','description':'Simulated elevated EGT','causes':['Simulated engine anomaly','Simulated temperature sensor fault']},
 'hydraulic': {'name':'Hydraulic Pressure Low','ata':'29','system':'Hydraulic Power','description':'Simulated low hydraulic pressure','causes':['Simulated pump fault','Simulated pressure sensor fault']},
 'gear': {'name':'Landing Gear Indication Fault','ata':'32','system':'Landing Gear','description':'Simulated inconsistent gear indication','causes':['Simulated position sensor fault','Simulated wiring fault']},
 'fuel': {'name':'Fuel Tank Imbalance','ata':'28','system':'Fuel','description':'Simulated tank quantity imbalance','causes':['Simulated transfer issue','Simulated quantity sensor issue']}
}
class Telemetry(BaseModel):
 time: int
 phase: Phase
 altitude_ft: float
 airspeed_kt: float
 vertical_speed_fpm: float
 heading_deg: float
 n1_percent: float
 egt_c: float
 dc_bus_voltage: float
 vhf_online: bool
 active_faults: list[FaultId]

# Mirror the deterministic browser model; height is AGL (ft).
FLIGHT_END=2550
PHASE_STARTS={'Preflight':0,'Takeoff':30,'Climb':90,'Cruise':950,'Descent':1250,'Landing':2150,'Landed':2550}
KNOTS=[(0,0,0,0,18),(30,0,0,0,22),(90,500,150,160,95),(950,35000,275,450,85),(1250,35000,280,460,82),(2150,1200,155,165,52),(2350,0,125,125,38),(2550,0,0,0,20)]
def phase_at(t:int)->Phase:
 return next(p for p in reversed(PHASES) if t>=PHASE_STARTS[p]) if t>=0 else 'Preflight'
def interpolate(t:float,col:int)->float:
 t=max(0,min(FLIGHT_END,t))
 for i in range(1,len(KNOTS)):
  if t<=KNOTS[i][0]:
   a,b=KNOTS[i-1],KNOTS[i];u=(t-a[0])/(b[0]-a[0]);ease=u*u*(3-2*u)
   return a[col]+(b[col]-a[col])*ease
 return KNOTS[-1][col]
def generate(time:int,phase:Phase,faults:list[FaultId])->Telemetry:
 if time<0:raise ValueError('time must be non-negative')
 actual=phase_at(time)
 altitude=interpolate(time,1)
 vs=0 if time>=2350 else (interpolate(time+.5,1)-interpolate(time-.5,1))*60
 n1=interpolate(time,4)
 return Telemetry(time=time,phase=actual,altitude_ft=round(altitude,1),airspeed_kt=round(interpolate(time,2),1),vertical_speed_fpm=round(vs),heading_deg=round((45+time*.04)%360,1),n1_percent=round(n1,1),egt_c=round(380+n1*3.5+(170 if 'engine' in faults else 0),1),dc_bus_voltage=0 if 'electrical' in faults else 28,vhf_online='vhf' not in faults and 'electrical' not in faults,active_faults=faults)
