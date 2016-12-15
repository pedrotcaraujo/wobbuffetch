/**
 * Define wobbufetch module
 */
const wobbufetch = {
  get: () => {
    console.log('fetching get')
  },
  head: () => {
    console.log('fetching head')
  },
  delete: () => {
    console.log('fetching delete')
  },
  post: () => {
    console.log('fetching post')
  },
  put: () => {
    console.log('fetching put')
  },
  patch: () => {
    console.log('fetching patch')
  }
}

export default wobbufetch
