var write = require('csv-write-stream')
var csv = require('binary-csv')
var through = require('through0')
var extend = require('xtend')

function read(opts) {
  return csv(extend({json: true}, opts))
}

module.exports.read = read
module.exports.write = write
module.exports.through = through