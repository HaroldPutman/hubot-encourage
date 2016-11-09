# hubot-encourage
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage Status][coveralls-image]][coveralls-url]

> Robot is very encouraging

## Installation
In a hubot project repository, run:

```
npm install hubot-encourage --save
```
Then add **hubot-encourage** to your `external-scripts.json`:

```json
[
  "hubot-encourage"
]
```

## License

ISC © Harold Putman

## Configuration:

You can customize the response text. Copy the file data.json from here to a
file named `hubot-encourage-data.json` in your hubot project folder. Then make
the changes you want.

## Sample interaction

```
user> hubot encourage Rex
hubot> Rex is the wind beneath my wings!
```

## Testing

To test this script interactively, run:

```
npm start
```

To run automated tests:

```
npm test
```

[npm-image]: https://badge.fury.io/js/hubot-encourage.svg
[npm-url]: https://npmjs.org/package/hubot-encourage
[travis-image]: https://travis-ci.org/HaroldPutman/hubot-encourage.svg?branch=master
[travis-url]: https://travis-ci.org/HaroldPutman/hubot-encourage
[daviddm-image]:
https://david-dm.org/haroldputman/hubot-encourage/dev-status.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/HaroldPutman/hubot-encourage
[coveralls-image]: https://coveralls.io/repos/github/HaroldPutman/hubot-encourage/badge.svg?branch=master
[coveralls-url]:https://coveralls.io/github/HaroldPutman/hubot-encourage?branch=master
