import { Observable } from 'rx'
import request from './request'

function observableRequest (url, method, config) {
  return Observable.fromPromise(request(method, url, config))
}

export default observableRequest
