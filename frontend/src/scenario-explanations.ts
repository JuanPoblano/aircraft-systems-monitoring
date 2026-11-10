import type {FaultId} from './simulator';
export type ScenarioExplanation = {
 mode:'telemetry'|'visual'; description:string; effects: [string,string][]; mechanism:string;
};
/** Documents precisely what v1.2 models, not manufacturer troubleshooting. */
export const scenarioExplanations:Record<FaultId,ScenarioExplanation> = {
  "electrical": {
    "mode": "telemetry",
    "description": "This example models loss of a simulated 28 V DC bus. The bus reading becomes 0 V, and the modeled VHF equipment loses its online status. Flight motion is unchanged.",
    "effects": [
      [
        "DC bus voltage",
        "0 V (nominal: 28 V)"
      ],
      [
        "VHF status",
        "Offline"
      ],
      [
        "Flight trajectory",
        "Unchanged"
      ]
    ]
 ,
    "mechanism": "When the electrical scenario is active, the simulation sets DC bus voltage to zero and VHF availability to false. No other sensor values are changed by this fault."
  },
  "vhf": {
    "mode": "telemetry",
    "description": "The VHF radio is marked offline without changing the DC bus, flight path or engine indications.",
    "effects": [
      [
        "VHF status",
        "Offline"
      ],
      [
        "DC bus voltage",
        "Unchanged"
      ],
      [
        "Flight trajectory",
        "Unchanged"
      ]
    ]
 ,
    "mechanism": "When the VHF scenario is active, the simulation sets the VHF availability flag to false. Bus voltage stays unchanged unless the electrical fault is also active."
  },
  "engine": {
    "mode": "telemetry",
    "description": "The simulator adds 170 °C to its simplified EGT formula. It does not change N1, thrust or the aircraft trajectory. This is an educational effect, not an engine thermodynamic model.",
    "effects": [
      [
        "EGT reading",
        "+170 °C relative to normal"
      ],
      [
        "Engine N1",
        "Unchanged"
      ],
      [
        "Flight trajectory",
        "Unchanged"
      ]
    ]
 ,
    "mechanism": "When the engine scenario is active, the EGT calculation adds 170 °C to the nominal value derived from N1. The N1 value itself stays unchanged."
  },
  "hydraulic": {
    "mode": "visual",
    "description": "This scenario currently displays an alert, ATA information and a predefined diagram. Hydraulic pressure is not part of the current telemetry model.",
    "effects": [
      [
        "System alert",
        "Recorded in session"
      ],
      [
        "Diagram & ATA",
        "Predefined educational content"
      ],
      [
        "Hydraulic pressure sensor",
        "Not modeled in v1.2"
      ]
    ]
 ,
    "mechanism": "The current simulator records this fault identifier and its explanation but has no hydraulic-pressure field, so no numerical sensor output changes."
  },
  "gear": {
    "mode": "visual",
    "description": "This scenario currently displays an alert and predefined gear indication information. Gear position signals are not simulated numerically.",
    "effects": [
      [
        "System alert",
        "Recorded in session"
      ],
      [
        "Diagram & ATA",
        "Predefined educational content"
      ],
      [
        "Gear-position sensor",
        "Not modeled in v1.2"
      ]
    ]
 ,
    "mechanism": "The current simulator records this fault identifier and its explanation but has no gear-position sensor field, so no numerical sensor output changes."
  },
  "fuel": {
    "mode": "visual",
    "description": "This scenario currently displays an alert and a predefined fuel-system diagram. Left and right tank quantities are not yet simulated.",
    "effects": [
      [
        "System alert",
        "Recorded in session"
      ],
      [
        "Diagram & ATA",
        "Predefined educational content"
      ],
      [
        "Left / right fuel quantities",
        "Not modeled in v1.2"
      ]
    ]
 ,
    "mechanism": "The current simulator records this fault identifier and its explanation but has no tank-quantity sensor fields, so no numerical sensor output changes."
  }
};
