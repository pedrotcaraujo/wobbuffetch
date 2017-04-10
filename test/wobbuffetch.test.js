import { expect } from 'chai'
import wobbuffetch from '../src/wobbuffetch'

describe('#wobbuffetch', () => {
  it('should be defined', () => {
    expect(wobbuffetch).to.not.be.undefined
  })
  it('should be a function', () => {
    expect(wobbuffetch).to.be.function
  })
  it('should has "defaults" object', () => {
    expect(wobbuffetch.defaults).to.be.an.object
  })
  it('should has a GET method', () => {
    expect(wobbuffetch.get).to.be.function
  })
  it('should has a HEAD method', () => {
    expect(wobbuffetch.head).to.be.function
  })
  it('should has a DELETE method', () => {
    expect(wobbuffetch.delete).to.be.function
  })
  it('should has a POST method', () => {
    expect(wobbuffetch.post).to.be.function
  })
  it('should has a PUT method', () => {
    expect(wobbuffetch.put).to.be.function
  })
  it('should has a PATCH method', () => {
    expect(wobbuffetch.patch).to.be.function
  })
})
