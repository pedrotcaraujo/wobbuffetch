import 'es6-promise/auto'
import 'isomorphic-fetch'

import buildURL from './helpers/buildURL'
import handleStatus from './helpers/handleStatus'
import parseResponse from './helpers/parseResponse'
// import transformData from './helpers/transformData'

function request (method, url, { baseUrl, responseType, validateStatus, params, data, ...fetchConfig }) {
  // const body = transformData(data)

  return fetch(buildURL(baseUrl, url, params), { method, ...fetchConfig })
    .then(response => handleStatus(response, validateStatus))
    .then(response => parseResponse(response, responseType))
}

export default request
