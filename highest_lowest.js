// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// My Solution
function highAndLow(numbers) {
  //   split string to array
  //  use Math.min/max and spread operator
  // remove comma in string using replace
  let numArr = numbers.split(" ").map(Number);

  let min = Math.min(...numArr);
  console.log(min);
  let max = Math.max(...numArr);
  console.log(max);

  let answer = `${max} ${min}`;

  return answer;
}

// Best Practice
function highAndLow(numbers) {
  numbers = numbers.split(" ");
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}
