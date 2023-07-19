/* DESCRIPTION
For this problem you must create a program that says who ate the last cookie. If the input is a string then "Zach" ate the cookie. If the input is a float or an int then "Monica" ate the cookie. If the input is anything else "the dog" ate the cookie. The way to return the statement is: "Who ate the last cookie? It was (name)!"

Ex: Input = "hi" --> Output = "Who ate the last cookie? It was Zach! (The reason you return Zach is because the input is a string)
*/

// MY SOLUTION
function cookie(x){
    // write an if statement or case statement for each possible outcome
  //   set a variable for string
    let whoAte = `Who ate the last cookie? It was ` 
    
    if (typeof x === "string") {
      return whoAte + "Zach!"
    } else if (typeof x === "number") {
      return whoAte + "Monica!"
    } else {
      return whoAte + "the dog!"
    }
}

//  Iknew I wanted to do this kata with temperal literals but couldn't work out where 
// BEST PRACTICE SOLUTION
function cookie(x) {
    var t = typeof x
    var who = t=="string" ? 'Zach' : t=="number" ? 'Monica' : 'the dog'
    return `Who ate the last cookie? It was ${who}!`
  }