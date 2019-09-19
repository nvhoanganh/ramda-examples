import * as R from 'ramda';
/**
 *
 * return multiple if statement
 */
const getRiskLevel2 = v => {
  if (v <= 4) return 'Low';
  if (v >= 5 && v <= 6)
    return 'Moderate';
  if (v >= 7 && v <= 8)
    return 'Significant';
  if (v >= 9) return 'Significant';
};

// is 13 > 3
export const getRiskLevel = R.cond([
  [R.lte(R.__, 4), R.always('Low')],
  [
    R.both(
      R.gte(R.__, 5),
      R.lte(R.__, 6)
    ),
    R.always('Moderate')
  ],
  [
    R.both(
      R.gte(R.__, 7),
      R.lte(R.__, 8)
    ),
    R.always('Significant')
  ],
  [R.gte(R.__, 9), R.always('High')]
]);

console.log(getRiskLevel(3));
console.log(getRiskLevel(6));
console.log(getRiskLevel(7));
console.log(getRiskLevel(9));

console.log(getRiskLevel2(3));
console.log(getRiskLevel2(6));
console.log(getRiskLevel2(7));
console.log(getRiskLevel2(9));
