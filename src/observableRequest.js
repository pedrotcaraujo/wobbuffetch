import { Observable } from 'rx'
import request from './request'
import methods from './methods'
import includes from 'array-includes'

function _resolveConfig (url, method) {
  if (!url) { throw Error(`wobbuffetch: URL is required`) }
  if (method && !includes(methods, method.toLowerCase())) { throw Error(`wobbuffetch: : this '${method}' method does not supported`) }
}

function observableRequest (url, method, config) {
  _resolveConfig(url, method, config)
  return Observable.fromPromise(request(method, url, config))
}

export default observableRequest
