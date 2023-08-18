/* Description 
Introduction
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.
*/

// My solution
function century(year) {
  //   An if statement, however it seems long winded
  //   if (year <= 100) {
  //     return 1
  //   } else if (year <= 200) {
  //     return 2
  //   } else if (year <= 300) {
  //     return 3
  //   } else if (year <= 400) {
  //     return 4
  //   } else if (year <= 500) {
  //     return 5
  //   } else if (year <= 600) {
  //     return 6
  //   } else if (year <= 700) {
  //     return 7
  //   } else if (year <= 800) {
  //     return 8
  //   } else if (year <= 900) {
  //     return 9
  //   } else if (year <= 1000) {
  //     return 10
  //   } else if (year <= 1100) {
  //     return 11
  //   } else if (year <= 1200) {
  //     return 12
  //   } else if (year <= 1300) {
  //     return 13
  //   } else if (year <= 1400) {
  //     return 14
  //   } else if (year <= 1500) {
  //     return 15
  //   } else if (year <= 1600) {
  //     return 16
  //   } else if (year <= 1700) {
  //     return 17
  //   } else if (year <= 1800) {
  //     return 18
  //   } else if (year <= 1900) {
  //     return 19
  //   } else if (year <= 2000) {
  //     return 20
  //   }
  //   return;
  //   I did an if else statement that worked fine, but wouldnt carry on forever, did some research and found Math.ceil
  return Math.ceil(year / 100);
}

// Best practice
const century = (year) => Math.ceil(year / 100);
