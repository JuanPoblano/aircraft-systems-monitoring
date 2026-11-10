# UI localization — v1.2

The app supports English (`en`, default), Spanish (`es`), and French (`fr`). The language switch is available in the header and Settings, and is stored in browser localStorage under `aircraft-monitoring-locale`.

- `frontend/src/i18n.ts` contains translated UI phrases, scenario text, event notifications and ATA descriptions, keyed by their original English strings.
- `frontend/src/main.tsx` calls `tr(text)` for UI text. Event messages are rendered via `translatedEvent(locale, message)` so stored event keys and exported JSON are not translated.
- `frontend/src/scenario-explanations.ts` describes exactly which telemetry fields each fault changes; update the explanation and its translations whenever the simulation rules change.
- The REST API, SQLite fields, JSON export keys and `FaultId`/`Phase` types remain stable in English, regardless of UI language.

When adding new UI copy, add translations to `i18n.ts`, and test all three languages including narrow screens. Missing translations fall back to English.
