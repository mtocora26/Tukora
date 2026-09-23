# ADR-0001: Modularizar con ES Modules nativos, sin build tool

- **Fecha**: 2026-09-22
- **Estado**: Aceptada

## Contexto
El proyecto es 100% estático, publicado probablemente vía GitHub Pages, mantenido en tiempo libre limitado mientras se aprende arquitectura de software. `app.js` (2062L) e `icfes.js` (2245L) concentran datos + lógica + DOM sin separación, comunicándose por variables globales.

## Decisión
Migrar progresivamente a `<script type="module">` con `import`/`export` nativos del navegador, organizando el código en `core/`, `domain/`, `content/`, `features/`, `ui/` (ver [ARQUITECTURA.md](../ARQUITECTURA.md)). **No** se introduce un bundler (Vite/Webpack) en esta fase.

## Alternativas consideradas
- **Mantener scripts globales**: descartado, no permite testear ni aislar dependencias.
- **Introducir Vite/bundler ahora**: descartado por ahora — añade complejidad de tooling (config, build step, deploy) que no se justifica para ~11k líneas sin dependencias npm reales. Se reevaluará si se agregan tests con un framework que lo requiera, o TypeScript.

## Consecuencias
- ✅ Dependencias explícitas entre módulos, imports en vez de orden de `<script>` en el HTML.
- ✅ Se puede seguir abriendo `index.html` directamente o con un server estático simple (`live-server`), sin paso de build.
- ⚠️ ES Modules vía `file://` tienen restricciones CORS en algunos navegadores → se requiere servir con un servidor local (documentado en README).
- 🔁 Si el proyecto crece o se agregan tests unitarios con Vitest, revisar esta decisión (candidato: ADR-0002).
