# ADR-0005: Gamificación (XP, niveles, racha) y audio sin backend nuevo

- **Fecha**: 2026-10-04
- **Estado**: Aceptada

## Contexto
La sección de italiano necesita sentirse como un juego: XP, niveles, racha diaria y poder escuchar la pronunciación. Todavía no hay Firebase (EPIC-09), y no queremos ampliar el contrato `ProgressRepository` antes de tiempo ni pagar por audio.

## Decisión
- **XP y mejor puntuación** se guardan en el registro de cada lección (`xp`, `bestScore`) dentro del progreso del curso; el total y el nivel se calculan sumando, no se guardan.
- **Racha**: cada curso guarda `activityDays` (días locales `YYYY-MM-DD` con al menos una lección terminada, máx. 366). La racha global se calcula uniendo los días de todos los cursos.
- **Reglas** (XP por sesión, estrellas, niveles, racha) viven como funciones puras en `src/core/gamification/`.
- **Refresco de la UI**: un bus de eventos mínimo (`core/events/eventBus.js`, patrón Observer). `useExerciseProgress` emite `progress:saved` y `usePlayerStats` recarga, sin que el encabezado conozca a las lecciones.
- **Audio**: Web Speech API del navegador (`speechSynthesis`, voz `it-IT`) encapsulada en `core/speech/speech.js`.

## Alternativas consideradas
- Un documento "perfil" con métodos nuevos en `ProgressRepository`: más limpio para datos globales, pero obliga a cambiar el contrato (y su futura implementación Firebase) por algo que hoy se puede derivar.
- Deducir la racha de los `updatedAt` de las lecciones: se pierde historia al repetir una lección (solo queda la última fecha).
- Archivos de audio grabados o un servicio de TTS: mejor calidad, pero con costo y trabajo de contenido.

## Consecuencias
- ✅ Sin cambios en el contrato del repositorio; los datos viejos siguen siendo válidos (campos opcionales).
- ✅ Reglas de juego testeadas sin DOM y en un solo lugar.
- ⚠️ La calidad de la voz depende del dispositivo; en Android WebView (Capacitor) `speechSynthesis` no existe → en EPIC-10 cambiar la implementación de `speech.js` por un plugin nativo de TTS.
- 🔁 Si aparecen más datos globales del usuario (logros, ajustes), reevaluar el documento "perfil" en el repositorio (probablemente junto con EPIC-09).
