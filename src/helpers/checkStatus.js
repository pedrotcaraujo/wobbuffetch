export default (response, validateStatus) => {
  if (validateStatus(response.status)) {
    return response
  } else {
    let error = new Error(response.statusText)
    error.response = response
    throw error
  }
}
