var R = require('ramda');

const splitTrimUpper = R.pipe(
  R.split(','),
  R.map(
    R.pipe(
      R.trim,
      R.toUpper
    )
  )
);
console.log(splitTrimUpper('a,b , c'))

const MAX_COUNT = 3;
const spacer = R.join(' ');

console.log(spacer(['a', 'b']))

const getPersonName = R.ifElse(
  R.has('lastName'),
  R.compose(
    R.join(' '),
    R.props(['firstName', 'lastName'])
  ),
  R.prop('firstName')
);


console.log(
  getPersonName({
    firstName: 'anthony',
    lastName: 'nguyen'
  })
);


const isLongerThanLimit = data =>
data.length > 1 && data.length <= MAX_COUNT + 1;

console.log(isLongerThanLimit([1,3,4]))

console.log(isLongerThanLimit([1,3,4,5,6]))


const getNamesForShortList = R.pipe(() => console.log('short'));

const getNamesForLongList = R.pipe(() => console.log('long'));

const getNames = R.pipe(
  R.ifElse(isLongerThanLimit, getNamesForShortList, getNamesForLongList)
);

console.log(getNames([
  {
    firstName: 'Anthony'
  },
  {
    firstName: 'Brent'
  },
  {
    firstName: 'David'
  },
  {
    firstName: 'William'
  },
  {
    firstName: 'Bupa'
  }
]))
