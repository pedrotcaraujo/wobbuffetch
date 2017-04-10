
import {
  isObject,
  isFormData,
  isArrayBuffer,
  isArrayBufferView,
  isStream,
  isFile,
  isBlob } from '../utils'

function _isStandardData (data) {
  return isFormData(data) || isArrayBuffer(data) || isStream(data) || isFile(data) || isBlob(data)
}

export default data => {
  if (_isStandardData(data)) { return data }
  if (isArrayBufferView(data)) { return data.buffer }
  if (isObject(data)) { return JSON.stringify(data) }

  return data
}
