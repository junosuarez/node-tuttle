# tuttle
data plumbing toolkit

this is just an easier way to get started using some common csv tools - check out the dependencies for some great modules you might wanna use on their own.

## usage
```js
var tuttle = require('tuttle')
var fs = require('fs')

fs.createReadStream('./in.csv')
  .pipe(tuttle.read({json: true}))
  .pipe(tuttle.through(function (row) {
    console.log(row)
    return row
  }))
  .pipe(tuttle.write())
  .pipe(fs.createWriteStream('./out.csv'))

```

## installation

    $ npm install tuttle


## running the tests

From package root:

    $ npm install
    $ npm test

## named after
Harry Tuttle, heating engineer!


## contributors

- jden <jason@denizac.org>


## license

ISC. (c) MMXIV jden <jason@denizac.org>. See LICENSE.md
