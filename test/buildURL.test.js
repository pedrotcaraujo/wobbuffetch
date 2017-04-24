import { expect } from 'chai'
import buildURL from '../src/helpers/buildURL'

describe('#buildURL', () => {
  it('should be a function', () => {
    expect(buildURL).to.be.a('function')
  })
  it('should build a base url', () => {
    expect(buildURL('http://base/')).to.be.equals('http://base/?')
  })
  it('should build a base url with context', () => {
    expect(buildURL('http://base/', 'context')).to.be.equals('http://base/context?')
  })
  it('should build a base url with context and params', () => {
    expect(buildURL('http://base/', 'context', { q: 'queryparam' })).to.be.equals('http://base/context?q=queryparam')
  })
  it('should build a base url with params', () => {
    expect(buildURL('http://base/', null, { q: 'queryparam' })).to.be.equals('http://base/?q=queryparam')
  })
  it('should build an url with params', () => {
    expect(buildURL(null, 'context', { q: 'queryparam' })).to.be.equals('context?q=queryparam')
  })
  it('should build with multiple params', () => {
    expect(buildURL('http://base/', 'context', { q: 'queryparam', q2: 'queryparam2' })).to.be.equals('http://base/context?q=queryparam&q2=queryparam2')
  })
  it('should build with null params', () => {
    expect(buildURL('http://base/', 'context', null)).to.be.equals('http://base/context?')
  })
})
