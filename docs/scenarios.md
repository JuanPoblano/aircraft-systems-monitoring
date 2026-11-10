# Simulated scenarios

The AS-001 model is fictional. The following are educational cases with invented thresholds and effects, not manufacturer data.

| Scenario | ATA chapter | Modeled effect |
|---|---|---|
| Electrical Power Loss | 24 | DC bus voltage drops to 0 V; VHF availability becomes false |
| VHF Communication Failure | 23 | VHF availability becomes false |
| Engine EGT Anomaly | 71 | EGT increases by 170 °C relative to baseline |
| Hydraulic Pressure Low | 29 | Scenario card and event only (hydraulic telemetry not yet modeled) |
| Landing Gear Indication Fault | 32 | Scenario card and event only (gear indication telemetry not yet modeled) |
| Fuel Tank Imbalance | 28 | Scenario card and event only (fuel quantity telemetry not yet modeled) |

**Important implementation distinction:** Only electrical, VHF and engine faults currently change numerical or Boolean telemetry. Hydraulic, gear and fuel cases are narrative/event-only demonstrations in v1.2. This is intentional and should be expanded before claiming full system simulation.

The diagrams are original conceptual blocks. They do not reproduce or substitute for any AMM, TSM, FIM or aircraft wiring manual. No diagnosis or maintenance release is performed.

## UI explanation panel (v1.2)

The **Fault Scenarios → Understanding the Fault** section documents each scenario's actual numerical/Boolean effect and the specific simulation rule. Only three scenarios alter telemetry. Others are marked **Visual-only scenario**, and their cards/diagrams/events are not presented as modeled sensor behavior. The timeline shows matching session events rather than fixed sample timestamps.

These explanations are available in English, Spanish, and French. They are fictional learning material, not manufacturer-approved fault isolation guidance.
