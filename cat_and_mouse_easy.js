/* Description 
You will be given a string (x) featuring a cat 'C' and a mouse 'm'. The rest of the string will be made up of '.'.

You need to find out if the cat can catch the mouse from it's current position. The cat can jump over three characters. So:

C.....m returns 'Escaped!' <-- more than three characters between

C...m returns 'Caught!' <-- as there are three characters between the two, the cat can jump.
*/

// My solution
function catMouse(x) {
  //   turn string to array, then loop through or map?
  //   Looped through and used charAt instead
  // if statement? if more than 3 ... in array return escaped else caught
  let count = 0;
  //   let newArr = x.split('')
  //   console.log(newArr)
  for (let i = 0; i < x.length; i++) {
    if (x.charAt(i) == ".") {
      count += 1;
    }
  }
  console.log(count);
  if (count > 3) {
    return "Escaped!";
  } else {
    return "Caught!";
  }
}

// Another way not always best practice
function catMouse(x) {
  return x.length <= 5 ? "Caught!" : "Escaped!";
}
