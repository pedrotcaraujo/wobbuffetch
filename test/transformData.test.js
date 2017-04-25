import 'jsdom-global/register'
import 'url-search-params-polyfill'

import { expect } from 'chai'
import transformData from '../src/helpers/transformData'


describe('#transformData', () => {
  it('should be a function', () => {
    expect(transformData).to.be.a('function')
  })
  it('should return a string object', () => {
    expect(transformData({a: 'a'})).to.be.equals('{"a":"a"}')
  })
  it('should return a FormData', () => {
    const formData = new FormData()
    expect(transformData(formData)).to.deep.equal(formData)
  })
  it('should return a Blob', () => {
    const file = ['hello']
    const blob = new Blob(file, { type: 'text/html' })
    expect(transformData(blob)).to.deep.equal(blob)
  })
  it('should return an ArrayBuffer', () => {
    const buffer = new ArrayBuffer()
    expect(transformData(buffer)).to.deep.equal(buffer)
  })
  it('should return an URLSearchParams', () => {
    const urlParam = new URLSearchParams('q=hello')
    expect(transformData(urlParam)).to.deep.equal(urlParam)
  })
})
