import * as R from 'ramda';

const getRiskLevel = v => {
  if (v <= 4) return 'Low';
  if (v >= 5 && v <= 6) return 'Moderate';
  if (v >= 7 && v <= 8) return 'Significant';
  if (v >= 9) return 'Significant';
};

const getRiskLabel = R.compose(
  getRiskLevel,
  R.prop('riskRating')
);

const a = {
  name: 'c',
  riskRating: 9
};

console.log(getRiskLabel(a));

// add riskLabel property to the target object where the value of riskLabel property is
// calculated by getting the target object's riskRating property
// and pass it to a function which return a string representing the approriate Risk Level
const addRiskLabelProp = R.converge(R.assoc('riskLabel'), [
  R.compose(
    v => {
      if (v <= 4) return 'Low';
      if (v >= 5 && v <= 6) return 'Moderate';
      if (v >= 7 && v <= 8) return 'Significant';
      if (v >= 9) return 'Significant';
    },
    R.prop('riskRating')
  ),
  R.identity
]);

// apply to single object
const b = {
  name: 'b',
  riskRating: 9
};
console.log(addRiskLabelProp(b));

// run over array
const d = [
  {
    name: 'a',
    riskRating: 3
  },
  {
    name: 'a',
    riskRating: 8
  },
  {
    name: 'b',
    riskRating: 6
  },
  {
    name: 'c',
    riskRating: 9
  }
];
console.log(R.map(addRiskLabelProp)(d));

const addRiskLabelProp2 = x => {
  if (x.riskRating <= 4) return { ...x, riskLabel: 'Low' };
  if (x.riskRating >= 5 && x.riskRating <= 6)
    return { ...x, riskLabel: 'Moderate' };
  if (x.riskRating >= 7 && x.riskRating <= 8)
    return { ...x, riskLabel: 'Significant' };
  if (x.riskRating >= 9) return { ...x, riskLabel: 'High' };
};

const e = {
  name: 'e',
  riskRating: 9
};
console.log(addRiskLabelProp2(e));

const capitalize = R.converge(R.concat(), [
  R.compose(
    R.toUpper,
    R.head
  ),
  R.tail
]);

const toTitleCase = R.compose(
  R.join(' '),
  R.map(capitalize),
  R.split(' '),
  R.trim,
  R.ifElse(R.isNil, R.always(''), R.identity)
);

console.log(toTitleCase('hello there'));

console.log(toTitleCase('hello'));

console.log(toTitleCase(' hi there '));

console.log(toTitleCase(''));

console.log(toTitleCase(undefined));

console.log(toTitleCase(null));

console.log(toTitleCase(''));

console.log(toTitleCase('   '));
console.log(toTitleCase(' '));
