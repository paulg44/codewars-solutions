/*Task
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation. */

// My Solution
function sumArray(array) {
  if (!array || array.length <= 2) {
    return 0;
  }
  let newArr = array.sort((a, b) => a - b);
  newArr.pop();
  newArr.shift();
  console.log(newArr);
  let sum = 0;
  for (let i = 0; i < newArr.length; i++) {
    sum += newArr[i];
  }
  return sum;
}
