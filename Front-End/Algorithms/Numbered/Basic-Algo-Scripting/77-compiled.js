// Bonfire: Counting Cards
// In the casino game Blackjack, a player can gain an advantage over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called Card Counting.

// Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.
// Value	Cards
// +1	2, 3, 4, 5, 6
// 0	7, 8, 9
// -1	10, 'J', 'Q', 'K','A'
// You will write a card counting function. It will receive a card parameter and increment or decrement the global count variable according to the card's value (see table). The function will then return the current count and the string "Bet" if the count is positive, or "Hold" if the count is zero or negative.
// Example Output

// -3 Hold
// 5 Bet

//   Run tests (ctrl + enter)
//   Reset	  Help	  Bug

// /**
//   * Your output will go here.
//   * Console.log() -type statements
//   * will appear in your browser's
//   * DevTools JavaScript console.
//   */

// Cards Sequence 2, 3, 4, 5, 6 should return "5 Bet"
// Cards Sequence 7, 8, 9 should return "0 Hold"
// Cards Sequence 10, J, Q, K, A should return "-5 Hold"
// Cards Sequence 3, 2, A, 10, K should return "-1 Hold"
"use strict";

//# sourceMappingURL=77-compiled.js.map