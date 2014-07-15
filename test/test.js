var mochi = require('mochi')
mochi.use(require('chai-interface'))
var from = require('from')

describe('tuttle', function () {
  var tuttle = require('../')
  
  it('has interface', function () {
    tuttle.should.have.interface({
      read: Function,
      write: Function,
      through: Function
    })
  })

  describe('.read', function () {
    it('parses csvs into objects', function (done) {
      from([new Buffer('a,b,c\n1,2,3\n','utf8')])
        .pipe(tuttle.read())
        .on('data', function (x) {
          x.should.deep.equal({
            a:"1",
            b:"2",
            c:"3"
          })
          done()
        })
    })
  })
})