import 'es6-promise/auto'
import 'isomorphic-fetch'

import buildURL from './helpers/buildURL'
import checkStatus from './helpers/checkStatus'
import parseResponse from './helpers/parseResponse'

function request (method, url, { baseUrl, responseType, validateStatus, params, ...fetchConfig }) {

  return fetch(buildURL(baseUrl, url, params), { method, ...fetchConfig })
    .then(response => checkStatus(response, validateStatus))
    .then(response => parseResponse(response, responseType))
}

export default request
