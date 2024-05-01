/* 
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)
*/

// I nearly has this correct straight out the gate using a nested for loop. However I used an else statement within the for loop to return true, this was getting called to early before everything could be checked. Hence putting it outside the loop
function isIsogram(str) {
  //...
  if (str.length === 0) {
    return true;
  }

  const strCase = str.toLowerCase();

  for (let i = 0; i < strCase.length; i++) {
    for (let j = i + 1; j < strCase.length; j++) {
      if (strCase[i] === strCase[j]) {
        return false;
      }
    }
  }
  return true;
}

// Codewars best practice
function isIsogram(str) {
  return new Set(str.toUpperCase()).size == str.length;
}
