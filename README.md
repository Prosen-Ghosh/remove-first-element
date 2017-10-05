# remove-first-element
JavaScript Package For Removing First Element Of An Array. And It Also Return The Element.

![npm](https://img.shields.io/npm/v/remove-first-element.svg) ![license](https://img.shields.io/npm/l/remove-first-element.svg) ![github-issues](https://img.shields.io/github/issues/Prosen-Ghosh/remove-first-element.svg)


![stars](https://img.shields.io/github/stars/Prosen-Ghosh/remove-first-element.svg)
![forks](https://img.shields.io/github/forks/Prosen-Ghosh/remove-first-element.svg)

## Features


## Install

`npm install --save remove-first-element`


## Script Tag

#### For Development
```js
<script rsc=""></script>
```

#### For Production
```js
<script rsc=""></script>
```

## Usage

```js

const removeFirst = require('remove-first-element');

removeFirst([]);
//=> null

removeFirst([10,20,30]);
//=> 10

removeFirst([{}]);
//=> {}

removeFirst([[],1,2,3]);
//=> []

removeFirst(["foo","bar"]);
//=> 'foo'

removeFirst([function(){},"bar"]);
//=> [Function]

removeFirst();
//=> TypeError: removeFirst() expects an array parameter

```

## Author

Prosen Ghosh <prosenghosh25@gmail.com> (https://bd.linkedin.com/in/prosen-ghosh-baba9aa8)

## License

 - **MIT**
