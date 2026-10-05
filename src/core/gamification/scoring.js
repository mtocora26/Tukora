// Reglas de puntuación de una sesión. Cambiarlas aquí cambia toda la app.
export const XP_RULES = Object.freeze({
  perCorrect: 10, // acierto a la primera
  perReviewed: 2, // error corregido en el repaso
  perfectBonus: 20, // 100% a la primera
  comboMin: 3, // combo mínimo que da bonus…
  perComboItem: 2, // …de 2 XP por cada acierto del mejor combo
})

/** 3★ desde 90%, 2★ desde 60%, 1★ por terminar la lección. */
export function starsForAccuracy(accuracy) {
  if (accuracy >= 90) return 3
  if (accuracy >= 60) return 2
  return 1
}

/**
 * @param {{ correct: number, reviewed: number, accuracy: number, maxCombo: number }} stats
 * @returns {{ total: number, breakdown: { label: string, xp: number }[] }}
 */
export function xpForSession(stats) {
  const breakdown = [
    { label: 'Aciertos a la primera', xp: stats.correct * XP_RULES.perCorrect },
    { label: 'Errores corregidos', xp: stats.reviewed * XP_RULES.perReviewed },
    {
      label: 'Lección perfecta',
      xp: stats.accuracy === 100 ? XP_RULES.perfectBonus : 0,
    },
    {
      label: `Mejor combo (${stats.maxCombo})`,
      xp:
        stats.maxCombo >= XP_RULES.comboMin
          ? stats.maxCombo * XP_RULES.perComboItem
          : 0,
    },
  ].filter((line) => line.xp > 0)

  return {
    total: breakdown.reduce((sum, line) => sum + line.xp, 0),
    breakdown,
  }
}
