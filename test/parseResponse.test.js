import { expect } from 'chai'
import parseResponse from '../src/helpers/parseResponse'

describe('#parseResponse', () => {
  it('should be a function', () => {
    expect(parseResponse).to.be.a('function')
  })
  it('should return a promise', () => {
    const response = new Response('test', { status: 200 })
    expect(parseResponse('get', response, 'text').then).to.be.a('function')
  })
  it('should pass a text type', (done) => {
    const data = 'hello'
    const response = new Response(data, { status: 200 })
    parseResponse('get', response, 'text').then(res => {
        expect(res.data).to.be.a('string')
        expect(res.data).to.be.equals(data)
        done()
    })
  })
})
