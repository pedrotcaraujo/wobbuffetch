import { Observable } from 'rx'
import localFetch from 'localFetch'
import defaults from 'defaults'

const wobbuffetch = { defaults }
const METHODS = ['get', 'head', 'delete', 'post', 'put', 'patch']

METHODS.forEach((method) => {
  wobbuffetch[method] = (url, config) => Observable.fromPromise(localFetch(method, url, {...wobbuffetch.defaults, ...config}))
})

module.exports = wobbuffetch
