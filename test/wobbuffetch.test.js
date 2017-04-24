import fetchMock from 'fetch-mock'
import { expect } from 'chai'
import wfetch from '../src/wobbuffetch'

const data = { hello: 'world' }

describe('#wobbuffetch', () => {
  afterEach(() => {
    fetchMock.restore()
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
  describe('INSTANCE', () => {
    beforeEach(() => {
      fetchMock.get('*', data)
      fetchMock.post('*', data)
    })
    it('should call with the instance wobbuffetch', () => {
      expect(wfetch({ url: 'http://something' }).subscribe).to.be.an('function')
    })
    it('should call with the instance wobbuffetch other method', () => {
      expect(wfetch({ url: 'http://something', method: 'post' }).subscribe).to.be.an('function')
    })
  })
  describe('GET', () => {
    beforeEach(() => {
      fetchMock.get('*', data)
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
  })
  describe('HEAD', () => {
    beforeEach(() => {
      fetchMock.head('*', data)
    })
    it('should HEAD return Observable', () => {
      expect(wfetch.head('http://something').subscribe).to.be.an('function')
    })
    it('should HEAD return response without data', (done) => {
      wfetch.head('http://something').subscribe(res => {
        expect(res.status).to.be.equal(200)
        expect(res.statusText).to.be.equal('OK')
        expect(res.headers).to.be.instanceof(Headers)
        expect(res.data).to.be.undefined
        done()
      })
    })
  })
  describe('DELETE', () => {
    beforeEach(() => {
      fetchMock.delete('*', data)
    })
    it('should DELETE return Observable', () => {
      expect(wfetch.delete('http://something').subscribe).to.be.an('function')
    })
    it('should DELETE return response', (done) => {
      wfetch.delete('http://something').subscribe(res => {
        expect(res.status).to.be.equal(200)
        expect(res.statusText).to.be.equal('OK')
        expect(res.headers).to.be.instanceof(Headers)
        done()
      })
    })
  })
  describe('POST', () => {
    beforeEach(() => {
      fetchMock.post('*', data)
    })
    it('should POST return Observable', () => {
      expect(wfetch.post('http://something').subscribe).to.be.an('function')
    })
    it('should POST return response', (done) => {
      wfetch.post('http://something').subscribe(res => {
        expect(res.status).to.be.equal(200)
        expect(res.statusText).to.be.equal('OK')
        expect(res.headers).to.be.instanceof(Headers)
        done()
      })
    })
    it('should POST data', (done) => {
      const body = { 'body': 'builder' }
      wfetch.post('http://something', { data: body }).subscribe(res => {
        expect(res.status).to.be.equal(200)
        expect(res.statusText).to.be.equal('OK')
        expect(res.headers).to.be.instanceof(Headers)
        expect(fetchMock.lastOptions().method).to.be.equals('post')
        expect(JSON.parse(fetchMock.lastOptions().body)).to.deep.equal(body)
        done()
      })
    })
  })
  describe('PUT', () => {
    beforeEach(() => {
      fetchMock.put('*', data)
    })
    it('should PUT return Observable', () => {
      expect(wfetch.put('http://something').subscribe).to.be.an('function')
    })
    it('should PUT return response', (done) => {
      wfetch.put('http://something').subscribe(res => {
        expect(res.status).to.be.equal(200)
        expect(res.statusText).to.be.equal('OK')
        expect(res.headers).to.be.instanceof(Headers)
        done()
      })
    })
    it('should PUT data', (done) => {
      const body = { 'body': 'builder' }
      wfetch.put('http://something', { data: body }).subscribe(res => {
        expect(res.status).to.be.equal(200)
        expect(res.statusText).to.be.equal('OK')
        expect(res.headers).to.be.instanceof(Headers)
        expect(fetchMock.lastOptions().method).to.be.equals('put')
        expect(JSON.parse(fetchMock.lastOptions().body)).to.deep.equal(body)
        done()
      })
    })
  })
  describe('PATCH', () => {
    beforeEach(() => {
      fetchMock.patch('*', data)
    })
    it('should PATCH return Observable', () => {
      expect(wfetch.patch('http://something').subscribe).to.be.an('function')
    })
    it('should PATCH return response', (done) => {
      wfetch.patch('http://something').subscribe(res => {
        expect(res.status).to.be.equal(200)
        expect(res.statusText).to.be.equal('OK')
        expect(res.headers).to.be.instanceof(Headers)
        done()
      })
    })
    it('should PATCH data', (done) => {
      const body = { 'body': 'builder' }
      wfetch.patch('http://something', { data: body }).subscribe(res => {
        expect(res.status).to.be.equal(200)
        expect(res.statusText).to.be.equal('OK')
        expect(res.headers).to.be.instanceof(Headers)
        expect(fetchMock.lastOptions().method).to.be.equals('patch')
        expect(JSON.parse(fetchMock.lastOptions().body)).to.deep.equal(body)
        done()
      })
    })
  })
  describe('Error treatment', () => {
    beforeEach(() => {
      fetchMock.get('http://something', 200).catch(503)
    })
    it('should throw Object error', () => {
      expect(() => { wfetch() }).to.throw('wobbuffetch config is not present or is not an object')
    })
    it('should throw URL error', () => {
      expect(() => { wfetch({}) }).to.throw('wobbuffetch: URL is required')
    })
    it('should throw method error', () => {
      expect(() => { wfetch({ url: 'http://something', method: 'options' }) }).to.throw('wobbuffetch: : this \'options\' method does not supported')
    })
    it('should catch status', (done) => {
      wfetch({ url: 'http://nothing' }).subscribe(res => {}, err => {
        expect(err).to.be.instanceOf(Error)
        expect(err.response).to.be.instanceOf(Response)
        expect(err.response.status).to.be.equals(503)
        done()
      })
    })
  })
})
