import defaults from 'defaults'
import observableRequest from 'observableRequest'

const METHODS = ['get', 'head', 'delete', 'post', 'put', 'patch']

const wobbuffetch = function (config) {
  if (typeof config === 'object') {
    const {url, method} = config
    return observableRequest(url, method, { ...wobbuffetch.defaults, ...config })
  }
}

wobbuffetch.defaults = defaults

METHODS.forEach((method) => {
  wobbuffetch[method] = (url, config) => observableRequest(url, method, { ...wobbuffetch.defaults, ...config })
})

module.exports = wobbuffetch
