export type Phase = 'Preflight'|'Takeoff'|'Climb'|'Cruise'|'Descent'|'Landing'|'Landed';
export type FaultId = 'electrical'|'vhf'|'engine'|'hydraulic'|'gear'|'fuel';
export type Reading = {time:number; altitude:number; airspeed:number; verticalSpeed:number; heading:number; n1:number; egt:number; busVoltage:number; vhfOnline:boolean};
export type Event = {id:number;time:number;phase:Phase;type:'INFO'|'WARNING'|'FAULT';message:string;ata:string};
export const phases:Phase[]=['Preflight','Takeoff','Climb','Cruise','Descent','Landing','Landed'];
export const faults: {id:FaultId;name:string;ata:string;system:string;severity:'HIGH'|'MEDIUM'|'LOW';description:string;causes:string[];nodes:string[];affected:string[]}[]=[
{id:'electrical',name:'Electrical Power Loss',ata:'24',system:'Electrical Power',severity:'HIGH',description:'A simulated DC bus loses electrical power, affecting dependent equipment.',causes:['Simulated generator or distribution fault','Simulated contactor or protective device issue','Simulated wiring discontinuity'],nodes:['Power Source','DC Bus','VHF Radio'],affected:['DC distribution','VHF communication']},
{id:'vhf',name:'VHF Communication Failure',ata:'23',system:'Communications',severity:'MEDIUM',description:'A simulated VHF transceiver becomes unavailable.',causes:['Simulated electrical supply interruption','Simulated transceiver malfunction','Simulated antenna or connection fault'],nodes:['Electrical Supply','VHF Transceiver','Antenna'],affected:['VHF communication','Voice link']},
{id:'engine',name:'Engine EGT Anomaly',ata:'71',system:'Power Plant',severity:'HIGH',description:'Engine exhaust gas temperature rises beyond an educational threshold.',causes:['Simulated engine operating anomaly','Simulated temperature sensing fault','Simulated performance degradation'],nodes:['Engine Core','EGT Sensor','Monitoring'],affected:['Engine indication','Engine monitoring']},
{id:'hydraulic',name:'Hydraulic Pressure Low',ata:'29',system:'Hydraulic Power',severity:'MEDIUM',description:'Simulated hydraulic pressure drops below the model threshold.',causes:['Simulated pump degradation','Simulated fluid loss','Simulated pressure sensor issue'],nodes:['Hydraulic Pump','Pressure Line','Consumer'],affected:['Hydraulic indication','Selected consumers']},
{id:'gear',name:'Landing Gear Indication Fault',ata:'32',system:'Landing Gear',severity:'MEDIUM',description:'Simulated gear-position signals disagree.',causes:['Simulated position sensor fault','Simulated wiring fault','Simulated indication logic issue'],nodes:['Gear Position Sensor','Signal Interface','Display'],affected:['Gear indication']},
{id:'fuel',name:'Fuel Tank Imbalance',ata:'28',system:'Fuel',severity:'LOW',description:'Simulated left and right tank quantities diverge.',causes:['Simulated transfer imbalance','Simulated quantity sensor fault','Simulated fuel distribution issue'],nodes:['Left Tank','Fuel Management','Right Tank'],affected:['Fuel indication','Fuel balance']}
];
// Deterministic, simplified flight profile. Height is AGL, not barometric altitude.
// Phase selection and telemetry share this single timeline (seconds).
export const flightEnd=2550;
export const phaseStarts:Record<Phase,number>={Preflight:0,Takeoff:30,Climb:90,Cruise:950,Descent:1250,Landing:2150,Landed:2550};
export function phaseAt(t:number):Phase { return [...phases].reverse().find(p=>t>=phaseStarts[p])??'Preflight'; }
const knots=[
 {t:0,h:0,ias:0,gs:0,n1:18}, {t:30,h:0,ias:0,gs:0,n1:22},
 {t:90,h:500,ias:150,gs:160,n1:95}, {t:950,h:35000,ias:275,gs:450,n1:85},
 {t:1250,h:35000,ias:280,gs:460,n1:82}, {t:2150,h:1200,ias:155,gs:165,n1:52},
 {t:2350,h:0,ias:125,gs:125,n1:38}, {t:2550,h:0,ias:0,gs:0,n1:20}
];
function interpolate(t:number,key:'h'|'ias'|'gs'|'n1') {
 const a=knots.findIndex(k=>k.t>=t); if(a<=0)return knots[0][key];
 const left=knots[a-1],right=knots[a]; const u=(t-left.t)/(right.t-left.t);
 const ease=u*u*(3-2*u);return left[key]+(right[key]-left[key])*ease;
}
export function makeReading(t:number, _phase:Phase, active:FaultId[]):Reading {
 const time=Math.max(0,Math.min(flightEnd,t));
 const phase=phaseAt(time);
 const altitude=interpolate(time,'h');
 // Derivative of height (AGL) over a symmetric 1-second interval.
 const verticalSpeed=phase==='Landed'||time>=2350?0:(interpolate(Math.min(2550,time+.5),'h')-interpolate(Math.max(0,time-.5),'h'))*60;
 const n1=interpolate(time,'n1');
 return {time:t,altitude:Math.round(altitude*10)/10,airspeed:Math.round(interpolate(time,'ias')*10)/10,
 verticalSpeed:Math.round(verticalSpeed),heading:Math.round((45+time*.04)%360*10)/10,
 n1:Math.round(n1*10)/10,egt:Math.round((380+n1*3.5+(active.includes('engine')?170:0))*10)/10,
 busVoltage:active.includes('electrical')?0:28,vhfOnline:!active.includes('vhf')&&!active.includes('electrical')};
}
export const fmtTime=(s:number)=>`${String(Math.floor(s/3600)).padStart(2,'0')}:${String(Math.floor(s%3600/60)).padStart(2,'0')}:${String(s%60).padStart(2,'0')}`;
export const demoSeries=(base:number,spread:number,n=36)=>Array.from({length:n},(_,i)=>base+Math.sin(i*.27)*spread*.5+Math.sin(i*.79)*spread*.22);
