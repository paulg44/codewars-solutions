/* Description Reversing an array can be a tough task, especially for a novice programmer. Mary just started coding, so she would like to start with something basic at first. Instead of reversing the array entirely, she wants to swap just its first and last elements.

Given an array arr, swap its first and last elements and return the resulting array. */

// My Solution
function firstReverseTry(arr) {
  //   isolate the first charactor in array and the last
  //   assign new array
  //   remove first and last element from array
  //   push remaining array to new array
  //   push first and last elements to opposite end of new array and return
  if (arr.length < 2) {
    return arr;
  }

  let newArr = [];

  let firstEl = arr.shift();
  let lastEl = arr.pop();
  let remainArr = arr;
  console.log(firstEl, lastEl, remainArr);

  newArr.push(lastEl, ...remainArr, firstEl);
  console.log(newArr);

  return newArr;
}

// Best Practice
// No consensus
