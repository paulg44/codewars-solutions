/* Kata Task
I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that */

// My solution
var humanYearsCatYearsDogYears = function (humanYears) {
  //   I feel like I've really gone round the houses so to speak!! We'll see

  let human = humanYears * 1 - 2;
  let cat = humanYears * 4 - 8;
  let dog = humanYears * 5 - 10;
  //
  let overTwoYears = [2 + human, 24 + cat, 24 + dog];

  if (humanYears === 1) {
    return [1, 15, 15];
  } else if (humanYears === 2) {
    return [2, 24, 24];
  } else {
    return overTwoYears;
  }
};

// Best Practice
var humanYearsCatYearsDogYears = function (y) {
  if (y == 1) return [1, 15, 15];
  if (y == 2) return [2, 24, 24];
  return [y, (y - 2) * 4 + 24, (y - 2) * 5 + 24];
};

const humanYearsCatYearsDogYears = (humanYears) => {
  let catYears = 0;
  let dogYears = 0;

  for (let i = 1; i <= humanYears; i++) {
    if (i === 1) {
      catYears += 15;
      dogYears += 15;
    } else if (i === 2) {
      catYears += 9;
      dogYears += 9;
    } else {
      catYears += 4;
      dogYears += 5;
    }
  }
  return [humanYears, catYears, dogYears];
};
