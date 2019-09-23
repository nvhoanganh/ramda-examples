import * as R from 'ramda';

const f = R.ifElse(R.isEmpty, R.always(null), R.identity);

console.log(f([]));
console.log(f([1, 3]));

const vl = {
  id: 1,
  value: 'hell'
};
console.log(R.prop('value')(vl));

const setVal = R.converge(R.assoc('val'), [R.prop('value'), R.identity]);

console.log(setVal(vl));

const setValFirst = R.compose(
  setVal,
  R.head
);

console.log(setValFirst([vl]));

const final = R.ifElse(
  R.isEmpty,
  R.always(null),
  R.compose(
    R.converge(R.assoc('value'), [R.prop('value'), R.identity]),
    R.head
  )
);

console.log(final([vl]));

const vl2 = {
  id: 1,
  value: ['hello', 'world']
};

console.log(
  R.compose(
    R.head,
    R.prop('value')
  )(vl2)
);

const func = x => x;

const addProp = R.converge(
  R.assoc('value'), // add property 'val'
  [
    R.compose(
      // by taking the first Element of the property 'value'
      R.head,
      R.prop('value')
    ),
    R.identity
  ]
);

console.log(R.prop('id')(vl2));
console.log(addProp(vl2));

import {
  ifElse,
  isEmpty,
  always,
  pipe,
  head,
  identity,
  converge,
  assoc,
  compose,
  prop
} from 'ramda';
const vl3 = [
  {
    id: 1,
    value: ['hello', 'world']
  }
];
const final3 = ifElse(
  isEmpty, // if array is empty
  always(null), // return null
  pipe(
    // otherwise
    head, // take the first item from the array
    x => ({
      // create new key value pair
      key: x.id,
      value: head(x.value)
    }),
    func // then pass the resulting object to function called 'func'
  )
);
console.log(final3(vl3));
const final2 = ifElse(
  isEmpty, // if array is empty
  always(null), // return null
  pipe(
    // otherwise
    head, // take the first item from the array
    converge(assoc('key'), [prop('id'), identity]),
    converge(assoc('value'), [
      // add property 'val'
      compose(
        // by taking the first Element of the property 'value'
        head,
        prop('value')
      ),
      identity
    ]),
    R.dissoc('id'),
    func // then pass the resulting object to function called 'func'
  )
);
console.log(final2(vl3));
console.log(final2([]));
