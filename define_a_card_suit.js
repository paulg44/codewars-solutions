// Description
// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// My Solution
function defineSuit(card) {
  // if else statments using the corresponding emoji
  if (card.includes("♥")) {
    return "hearts";
  } else if (card.includes("♠")) {
    return "spades";
  } else if (card.includes("♣")) {
    return "clubs";
  } else {
    return "diamonds";
  }
}

//  Other way
function defineSuit(card) {
  const s = {
    "♣": "clubs",
    "♠": "spades",
    "♦": "diamonds",
    "♥": "hearts",
  };
  return s[card.charAt(card.length - 1)];
}
