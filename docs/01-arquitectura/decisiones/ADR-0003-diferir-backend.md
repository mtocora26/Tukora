# ADR-0003: Diferir backend — seguir client-only con costura de reemplazo (Repository)

- **Fecha**: 2026-09-22
- **Estado**: ⚠️ Superada por [ADR-0004](./ADR-0004-firebase-y-capacitor.md) (2026-09-22) — el usuario confirmó que sí planea sincronizar entre dispositivos y llevar la app al celular, así que Firebase deja de ser "historia futura" y pasa a la ruta activa. Se conserva este documento como registro del razonamiento original.

## Contexto
El proyecto es de uso personal. Existe la duda de si separar cliente/servidor ahora (para sincronizar progreso entre dispositivos, por ejemplo) o mantenerlo 100% cliente como hasta ahora (`localStorage`).

Agregar backend implica: hosting, autenticación (aunque sea mínima), diseño de API, y atención a seguridad (validación de entradas, control de acceso, secretos) — una capa de aprendizaje adicional en paralelo a React, que compite por el poco tiempo disponible del usuario.

## Decisión
**Diferir el backend.** La app sigue siendo client-only (SPA + `localStorage`) por ahora. Para no cerrar la puerta a agregarlo después sin reescribir la app, se diseña la persistencia detrás de una interfaz `ProgressRepository`:

```js
// core/storage/ProgressRepository.js — contrato
interface ProgressRepository {
  getProgress(courseId): Progress
  saveProgress(courseId, progress): void
  getAchievements(): Achievement[]
  // ...
}
```

Hoy solo existe `LocalStorageRepository` implementándola. El día que se quiera sync entre dispositivos, se escribe `ApiRepository` con la misma forma y se cambia una sola línea de "inyección" (qué implementación usa la app) — los componentes/hooks nunca saben cuál es.

## Alternativas consideradas
- **Backend mínimo ahora (Node/Express + SQLite o similar)**: descartado por ahora — demasiada carga cognitiva simultánea con la migración a React. Se revisita como su propio ADR si aparece una razón concreta (ej: usar la app desde el celular y el laptop de forma recurrente).
- **BaaS (Firebase/Supabase) para adelantar sync sin mantener servidor propio**: opción intermedia real, anotada como candidata futura si el dolor de "no sincroniza" se vuelve frecuente — no se descarta, solo no se hace ahora.

## Consecuencias
- ✅ Cero superficie de ataque nueva, cero costo, cero mantenimiento de servidor.
- ✅ El patrón Repository deja la puerta abierta sin deuda técnica real cuando se quiera cruzar el puente.
- ⚠️ Sin sync entre dispositivos mientras tanto (limitación aceptada conscientemente).
- 🔁 Reevaluar esta decisión si: (a) se usa la app desde 2+ dispositivos regularmente, o (b) se quiere compartir con alguien más (multi-usuario).
