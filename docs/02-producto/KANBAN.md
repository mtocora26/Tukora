# Kanban — Tukola

Tablero simple en markdown. Muévete de columna editando este archivo (o migra a GitHub Projects cuando quieras algo visual — ver nota al final).

**WIP limit sugerido: máx. 1 tarjeta en "In Progress"** — tienes poco tiempo, terminar > empezar muchas cosas.

## 📋 Backlog
> Todo lo que vive en [BACKLOG.md](./BACKLOG.md) y no está priorizado para ahora.

## ✅ Ready (próximas 1-2 semanas)
- [ ] EPIC-07-01 — Scaffold Vite + React + Router
- [ ] EPIC-07-02 — ProgressRepository / LocalStorageRepository
- [ ] EPIC-07-03 — Contrato de hook de ejercicio

## 🔨 In Progress
_(vacío — arrastra aquí solo 1 tarjeta cuando empieces)_

## 👀 Review (autorevisión antes de mergear)
_(vacío)_

## 🎉 Done
- [x] Definir estructura de documentación (arquitectura, backlog, roadmap) — 2026-09-22
- [x] Decidir stack: React + Vite, Firebase (Firestore + Auth email/password), Capacitor, contenido viejo archivado — 2026-09-22

---
### Nota (2026-09-22)
Seguimos con este tablero en markdown por ahora. Cuando definas tu propio formato de GitHub Projects, lo migramos manteniendo el historial de "Done" como referencia.

---
### Definition of Done (checklist antes de mover algo a Done)
- [ ] Código en rama `feature/...`, mergeado a `main`
- [ ] Sin `console.log` de debug olvidados
- [ ] Probado manualmente en el navegador (flujo feliz + 1 caso raro)
- [ ] README/docs actualizados si cambió algo visible para el usuario o la arquitectura
- [ ] Commit(s) siguen [Conventional Commits](../03-proceso/CONTRIBUTING.md#commits)

### Nota sobre herramientas
Este archivo es suficiente mientras trabajas solo. Si más adelante quieres un tablero visual con drag&drop (arrastrar tarjetas), usa **GitHub Projects** (gratis, vinculado a Issues de este mismo repo) y deja este archivo como historial/resumen.
