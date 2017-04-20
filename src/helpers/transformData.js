
import { isObject } from '../utils'

export default data => {
  if (isObject(data)) { return JSON.stringify(data) }
  return data
}
