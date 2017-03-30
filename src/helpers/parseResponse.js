export default (response, type) => {
  return response[type]()
}
