import includes from 'array-includes'
import { isObject } from './utils'
import defaults from './defaults'
import observableRequest from './observableRequest'

const METHODS = ['get', 'head', 'delete', 'post', 'put', 'patch']

function _resolveConfig (config) {
  if (!isObject(config)) { throw Error(`wobbuffetch config is not present or is not an object`) }
  if (!config.url) { throw Error(`wobbuffetch: URL is required`) }
  if (config.method && !includes(METHODS, config.method.toLowerCase())) { throw Error(`wobbuffetch: : this '${config.method}' method does not supported`) }
}

const wobbuffetch = function (config) {
  _resolveConfig(config)
  const { url, method } = config
  return observableRequest(url, method, { ...wobbuffetch.defaults, ...config })
}

wobbuffetch.defaults = defaults

METHODS.forEach((method) => {
  Object.defineProperty(wobbuffetch, method, {
    value: (url, config) => observableRequest(url, method, { ...wobbuffetch.defaults, ...config }),
    writable: false
  })
})

module.exports = wobbuffetch
