import 'es6-promise/auto'
import 'isomorphic-fetch'

import buildURL from './helpers/buildURL'
import handleStatus from './helpers/handleStatus'
import parseResponse from './helpers/parseResponse'

function request (method, url, { baseUrl, responseType, validateStatus, params, ...fetchConfig }) {
  return fetch(buildURL(baseUrl, url, params), { method, ...fetchConfig })
    .then(response => handleStatus(response, validateStatus))
    .then(response => parseResponse(response, responseType))
}

export default request
