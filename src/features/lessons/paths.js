export function coursePath(courseId) {
  return `/curso/${courseId}`
}

export function lessonPath(courseId, lessonId) {
  return `${coursePath(courseId)}/leccion/${lessonId}`
}
