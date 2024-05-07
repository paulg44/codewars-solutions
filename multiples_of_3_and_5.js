/* Description
   If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Additionally, if the number is negative, return 0.

Note: If the number is a multiple of both 3 and 5, only count it once.
*/

// Learnings - an interesting kata. One of the most completed. Its quite spaghetti code what I've written and I'm sure it could be, and I will, refactor it once I've had a look over it again. Nevertheless, I learnt a bit more about while loops (something I've always struggled with). And mainly the filter method. I was having difficulty for quite a while on the removing of the duplicates in the array I'd created for adding all the multiples up. By combining the indexOf feature and filter I can remove the duplicates in one simple line, basically checking the first occurrence of an element, the index against the current index and removes the duplicate. Lastly I sum all the elements together and return.

function solution(number) {
  //   variable three starting at 0, while < number + 3
  //   same for five but plus 5
  //   add each one to empty array variable
  //   add them all together and return

  let three = 0;
  let five = 0;

  let arr = [];

  while (three < number) {
    three += 3;
    arr.push(three);
  }
  while (five < number) {
    five += 5;
    arr.push(five);
  }

  let numArr = arr.filter(function (num) {
    return num < number;
  });

  let newArr = numArr.filter((num, index) => numArr.indexOf(num) === index);

  let sum = 0;

  for (let i = 0; i < newArr.length; i++) {
    sum += newArr[i];
  }

  if (sum < 0) {
    return 0;
  } else {
    return sum;
  }
}

// Codewars best practice
function solution(number) {
  var sum = 0;

  for (var i = 1; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  return sum;
}
