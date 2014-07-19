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
});