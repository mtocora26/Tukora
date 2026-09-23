# ADR-0002: Adoptar React + Vite (SPA), sin Next.js por ahora

- **Fecha**: 2026-09-22
- **Estado**: Aceptada
- **Reemplaza parcialmente**: ADR-0001 (deja de aplicar "sin build tool"; el resto de ADR-0001 — evitar globals, separar datos de lógica — se mantiene y se traslada a este nuevo stack)

## Contexto
El proyecto gira hacia una plataforma personal de idiomas más grande (inglés de negocios + italiano, con posibilidad de más cursos futuros), con gamificación y contenido teórico. El objetivo explícito del usuario es también **aprender arquitectura de software y patrones de diseño en el proceso**, no solo shippear features. Vanilla JS con scripts globales ya no escala bien a esta ambición ni ofrece un vehículo claro para practicar patrones modernos (componentes, hooks, gestión de estado).

## Decisión
Migrar el frontend a **React usando Vite** como build tool, manteniendo la app como SPA sin servidor (deploy como sitio estático). **No** se adopta Next.js en esta fase.

## Alternativas consideradas
- **Seguir en vanilla JS modularizado (plan original de ADR-0001)**: descartado — sigue siendo válido como ejercicio, pero React da mejores primitivas para lo que se busca (componentes reutilizables entre cursos/idiomas, hooks para lógica de ejercicios, ecosistema de patrones bien documentado).
- **Next.js**: descartado por ahora — mezclaría "aprender React" con "aprender convenciones de un meta-framework" (server components, API routes, SSR) al mismo tiempo. Se revisita si más adelante se decide agregar backend (ver ADR-0003) y se prefiere tenerlo integrado en vez de un servidor separado.
- **Otro framework (Vue, Svelte)**: descartado — sin justificación fuerte para desviarse de React, que es el más extendido y con más recursos de aprendizaje sobre patrones de diseño en frontend.

## Consecuencias
- ✅ Vehículo directo para practicar Container/Presentational, Custom Hooks, Context, Reducers como análogos a Strategy/State/Observer.
- ✅ Sigue desplegando gratis como sitio estático (GitHub Pages, Netlify, Vercel).
- ⚠️ Se introduce un paso de build (Vite) — ya no basta con abrir el HTML directamente; se documenta el flujo de desarrollo en `docs/03-proceso/CONTRIBUTING.md`.
- ⚠️ El código vanilla JS existente no se migra automáticamente — se archiva en `/legacy` (ver decisión de contenido viejo) y las features nuevas se construyen desde cero en React siguiendo el modelo de contenido multi-curso.
- 🔁 Revisar si se necesita gestión de estado global dedicada (Zustand/Context) cuando la gamificación cruce varias features — de momento, Context + reducer alcanza.
