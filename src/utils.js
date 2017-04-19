export function isObject (data) {
  return data !== null && typeof data === 'object'
}

export function isFunction (data) {
  return typeof data === 'function'
}

export function isString (data) {
  return typeof data === 'string'
}

export function isFormData (data) {
  return (typeof FormData !== 'undefined') && (data instanceof FormData)
}

export function isBlob (data) {
  return (typeof Blob !== 'undefined') && (data instanceof Blob)
}

export function isArrayBuffer (data) {
  return (typeof ArrayBuffer !== 'undefined') && (data instanceof ArrayBuffer)
}

export function isURLSearchParams (data) {
  return (typeof URLSearchParams !== 'undefined') && (data instanceof URLSearchParams)
}
