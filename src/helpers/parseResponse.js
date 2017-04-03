export default (response, type = 'json') => {
  const { status, statusText, headers } = response
  return response[type]().then(data => ({ status, statusText, headers, data }))
}
