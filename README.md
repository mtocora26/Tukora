# Tukola — Plataforma personal de idiomas

Proyecto personal de aprendizaje de idiomas (italiano + inglés de negocios), construido como ejercicio deliberado de ingeniería de software: arquitectura, patrones de diseño, backlog y kanban — no solo "vibe coding".

> 🔄 **En migración a React** (Vite, sin backend por ahora). El código original en vanilla JS (verbos irregulares, ICFES, Context Hunt) quedó archivado en [`/legacy`](./legacy/README.md) como referencia.

## 📚 Documentación de arquitectura y proceso

- [Arquitectura actual y objetivo](./docs/01-arquitectura/ARQUITECTURA.md)
- [Decisiones de arquitectura (ADRs)](./docs/01-arquitectura/decisiones/)
- [Backlog por épicas](./docs/02-producto/BACKLOG.md)
- [Tablero Kanban](./docs/02-producto/KANBAN.md)
- [Roadmap por fases](./docs/03-proceso/ROADMAP.md)
- [Flujo de trabajo (ramas, commits, Definition of Done)](./docs/03-proceso/CONTRIBUTING.md)

## Desarrollo (React + Vite)

Requisitos: Node.js LTS instalado.

```bash
npm install       # instalar dependencias
npm run dev       # levantar servidor de desarrollo (http://localhost:5173)
npm run build     # generar build de producción en /dist
npm run lint      # correr ESLint
```

## Código archivado (`/legacy`)

La versión anterior (vanilla JS) sigue funcionando abriendo [`legacy/index.html`](./legacy/index.html) directamente en el navegador. Ver [`legacy/README.md`](./legacy/README.md) para instrucciones (incluye cómo agregar preguntas al simulacro ICFES, si algún día se retoma).
