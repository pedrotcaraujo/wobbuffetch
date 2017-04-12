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
  describe('GET', () => {
    it('should return an object with subscribe function', () => {
      expect(wfetch.get('http://something').subscribe).to.be.an('function')
    })
    it('should test response', (done) => {
      wfetch.get('http://something').subscribe(res => {
        expect(res.status).to.be.equal(200)
        expect(res.statusText).to.be.equal('OK')
        expect(res.headers).to.be.instanceof(Headers)
        expect(res.data).to.deep.equal(data)
        done()
      })
    })
    it('should test config param', () => {
      wfetch.get('http://something', { params: data })
      expect(fetchMock.lastUrl()).to.be.equal('http://something?hello=world')
    })
  })
  // describe('HEAD', () => {
  //   it('should return an object with subscribe function', () => {
  //     expect(wfetch.head('http://something').subscribe).to.be.an('function')
  //   })
  // })
  // describe('DELETE', () => {
  //   it('should return an object with subscribe function', () => {
  //     expect(wfetch.delete('http://something').subscribe).to.be.an('function')
  //   })
  // })
  // describe('POST', () => {
  //   it('should return an object with subscribe function', () => {
  //     expect(wfetch.post('http://something').subscribe).to.be.an('function')
  //   })
  // })
  // describe('PUT', () => {
  //   it('should return an object with subscribe function', () => {
  //     expect(wfetch.put('http://something').subscribe).to.be.an('function')
  //   })
  // })
  // describe('PATCH', () => {
  //   it('should return an object with subscribe function', () => {
  //     expect(wfetch.patch('http://something').subscribe).to.be.an('function')
  //   })
  // })
})
