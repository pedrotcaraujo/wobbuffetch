import { expect } from 'chai'
import { isObject, isFunction } from '../src/utils'

describe('#utils', () => {
  describe('#isObject', () => {
    it('should be defined', () => {
      expect(isObject).to.not.be.undefined
    })
    it('should pass a literal object and return true', () => {
      expect(isObject({})).to.be.true
    })
    it('should pass number and return false', () => {
      expect(isObject(1)).to.be.false
    })
    it('should pass string and return false', () => {
      expect(isObject('asd')).to.be.false
    })
    it('should pass array and return true', () => {
      expect(isObject([])).to.be.true
    })
    it('should pass null and return false', () => {
      expect(isObject(null)).to.be.false
    })
  })
  describe('#isFuncion', () => {
    it('should be a function', () => {
      expect(isFunction).to.not.be.undefined
    })
    it('should pass function and return true', () => {
      expect(isFunction(function () {})).to.be.true
    })
    it('should pass arrow function and return true', () => {
      expect(isFunction(() => {})).to.be.true
    })
    it('should pass Function object and return true', () => {
      expect(isFunction(Function)).to.be.true
    })
    it('should pass number and return false', () => {
      expect(isFunction(1)).to.be.false
    })
  })
})
