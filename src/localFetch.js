import 'es6-promise/auto'
import 'isomorphic-fetch'

import checkStatus from 'utils/checkStatus'
import parseResponse from 'utils/parseResponse'

function localFetch (method, url, config) {
  const { responseType, params, validateStatus } = config
  return fetch(url, config)
    .then(response => checkStatus(response, validateStatus))
    .then(response => parseResponse(response, responseType))
}

export default localFetch
