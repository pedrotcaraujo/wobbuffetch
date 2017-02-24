export default (response, validateStatus) => {
  if (validateStatus(response.status)) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}
