/* Description 
Your job is to write a function, which takes three integers a, b, and c as arguments, and returns True if exactly two of of the three integers are positive numbers (greater than zero), and False - otherwise.
*/

// My Solution
function twoArePositive(a, b, c) {
    // check if number of a, b, c is positive or negative
  //   Have variables to count the positive/negative numbers
  //   Store in an array
  //   If two are positive return true, else false
    let newArr = []
    newArr.push(a, b, c)
    
  
    let positiveNums = 0;
    let negativeNums = 0;
    
    for (let i = 0; i < newArr.length; i++) {
      if(newArr[i] > 0){
        positiveNums++
      } else if (newArr[i] < 0) {
        negativeNums++
      }
    }
    return positiveNums == 2
    
  }

//   Best Practice (and much bloody easier)
function twoArePositive(a, b, c) {
    return (a > 0) + (b > 0) + (c > 0) == 2;
  }