/* Description 
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

function XO(str) {
  let arr = str.toLowerCase().split("");

  let xs = 0;
  let os = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "x") {
      xs++;
    } else if (arr[i] === "o") {
      os++;
    }
  }

  console.log(xs, os);

  return xs === os;
}

// Codewars best practice (REGEX)
function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}
