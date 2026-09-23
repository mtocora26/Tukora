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
npm test          # correr pruebas automatizadas
```

## Persistencia local de progreso

El código de aplicación consume el contrato asíncrono
`src/core/storage/ProgressRepository.js`. La implementación inicial,
`LocalStorageRepository`, guarda un documento versionado bajo la clave
`tukola.progress`:

```js
{
  version: 1,
  courses: {
    "italian-a1": {
      courseId: "italian-a1",
      exercises: {
        "essere-1": {
          exerciseId: "essere-1",
          status: "completed", // not_started | in_progress | completed
          score: 100,
          attempts: 1,
          updatedAt: "2026-09-23T02:43:00.000Z",
          completedAt: "2026-09-23T02:43:00.000Z"
        }
      },
      updatedAt: "2026-09-23T02:45:00.000Z"
    }
  }
}
```

Una lectura sin datos devuelve un progreso vacío. Los datos inválidos o de
una versión desconocida producen un error explícito y no se eliminan
automáticamente. El contrato usa promesas para que una futura implementación
con Firebase pueda sustituir el almacenamiento local sin cambiar sus
consumidores.

Para validar la persistencia manualmente en el navegador, crea una instancia
de `LocalStorageRepository`, llama a `saveProgress`, recarga la página y
consulta el mismo curso con `getProgress`. Las pruebas automatizadas cubren
este flujo creando una segunda instancia conectada al mismo almacenamiento.

## Código archivado (`/legacy`)

La versión anterior (vanilla JS) sigue funcionando abriendo [`legacy/index.html`](./legacy/index.html) directamente en el navegador. Ver [`legacy/README.md`](./legacy/README.md) para instrucciones (incluye cómo agregar preguntas al simulacro ICFES, si algún día se retoma).
