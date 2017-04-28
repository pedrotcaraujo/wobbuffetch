import 'es6-promise/auto'
import 'isomorphic-fetch'

import splitConfig from './helpers/splitConfig'
import buildURL from './helpers/buildURL'
import handleStatus from './helpers/handleStatus'
import parseResponse from './helpers/parseResponse'
import transformData from './helpers/transformData'

function request (method, url, config) {
  const { fetchConfig, wfetchConfig } = splitConfig(config)

  const builtURL = buildURL(wfetchConfig.baseURL, url, wfetchConfig.params)
  const body = transformData(wfetchConfig.data)

  return fetch(builtURL, { method, body, ...fetchConfig })
    .then(response => handleStatus(response, wfetchConfig.validateStatus))
    .then(response => parseResponse(method, response, wfetchConfig.responseType))
}

export default request
