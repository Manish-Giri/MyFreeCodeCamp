// Bonfire: Golf Code
// In the game of golf each hole has a par for the average number of strokes needed to sink the ball. Depending on how far above or below par your strokes are, there is a different nickname.

// Your function will be passed a par and strokes. Return strings according to this table (based on order of priority - top (highest) to bottom (lowest)):
// Strokes	Return
// 1	"Hole-in-one!"
// <= par - 2	"Eagle"
// par - 1	"Birdie"
// par	"Par"
// par + 1	"Bogey"
// par + 2	"Double Bogey"
// >= par + 3	"Go Home!"
// par and strokes will always be numeric and positive.

//   Run tests (ctrl + enter)
//   Reset	  Help	  Bug

// /**
//   * Your output will go here.
//   * Console.log() -type statements
//   * will appear in your browser's
//   * DevTools JavaScript console.
//   */

// golfScore(4, 1) should return "Hole-in-one!"
// golfScore(4, 2) should return "Eagle"
// golfScore(5, 2) should return "Eagle"
// golfScore(4, 3) should return "Birdie"
// golfScore(4, 4) should return "Par"
// golfScore(1, 1) should return "Hole-in-one!"
// golfScore(5, 5) should return "Par"
// golfScore(4, 5) should return "Bogey"
// golfScore(4, 6) should return "Double Bogey"
// golfScore(4, 7) should return "Go Home!"
// golfScore(5, 9) should return "Go Home!"