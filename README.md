![Wobbuffet](wobbuffet.png "Wobbuffet")

# wobbuffetch

[![Build Status](https://travis-ci.org/pedrotcaraujo/wobbuffetch.svg?branch=master)](https://travis-ci.org/pedrotcaraujo/wobbuffetch)
[![Coverage Status](https://coveralls.io/repos/github/pedrotcaraujo/wobbuffetch/badge.svg?branch=master)](https://coveralls.io/github/pedrotcaraujo/wobbuffetch?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)

Reactive wrapper for HTTP requests using Fetch API

## Why

Handling asynchronous and event-based requests is boring. Sometimes we need to manipulate data loaded from a server with only what we need, merge, debounce, distinct and so on. Wobbuffetch is a reactive  http library that wraps Fetch API along with a set of observable collections that make your life easier.

## Features

- Easy to use
- [Fetch API](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch) features
- Observable api collections ([RxJS](http://reactivex.io/))
- Automatic transforms for JSON data
- Runs from browser and server

## Learn

- About Fetch API: [Using Fetch MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch), [fetch API - david walsh](https://davidwalsh.name/fetch)
- About ReactiveX: [RxJS Doc](http://reactivex.io/rxjs/), [RxJS Github](https://github.com/Reactive-Extensions/RxJS)
- __See the Observable super power in [RX Marbles - Interactive diagrams](http://rxmarbles.com/)__

## Installing

Via npm:
```bash
$ npm install wobbuffetch
```

Via cdn:
```html
<script src="https://unpkg.com/wobbuffetch/dist/wobbuffetch.min.js"></script>
```

## How to use

GET example:
```js
import wfetch from 'wobbuffetch';

/* api data posts
"posts": [
    {
      "id": 1,
      "title": "FRP for life",
      "author": "anonymous"
    },
    {
      "id": 2,
      "title": "Imperative programming from hell",
      "author": "Demo"
    }
  ]
*/

wfetch.get('http://api.mydomain.com/posts').subscribe(res => console.log(res))

/* response:
{
  data: [
    { "id": 1, "title": "FRP for life", "author": "anonymous" },
    { "id": 2, "title": "Imperative programming from hell", "author": "Demo" }
  ],
  status: 200,
  statusText: 'Ok',
  headers: { Content-Type: application/json },
}
*/

wfetch.get('http://api.mydomain.com/posts').flatMap(res => res.data).subscribe(post => console.log(post))

/* response with flatMap:
  { "id": 1, "title": "FRP for life", "author": "anonymous" },
  { "id": 2, "title": "Imperative programming from hell", "author": "Demo" }
*/
```

POST example:
```js

wfetch.post('http://api.mydomain.com/posts' {
  data: {
    title: 'How Reactive js works',
    author: 'You'
  }}).subscribe(res => console.log(res))

/* response:
{
  data: { "id": 3, "title": "How wobbuffetch js works", "author": "You" },
  status: 200,
  statusText: 'Ok',
  headers: { Content-Type: application/json },
}
*/

wfetch.post('http://api.mydomain.com/posts' {
  data: {
    title: 'Wobbuffetch js is handy',
    author: 'me'
  }}).map(res => res.data.title).subscribe(title => console.log(title))

/* response with map:
  'Wobbuffetch js is handy'
*/
```

Error handling:

```js

function _success(response) {
  console.log(`Success: ${response.status}`)
}

function _error({ response }) {
  console.log(`Error: ${response.status}`)
}


wfetch.get('http://mydomain/api/posts/30').subscribe(_success, _error)

/* response Error:
  'Error: 404'
*/

```

To learn more see [RxJS from promise](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/frompromise.md).

### Default configuration

We often need to set additional request options, but some of them are default in the wobbuffetch library. For more information and options check out [Fetch API options](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch).

An important change in Fetch API is that the option `body` is now `data` in wobbuffetch.

```js
{
  baseUrl: '', // Base URL to use in every request
  headers: { 'Content-Type': 'application/json' }, // Fetch API:  Object literal as headers
  credentials: 'same-origin', // Fetch API: Only send cookies if the URL is from the same origin as the calling script.
  cache: 'default',  // Fetch API:  The browser looks for a matching request in its HTTP cache.
  responseType: 'json', // Methods to extract the body from the response (ex: 'arrayBuffer', 'blob', 'json', 'text')
  // Defines if the response will be resolved or rejected given a status.
  validateStatus: function (status) {
    return status >= 200 && status < 300
  }
}
```

Config default:

```js
import wfetch from 'wobbuffetch';

wfetch.defaults.baseURL = 'http://api.mydomain.com'
wfetch.defaults.headers = { 'Content-Type': 'text/xml' }
wfetch.defaults.responseType = 'text'

```
### Response schema

```js
{
	status: 200, // HTTP status code from the server
	statusText: 'OK', // HTTP status message from the server
	headers: {}, // Headers from the server
	data: {}, // Response data requested from the server ( 'HEAD' method does not receive this)
}
```


### Methods

Instance methods: __wobbuffetch#method(url[, config])__

#### GET
```js
wobbuffetch.get('http://api.mydomain.com/posts').subscribe(res => {
	// Do something ...
})
```
with params:
```js
wobbuffetch.get('http://api.mydomain.com/posts', { // http://api.mydomain.com/posts?title=you
	params: { title: 'you' }
}).subscribe(res => {
	// Do something ...
})
```
#### HEAD
```js
// Method 'head' has no 'data'
wobbuffetch.head('http://api.mydomain.com/posts').subscribe(res => {
	console.log(res.data) // undefined
})
```
#### DELETE
```js
wobbuffetch.delete('http://api.mydomain.com/posts/1').subscribe(res => {
	// Do something ...
})
```
#### POST
```js
// Wobbuffetch there is no options 'body' anymore, use 'data' instead
wobbuffetch.post('http://api.mydomain.com/posts', {
	data: { // It can receives object literal now
		title: 'something',
		author: 'unknown'
	}
}).subscribe(res => {
	// Do something ...
})
```
#### PUT
```js
// Wobbuffetch has no option 'body' anymore, use 'data' instead
wobbuffetch.put('http://api.mydomain.com/posts', {
	data: { // It can receive object literals now
		title: 'something',
		author: 'unknown'
	}
}).subscribe(res => {
	// Do something ...
})
```
#### PATCH
```js
// Wobbuffetch has no option 'body' anymore, use 'data' instead
wobbuffetch.patch('http://api.mydomain.com/posts', {
	data: { // It can receives object literal now
		title: 'something',
		author: 'unknown'
	}
}).subscribe(res => {
	// Do something ...
})
```

## by
[@pedrotcaraujo](https://twitter.com/pedrotcaraujo)
