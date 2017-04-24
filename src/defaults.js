export default {
  baseUrl: '',
  headers: { 'Content-Type': 'application/json' },
  credentials: 'same-origin',
  cache: 'default',
  responseType: 'json',
  validateStatus: function (status) {
    return status >= 200 && status < 300
  }
}
