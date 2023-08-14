/* Description 
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.*/

// My solution
function findShort(s) {
  //   split string into an array of words
  //   check the length of each word (create new array with numbers)
  //   use Math.min and spread operator
  //   return the one with least characters
  let newArr = s.split(" ");
  console.log(newArr);

  let getLength = newArr.map((item) => item.length);
  console.log(getLength);

  let result = Math.min(...getLength);
  return result;
}

// Best Practice
function findShort(s) {
  return Math.min.apply(
    null,
    s.split(" ").map((w) => w.length)
  );
}
