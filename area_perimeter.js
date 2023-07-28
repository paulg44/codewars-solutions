/* Description
 You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
If it is a square, return its area. If it is a rectangle, return its perimeter.
*/


// My Solution
const areaOrPerimeter = function(l , w) {
    //   If l and w are equal return square, else rectangle
      if (l === w) {
        return l * w
      } else {
        return (l * 2) + (w * 2)
      }
    };

// Best Practice
// const areaOrPerimeter = function(l , w) {
//     return l == w ? l*w : 2*(l + w)
//   };