import fetchMock from 'fetch-mock'
import { expect } from 'chai'
import wfetch from '../src/wobbuffetch'

const data = { hello: 'world' }

describe('#wobbuffetch', () => {
  beforeEach(() => {
    fetchMock.get('*', data)
    fetchMock.head('*', data)
    fetchMock.delete('*', data)
    fetchMock.post('*', data)
    fetchMock.put('*', data)
    fetchMock.patch('*', data)
  })
  it('should be defined', () => {
    expect(wfetch).to.not.be.undefined
  })
  it('should be a function', () => {
    expect(wfetch).to.be.a('function')
  })
  it('should has "defaults" object', () => {
    expect(wfetch.defaults).to.be.an('object')
  })
  it('should has a GET method', () => {
    expect(wfetch.get).to.be.a('function')
  })
  it('should has a HEAD method', () => {
    expect(wfetch.head).to.be.a('function')
  })
  it('should has a DELETE method', () => {
    expect(wfetch.delete).to.be.a('function')
  })
  it('should has a POST method', () => {
    expect(wfetch.post).to.be.a('function')
  })
  it('should has a PUT method', () => {
    expect(wfetch.put).to.be.a('function')
  })
  it('should has a PATCH method', () => {
    expect(wfetch.patch).to.be.a('function')
  })
  it('should call with config param', () => {
    wfetch.get('http://something', { params: data })
    expect(fetchMock.lastUrl()).to.be.equal('http://something?hello=world')
  })
  it('should GET return Observable', () => {
    expect(wfetch.get('http://something').subscribe).to.be.an('function')
  })
  it('should test GET response', (done) => {
    wfetch.get('http://something').subscribe(res => {
      expect(res.status).to.be.equal(200)
      expect(res.statusText).to.be.equal('OK')
      expect(res.headers).to.be.instanceof(Headers)
      expect(res.data).to.deep.equal(data)
      done()
    })
  })
  it('should HEAD return Observable', () => {
    expect(wfetch.head('http://something').subscribe).to.be.an('function')
  })
  it('should HEAD not return data', (done) => {
    wfetch.head('http://something').subscribe(res => {
      expect(res.status).to.be.equal(200)
      expect(res.statusText).to.be.equal('OK')
      expect(res.headers).to.be.instanceof(Headers)
      expect(res.data).to.be.undefined
      done()
    })
  })
  it('should DELETE return Observable', () => {
    expect(wfetch.delete('http://something').subscribe).to.be.an('function')
  })
  it('should POST return Observable', () => {
    expect(wfetch.post('http://something').subscribe).to.be.an('function')
  })
  it('should PUT return Observable', () => {
    expect(wfetch.put('http://something').subscribe).to.be.an('function')
  })
  it('should PATCH return Observable', () => {
    expect(wfetch.patch('http://something').subscribe).to.be.an('function')
  })
})
