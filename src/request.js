import 'es6-promise/auto'
import 'isomorphic-fetch'

import checkStatus from 'helpers/checkStatus'
import parseResponse from 'helpers/parseResponse'

function request (method, url, config) {
  const { baseUrl, responseType, validateStatus, ...fetchConfig } = config

  return fetch(baseUrl + url, { method, ...fetchConfig })
    .then(response => checkStatus(response, validateStatus))
    .then(response => parseResponse(response, responseType))
}

export default request
