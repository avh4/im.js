require('./env');
var im = require('../../..');

describe('map', function() {
  it('can create an empty map', function() {
    var v = im.map();
    expect(v.toObject()).to.eql({});
  });

  it('can add a value', function() {
    var v = im.map().assoc('v', 7);
    expect(v.toObject()).to.eql({ v: 7 });
  });

  it('can add multiple values', function() {
    var v = im.map().assoc('v', 7).assoc('w', 8);
    expect(v.toObject()).to.eql({ v: 7, w: 8});
  });

  it('can retrieve values', function() {
    var v = im.map().assoc('v', 7);
    expect(v.get('v')).to.eql(7);
  });
});
