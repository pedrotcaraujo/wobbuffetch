export default ({ baseUrl, responseType, validateStatus, params, data, ...fetchConfig }) => ({
  wfetchConfig: { baseUrl, responseType, validateStatus, params, data }, fetchConfig
})
