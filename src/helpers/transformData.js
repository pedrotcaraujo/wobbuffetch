import {
  isObject,
  isFormData,
  isArrayBuffer,
  isURLSearchParams,
  isBlob } from '../utils'

function _isStandardData (data) {
  return isFormData(data) || isBlob(data) || isArrayBuffer(data) || isURLSearchParams(data)
}

export default data => {
  if (_isStandardData(data)) { return data }
  if (isObject(data)) { return JSON.stringify(data) }

  return data
}
