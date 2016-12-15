'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Define wobbufetch module
 */
var wobbufetch = {
  get: function get() {
    console.log('fetching get');
  },
  head: function head() {
    console.log('fetching head');
  },
  delete: function _delete() {
    console.log('fetching delete');
  },
  post: function post() {
    console.log('fetching post');
  },
  put: function put() {
    console.log('fetching put');
  },
  patch: function patch() {
    console.log('fetching patch');
  }
};

exports.default = wobbufetch;