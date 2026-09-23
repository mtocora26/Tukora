/**
 * Port used by application code to persist study progress.
 *
 * Implementations are asynchronous even when their backing store is not. This
 * keeps consumers unchanged when localStorage is replaced by Firestore.
 */
export class ProgressRepository {
  /**
   * @param {string} courseId
   * @returns {Promise<object>}
   */
  async getProgress() {
    throw new Error('ProgressRepository.getProgress must be implemented')
  }

  /**
   * @param {string} courseId
   * @param {object} progress
   * @returns {Promise<object>}
   */
  async saveProgress() {
    throw new Error('ProgressRepository.saveProgress must be implemented')
  }

  /**
   * @param {string} courseId
   * @returns {Promise<void>}
   */
  async clearProgress() {
    throw new Error('ProgressRepository.clearProgress must be implemented')
  }
}
