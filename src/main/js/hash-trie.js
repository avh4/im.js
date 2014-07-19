var p = require('persistent-hash-trie');

function Map(trie) {
  this.trie = trie || p.Trie();
  this.assoc = function(k, v)  {
    return new Map(p.assoc(this.trie, k, v));
  }
  this.toObject = function() {
    return p.mutable(this.trie);
  }
  this.get = function(k) {
    return p.get(this.trie, k);
  }
}

module.exports = function() {
  return new Map();
}