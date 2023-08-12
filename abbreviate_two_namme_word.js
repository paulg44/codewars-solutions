/* Descritpion  
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.
*/

// My solution
function abbrevName(name) {
  // Assign first letter of each word to a variable
  //   Make sure letters are capital
  //   return a template literal string
  let newArr = name.split("");
  console.log(newArr);
  let firstLetter = newArr[0];
  console.log(firstLetter);
  let surnameLetter = name.split(" ")[1][0];
  console.log(surnameLetter);

  return `${firstLetter.toUpperCase()}.${surnameLetter.toUpperCase()}`;
}

// Best Practice
function abbrevName(name) {
  var nameArray = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}
