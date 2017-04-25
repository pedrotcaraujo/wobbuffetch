import 'jsdom-global/register'
import 'url-search-params-polyfill'

import { expect } from 'chai'
import {
  isObject,
  isFunction,
  isString,
  isFormData,
  isBlob,
  isArrayBuffer,
  isURLSearchParams
 } from '../src/utils'

describe('#utils', () => {
  describe('isObject', () => {
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
  describe('isFuncion', () => {
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
  describe('isString', () => {
    it('should be a function', () => {
      expect(isString).to.not.be.undefined
    })
    it('should pass string and return true', () => {
      expect(isString('aaa')).to.be.true
    })
    it('should pass null and return false', () => {
      expect(isString(null)).to.be.false
    })
    it('should pass array and return false', () => {
      expect(isString([])).to.be.false
    })
  })
  describe('isFormData', () => {
    it('should be a function', () => {
      expect(isFormData).to.not.be.undefined
    })
    it('should be a FormData', () => {
      const formData = new FormData()
      expect(isFormData(formData)).to.be.true
    })
    it('should not be a FormData', () => {
      expect(isFormData({})).to.be.false
    })
  })
  describe('isBlob', () => {
    it('should be a function', () => {
      expect(isBlob).to.not.be.undefined
    })
    it('should be a Blob', () => {
      const file = ['hello']
      const blob = new Blob(file, { type: 'text/html' })
      expect(isBlob(blob)).to.be.true
    })
    it('should not be a Blob', () => {
      expect(isBlob({})).to.be.false
    })
  })
  describe('isArrayBuffer', () => {
    it('should be a function', () => {
      expect(isArrayBuffer).to.not.be.undefined
    })
    it('should be an ArrayBuffer', () => {
      const buffer = new ArrayBuffer()
      expect(isArrayBuffer(buffer)).to.be.true
    })
    it('should not be an ArrayBuffer', () => {
      expect(isArrayBuffer({})).to.be.false
    })
  })
  describe('isURLSearchParams', () => {
    it('should be a function', () => {
      expect(isURLSearchParams).to.not.be.undefined
    })
    it('should be an URLSearchParams', () => {
      const urlParam = new URLSearchParams('q=hello')
      expect(isURLSearchParams(urlParam)).to.be.true
    })
    it('should not an URLSearchParams', () => {
      expect(isURLSearchParams({})).to.be.false
    })
  })
})
