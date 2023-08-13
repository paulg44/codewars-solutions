/* Description
Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
*/

// My solution
const quarterOf = (month) => {
  //   set variable for each quarter
  //   check month against variables
  //   Once passed with the variables I relised they arent needed and changed the if else statement
  //   const first = 1
  //   const second = 2
  //   const third = 3
  //   const fourth = 4

  if (month <= 3) {
    return 1;
  } else if (month <= 6 && month > 3) {
    return 2;
  } else if (month <= 9 && month > 6) {
    return 3;
  } else {
    return 4;
  }
};

// Best practice
// Didnt really need the && operator
function quarterOf(month) {
  if (month <= 3) {
    return 1;
  } else if (month <= 6) {
    return 2;
  } else if (month <= 9) {
    return 3;
  } else if (month <= 12) {
    return 4;
  }
}

const quarterOf = (m) => Math.ceil(m / 3);
