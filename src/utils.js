export function isObject (val) {
  return val !== null && typeof val === 'object'
}

export function isFunction (val) {
  return typeof val === 'function'
}

export function isFormData (val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData)
}

export function isFile (val) {
  return (typeof File !== 'undefined') && (val instanceof File)
}

export function isBlob (val) {
  return (typeof Blob !== 'undefined') && (val instanceof Blob)
}

export function isStream (val) {
  return isObject(val) && isFunction(val.pipe)
}
