require('./env');
var im = require('../../..');

describe('vector', function() {
  it('can create an empty vector', function() {
    var v = im.vector();
    expect(v.toArray()).to.eql([]);
  });

  it('can add an item', function() {
    var v = im.vector().push(7);
    expect(v.toArray()).to.eql([7]);
  });

  it('can add multiple items', function() {
    var v = im.vector().push(7).push(8);
    expect(v.toArray()).to.eql([7, 8]);
  });

  it('can be iterated', function() {
    var capture = [];
    im.vector().push(2).push(3).push(4).forEach(function(v) {
      capture.push(v);
    })
    expect(capture).to.eql([2, 3, 4]);
  })
});