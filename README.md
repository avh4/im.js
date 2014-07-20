[![Build Status](https://secure.travis-ci.org/avh4/im.js.svg)](http://travis-ci.org/avh4/im.js)
[![Stability: 1 - Experimental](http://img.shields.io/badge/stability-experimental-orange.svg)](http://nodejs.org/api/documentation.html#documentation_stability_index)

Currently implemented:

 - vector, using shallow native-array tree, from [josef-jelinek/cofy:feat-vector](https://github.com/josef-jelinek/cofy/blob/master/lang/feat-vector.js)
 - map, using hash trie, from [hughfdjackson/persistent-hash-trie](https://github.com/hughfdjackson/persistent-hash-trie)

Future:

 - Improve hash trie using "Array-Mapping" (Bagwell (2001) - Ideal Hash Tries), described in [hughfdjackson/persistent-hash-trie #10](https://github.com/hughfdjackson/persistent-hash-trie/issues/10)
 - convenience wrappers around persistent-hash-trie [hughfdjackson/immutable](https://github.com/hughfdjackson/immutable)
 - Improve performance of `vector.forEach` by directly iterating and not relying on `toArray`
