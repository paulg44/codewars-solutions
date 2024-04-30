/* Description 
   You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
*/

function getMiddle(s) {
  let length = s.length;
  let middleLetter = Math.floor(length / 2);

  if (length % 2 === 0) {
    return s.slice(middleLetter - 1, middleLetter + 1);
  } else {
    return s.charAt(middleLetter);
  }
}

// Codewars most reviewed
function getMiddle(s) {
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}
