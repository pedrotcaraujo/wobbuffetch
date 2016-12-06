'use strict';

var expect = require('chai').expect;
var wobbuffetch = require('../src/wobbuffetch');

describe('#wobbuffetch', function() {
    it('should be defined', function() {
        expect(wobbuffetch).to.not.be.undefined;
    });
});