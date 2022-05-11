# collectio-hashmap

[![npm version](https://badge.fury.io/js/collectio-hashmap.svg)](https://www.npmjs.com/package/collectio-hashmap)
[![npm downloads](https://img.shields.io/npm/dt/collectio-hashmap.svg)](https://www.npmjs.com/package/collectio-hashmap)
[![dependencies status](https://img.shields.io/librariesio/github/litichevskiydv/collectio-hashmap)](https://www.npmjs.com/package/collectio-hashmap)
[![Build Status](https://github.com/litichevskiydv/collectio-hashmap/actions/workflows/ci.yaml/badge.svg?branch=master)](https://github.com/litichevskiydv/collectio-hashmap/actions/workflows/ci.yaml)
[![Coverage Status](https://coveralls.io/repos/github/litichevskiydv/collectio-hashmap/badge.svg?branch=master)](https://coveralls.io/github/litichevskiydv/collectio-hashmap?branch=master)

Implementation of Map with a configurable equality algorithm

- [HashMap](https://github.com/litichevskiydv/collectio-hashmap/wiki/Home)
  - [`new HashMap(equalityComparer)`](https://github.com/litichevskiydv/collectio-hashmap/wiki/constructor)
  - _instance_
    - [`.size`](https://github.com/litichevskiydv/collectio-hashmap/wiki/size) : <code>number</code>
    - [`.get(key)`](https://github.com/litichevskiydv/collectio-hashmap/wiki/get) : <code>any</code>
    - [`.set(key, value)`](https://github.com/litichevskiydv/collectio-hashmap/wiki/set) : [<code>HashMap</code>](Home)
    - [`.has(key)`](https://github.com/litichevskiydv/collectio-hashmap/wiki/has) : <code>boolean</code>
    - [`.delete(key)`](https://github.com/litichevskiydv/collectio-hashmap/wiki/delete) : <code>boolean</code>
    - [`.clear()`](https://github.com/litichevskiydv/collectio-hashmap/wiki/clear) : <code>undefined</code>
    - [`.forEach(callbackfn)`](https://github.com/litichevskiydv/collectio-hashmap/wiki/forEach) : <code>undefined</code>
    - [`.entries()`](https://github.com/litichevskiydv/collectio-hashmap/wiki/entries) : <code>Iterable&lt;[any, any]&gt;</code>
    - [`.keys()`](https://github.com/litichevskiydv/collectio-hashmap/wiki/keys) : <code>Iterable&lt;any&gt;</code>
    - [`.values()`](https://github.com/litichevskiydv/collectio-hashmap/wiki/values) : <code>Iterable&lt;any&gt;</code>
    - [`[Symbol.iterator]()`](https://github.com/litichevskiydv/collectio-hashmap/wiki/Symbol.iterator) : <code>Iterable&lt;[any, any]&gt;</code>
