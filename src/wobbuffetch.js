
import defaults from './defaults'
import observableRequest from './observableRequest'
import methods from './methods'
import { isObject } from './utils'

const wobbuffetch = function (config) {
  if (!isObject(config)) { throw Error(`wobbuffetch config is not present or is not an object`) }
  const { url, method } = config
  return observableRequest(url, method, { ...wobbuffetch.defaults, ...config })
}

wobbuffetch.defaults = defaults

methods.forEach((method) => {
  Object.defineProperty(wobbuffetch, method, {
    value: (url, config) => observableRequest(url, method, { ...wobbuffetch.defaults, ...config }),
    writable: false
  })
})

module.exports = wobbuffetch
