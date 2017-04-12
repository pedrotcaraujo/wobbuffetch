
function isMethodHEAD (method) {
  return method !== 'head'
}

export default (method, response, type = 'json') => {
  const { status, statusText, headers } = response
  if (isMethodHEAD(method)) {
    return response[type]().then(data => ({ status, statusText, headers, data }))
  }

  return { status, statusText, headers }
}
