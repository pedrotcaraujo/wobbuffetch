import qparams from 'query-params'

export default (base, url, params) => {
  return `${base || ''}${url || ''}?${qparams.encode(params || {})}`
}
