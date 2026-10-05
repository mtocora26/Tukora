import { LocalStorageRepository } from '../core/storage/LocalStorageRepository.js'

/**
 * Composition root for persistence: the only place that decides which
 * `ProgressRepository` implementation the app uses. EPIC-09 swaps this for a
 * `FirebaseRepository` without touching any consumer.
 */
export const progressRepository = new LocalStorageRepository()
