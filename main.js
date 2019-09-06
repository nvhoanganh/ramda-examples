const data = 'hello, theLre,how, a';
var R = require('rambda');

const splitTrimUpper = R.pipe(
  R.split(','),
  R.map(
    R.pipe(
      R.trim,
      R.toUpper
    )
  )
);

console.log(splitTrimUpper(data).indexOf('A'));
console.log(R.indexOf('A', splitTrimUpper(data)));
