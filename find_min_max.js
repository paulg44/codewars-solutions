// Implement a function that returns the minimal and the maximal value of a list (in this order).

// My Solution
function getMinMax(arr) {
  //   use Math.min for minimum and Math.max for maximum (use spread operator)
  //   Create empty array variable
  //   push min, max into array
  //   return array
  let min = Math.min(...arr);
  console.log(min);
  let max = Math.max(...arr);
  console.log(max);

  let emptyArr = [];
  emptyArr.push(min, max);
  console.log(emptyArr);

  return emptyArr;
}

// Best Practice
function getMinMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}
