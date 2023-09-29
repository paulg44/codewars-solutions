/* Description
Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

i.e.

friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
Note: keep the original order of the names in the output. */

// My solution
function friend(friends) {
  // for loop to iterate over array or use forEach
  //   and push to an empty array
  let notFoes = [];

  friends.forEach((friend) => {
    //      The .test and d checks any digit(0-9) the ! dictates not
    if (friend.length === 4 && !/\d/.test(friend)) {
      notFoes.push(friend);
    }
  });

  return notFoes;
}

// Best Practice
function friend(friends) {
  return friends.filter((n) => n.length === 4);
}
