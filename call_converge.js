import * as R from 'ramda';

const d = [
  {
    name: 'a',
    riskRating: 3
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

const a = {
  name: 'c',
  riskRating: 9
};

const getRiskLevel2 = v => {
  if (v <= 4) return 'Low';
  if (v >= 5 && v <= 6)
    return 'Moderate';
  if (v >= 7 && v <= 8)
    return 'Significant';
  if (v >= 9) return 'Significant';
};

const getRiskLabel = R.compose(
  getRiskLevel2,
  R.prop('riskRating')
);

console.log(getRiskLabel(a));

const addRiskLabel = R.converge(
  R.assoc('riskLabel'),
  [getRiskLabel, R.identity]
);

console.log(addRiskLabel(a));
console.log(R.map(addRiskLabel)(d));
