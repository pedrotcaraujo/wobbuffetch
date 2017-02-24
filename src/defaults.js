export default {
  credentials: 'same-origin',
  responseType: 'json',
  params: {},
  validateStatus: function (status) {
    return status >= 200 && status < 300
  }
}
