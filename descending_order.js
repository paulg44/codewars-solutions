/* Description 
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
*/

// My solution, needed a little help on this one, I knew what I wanted to do but couldnt understand the function inside the sort method. Its so it orders them in descending no matter the order
function descendingOrder(n) {
  //   Make n an array
  //   Loop through array
  //   Create new array that takes numbers in descending order turn back to number
  let numberArr = n.toString().split("");

  const newArr = numberArr.map(Number).sort((a, b) => b - a);

  const result = parseInt(newArr.join(""), 10);
  console.log(result);
  return result;
}

// Best Practice
function descendingOrder(n) {
  return parseInt(String(n).split("").sort().reverse().join(""));
}
