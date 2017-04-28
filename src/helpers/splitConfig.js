export default ({ baseURL, responseType, validateStatus, params, data, ...fetchConfig }) => ({
  wfetchConfig: { baseURL, responseType, validateStatus, params, data }, fetchConfig
})
