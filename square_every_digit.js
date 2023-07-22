/* Description
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

Note: The function accepts an integer and returns an integer.

Happy Coding!
*/ 

// My Solution
function squareDigits(num){
    //   Store num into string
    //   Split into an array and return back to numbers
    //   Loop through each number and square (*3)
    //   Store each result in an array
    //   Concatonate resluts together and return final answer
       
      let stringNum = String(num).split('').map(Number);
      console.log(stringNum)
        let newNumArr = []
    
      stringNum.forEach(function(num){
        console.log(num * num)
        newNumArr.push(num * num)
      })
      
      console.log(newNumArr)
    //   Turn back to string then back to a number
      let newString = newNumArr.join('')
      
      const finalAnswer = parseInt(newString)
      return finalAnswer
     
    }

    // Best Practice
    function squareDigits(num){
        return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
        
      }