/**
 * Minimal Observer / PubSub: lets parts of the app react to events (e.g.
 * "progress saved" → refresh streak and level) without knowing each other.
 */
export function createEventBus() {
  const listeners = new Map()

  return {
    /** @returns {() => void} unsubscribe */
    on(type, listener) {
      if (!listeners.has(type)) listeners.set(type, new Set())
      listeners.get(type).add(listener)
      return () => listeners.get(type).delete(listener)
    },

    emit(type, payload) {
      for (const listener of listeners.get(type) ?? []) {
        listener(payload)
      }
    },
  }
}

export const APP_EVENTS = Object.freeze({
  PROGRESS_SAVED: 'progress:saved',
})
