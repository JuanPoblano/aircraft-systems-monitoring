> **v1.2.0:** Adds multilingual navigation (EN/ES/FR), explicit modeled fault explanations, a browser favicon and more transparent event information.

# Aircraft Systems Monitoring & Fault Diagnosis

An **educational aircraft systems simulation** featuring flight phases, artificial telemetry, predefined faults, general ATA chapter references, simplified diagrams and a maintenance-oriented explanation panel.

> **Important:** This is a fictional aircraft model (AS-001). It uses synthetic data and simplified rules. It is not flight software, a certified simulator, a manufacturer manual, an AI diagnostic system or a source of maintenance instructions.

## Features

- Eight navigation pages: Overview, Flight Simulation, Telemetry, Fault Scenarios, ATA Systems, Event Log, About the Project, Settings.
- Six flight phases: Preflight, Takeoff, Climb, Cruise, Descent, Landing, followed by a terminal **Landed** state.
- Six predefined fault scenarios: electrical, VHF, engine EGT, hydraulic, landing gear indication, fuel imbalance.
- Simulated flight/engine telemetry and interactive charts.
- ATA references and original simplified functional diagrams with **prewritten**, not AI-generated, possible causes.
- Export browser session events to JSON.
- Independent browser demo suitable for GitHub Pages.
- Optional local Python FastAPI REST API, SQLite storage and Docker Compose setup.
- Automated backend tests and GitHub Actions workflows.

## Run locally — recommended: Docker Desktop

Prerequisites: Docker Desktop with Compose.

From the project root:

```powershell
docker compose up --build -d
```

- Dashboard: http://localhost:8080
- API docs: http://localhost:8000/docs
- API health: http://localhost:8000/health

**By default, the dashboard runs its own browser simulation.** To connect to the local API, open **Settings**, keep `http://localhost:8000` as the API URL, click **Test /health**, then enable **Use local backend for telemetry**. The frontend will request backend-generated telemetry and the backend will persist readings in SQLite. If the API is unavailable, the UI returns to browser demo mode. Scenario text and event timeline remain browser-side; backend fault events can also be submitted separately via the API. The two modes are deliberately simplified and not a fully synchronized distributed state machine.

Stop:

```powershell
docker compose down
```

To remove stored SQLite data as well: `docker compose down -v`.

## Run without Docker

Frontend (Node.js 22+):

```powershell
cd frontend
npm install
npm run dev
```

Visit http://localhost:5173. Backend is not required for browser demo.

Backend (Python 3.12+):

```powershell
cd backend
python -m venv .venv
.venv\Scripts\Activate.ps1
pip install -r requirements.txt
uvicorn app.main:app --reload
```

In PowerShell, if activation is restricted, use `.venv\Scripts\python.exe -m pip install -r requirements.txt` and `.venv\Scripts\python.exe -m uvicorn app.main:app --reload`.

## API endpoints

| Method | Path | Purpose |
|---|---|---|
| GET | `/health` | Health check |
| GET | `/api/phases` | Available phases |
| GET | `/api/scenarios` | Predefined faults |
| GET | `/api/scenarios/{id}` | One fault scenario |
| POST | `/api/telemetry` | Generate and persist a reading |
| POST | `/api/faults` | Log a simulated fault event |
| GET | `/api/events?limit=50` | Read persisted events |

Example:

```powershell
Invoke-RestMethod -Uri http://localhost:8000/api/telemetry -Method Post -ContentType 'application/json' -Body '{"time":30,"phase":"Cruise","active_faults":["electrical"]}'
```

## Tests

```powershell
docker compose run --rm backend python -m pytest tests -q
```

Or run `python -m pytest tests -q` from `backend` after installing dependencies. Frontend check: `cd frontend; npm run build`.



**No backend is hosted by GitHub Pages.** The deployed demo runs entirely in the browser; the backend can be run locally by developers.

## Limitations and roadmap

- Sensor values and fault signatures are illustrative, not validated aircraft performance or operating limits.
- General ATA chapter categories only; no manufacturer-specific manual, wiring diagram or procedure.
- No generative AI, RAG, third-party APIs or actual aircraft data.
- Local backend uses REST, not WebSockets; it records telemetry and fault events in SQLite.
- Future work: more realistic phase transitions, synchronized browser/backend event histories, advanced dependency maps, documented local AI with licensed sources, more thorough frontend tests.

See [docs/architecture.md](docs/architecture.md) and [docs/scenarios.md](docs/scenarios.md).

## Flight simulation logic (v1.1)

The educational aircraft AS-001 now follows one deterministic flight timeline in both the TypeScript browser demo and Python REST API. Phases: Preflight (0–30s), Takeoff (30–90s), Climb (90–950s), Cruise (950–1250s), Descent (1250–2150s), Landing (2150–2550s), and Landed (2550s onward). Altitude represents **height above runway (AGL)**, not barometric altitude. The aircraft reaches the runway, decelerates, and stops at 2550 simulated seconds. `Reset` restarts the flight. Speed controls how fast simulated seconds elapse.

Values are generated using smooth interpolation of a small set of illustrative flight-profile control points; vertical speed is derived from the change in height. This is **not** a physically validated flight dynamics model. N1 and EGT follow a simplified relationship; airspeed and ground speed are separate concepts, although only IAS is displayed. Fault injection changes the relevant simulated system readings without changing the aircraft trajectory.

The local FastAPI endpoint `POST /api/telemetry` uses the `time` field as the authoritative simulation time and derives the phase from it. The `phase` request field is retained for backward compatibility but does not override the computed phase. The browser demo follows the same timeline. SQLite stores requests in local API mode; browser session event history is separate.

**Testing:** `cd backend && python -m pytest tests -v`. Frontend: `cd frontend && npm install && npm run build`. For full-stack validation: `docker compose up --build -d` and check the dashboard and `/docs`.


## v1.2.0 — language & fault explanations

- Language picker **EN / ES / FR** in the top bar (also in Settings). The selection is stored locally in the browser. The REST API schema and exported JSON keys remain unchanged and in English.
- **Understanding the Fault** explains the actual modeled parameter effects for each scenario. Electrical, VHF and EGT scenarios affect telemetry; hydraulic, landing gear and fuel are currently visual-only scenarios.
- **About the Project** documents the deterministic educational simulation and its scope.
- An SVG aircraft favicon appears in the browser tab.
- The displayed version is 1.2.0.

### Disclaimer

No aircraft-specific maintenance manual, live aircraft data, certified diagnostic reasoning or generative AI is provided. ATA chapters and diagrams are educational references only.

The public demo uses system fonts and does not require third-party runtime data services.
