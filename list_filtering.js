/* Description
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
*/

// My Solution
function filter_list(l) {
  //   assign new array !!Didnt need
  //   filter through l
  //   push type of Number into new array and return !!Didnt need
  //   I had to look up about isNaN as I was struggling to commplete as it kept removing the zero's
  //   I put the number in quotations as it wouldn't pass otherwise
  let newArr = [];

  let result = l.filter((item) => typeof item === "number" && !isNaN(item));

  return result;
}

// Best Practice
function filter_list(l) {
  return l.filter(function (v) {
    return typeof v == "number";
  });
}
