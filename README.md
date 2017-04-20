![Wobbuffet](wobbuffet.png "Wobbuffet")

# wobbuffetch

[![Build Status](https://travis-ci.org/pedrotcaraujo/wobbuffetch.svg?branch=master)](https://travis-ci.org/pedrotcaraujo/wobbuffetch)
[![Coverage Status](https://coveralls.io/repos/github/pedrotcaraujo/wobbuffetch/badge.svg?branch=master)](https://coveralls.io/github/pedrotcaraujo/wobbuffetch?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)

Reactive wrapper for HTTP requests using Fetch API

## Why

Handle asynchronous and event-based programs are boring. Sometimes we need to manipulate data loaded from the some server getting only what we need, merge, debounce, distinct and so on. Wobbuffetch is a reactive  http library that wrap Fetch API along with a set of observable collections that make your life easier.

## Features

- Easy to use
- Fetch API features
- Observable api collections
- Automatic transforms for JSON data
- Runs from browser and server

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

wfetch.get('http://mydomain/api/posts').subscribe(res => console.log(res))

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

wfetch.get('http://mydomain/api/posts').flatMap(res => res.data).subscribe(post => console.log(post))

/* response with flatMap:
  { "id": 1, "title": "FRP for life", "author": "anonymous" },
  { "id": 2, "title": "Imperative programming from hell", "author": "Demo" }
*/
```

