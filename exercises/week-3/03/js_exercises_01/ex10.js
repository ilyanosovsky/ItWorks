// The following exercise contains the following subjects:
// ● conditional statements
// Instructions
// Create a function that takes 1 argument, a number score.
// Returns either “A”, ”B”, “C”, “D”, “F”.
// score of:
// 0-64 is a “F”
// 65-69 is a “D”
// 70-79 is a “C”
// 80-89 is a “B”
// 90-100 is an “A

const numScore = (score) => {
    return score <= 64
      ? 'F' : score <= 69
        ? 'D' : score <=79
          ? 'C' : score <= 89
            ? 'B' : score <= 100
              ? 'A' : 'cannot define result'
  }

console.log(numScore(51));