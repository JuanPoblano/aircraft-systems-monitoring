# Architecture and design decisions

## Deployment A: public GitHub Pages demo

React + TypeScript + Vite are compiled to static files. A deterministic TypeScript simulator runs in the browser. The page displays synthetic values, allows predefined faults to be injected, and maintains a temporary in-memory event history. No server, API key, remote database or third-party aviation service is required. The visitor can export events as JSON.

## Deployment B: local full stack

Docker Compose runs a React frontend (nginx) and a Python FastAPI backend. FastAPI exposes REST endpoints to generate telemetry, list scenarios, record fault events and query the event history. SQLite is persisted to a Docker volume. The frontend can optionally fetch backend-generated telemetry from Settings. The local backend is intentionally a simple educational REST API; the scenario timeline and UI interaction remain browser-controlled.

## Intentional tradeoffs

- **Simple rules over physical modeling:** no claim of flight-dynamics accuracy.
- **Predefined explanations over AI:** no hallucinated repair procedures, model hosting fees or proprietary maintenance content.
- **Two runtimes:** Python and TypeScript share the same high-level phase values and fault effects but are separate implementations; future work could add contract tests to prevent drift.
- **SQLite:** easy local persistence, not designed for high-rate production telemetry.
- **No external dependencies for demo data:** reliable recruiter experience.
- **No maintenance authority:** ATA references are chapter-level educational labels, not approved troubleshooting instructions.

## Basic data flow

Browser demo: UI controls → TypeScript generator → reading / fault state → charts / event log.

Local backend mode: UI controls → HTTP POST `/api/telemetry` → Python generator → SQLite → JSON response → UI charts. REST `/api/events` exposes stored readings and events to other clients.

## Localization and runtime independence (v1.2)

The UI offers EN / ES / FR without a translation service or network requests. UI strings and educational scenario text are stored in `frontend/src/i18n.ts`, and the current language is stored in browser localStorage. The original API schema, event types and fault identifiers remain in English to keep the REST contract stable.

The favicon is a local SVG asset. The public demo does not require external fonts or external data APIs.
