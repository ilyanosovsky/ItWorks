// The following exercise contains the following subjects:
// ● Order Of Operation
// ● If statements
// Instructions
// John and Mike both play basketball on different teams. In the
// latest 3 games, John's team scored 89, 120, and 103 points,
// while Mike's team scored 116, 94, and 123 points.
// 1. Calculate the average score for each team.
// 2. Decide which team wins on average (highest average
// score), and print the winner to the console. Also include
// the average score in the output.
// 3. Then change the scores to show different winners. Don't
// forget to take into account that there might be a draw (the
// same average score).
// 4. EXTRA: Mary also plays basketball, and her team scored
// 97, 134, and 105 points. Like before, log the average
// winner to the console.
// 5. Like before, change the scores to generate different
// winners, keeping in mind there might be draws.

const JohnsTeam = [89, 120, 103];
const MikesTeam = [116, 94, 123];
const MaryTeam = [97, 134, 105];

const avgScore = (team) => {
  let sum = 0;
  let count = 0;

  for (let i = 0; i < team.length; i++) {
    sum += team[i];
    count++;
  }

  const res = sum / count;
  return res;
};

const avgJohns = avgScore(JohnsTeam);
const avgMikes = avgScore(MikesTeam);
const avgMary = avgScore(MaryTeam);

if (avgJohns > avgMary && avgJohns > avgMikes) {
  console.log(`Johns Team is the best with average score ${avgJohns}`);
} else if (avgMikes > avgJohns && avgMikes > avgMary) {
  console.log(`Mikes Team is the best with average score ${avgMikes}`);
} else if (avgMary > avgJohns && avgMary > avgMikes) {
  console.log(`Mary Team is the best with average score ${avgMary}`);
} else {
  console.log("It is a draw!");
}
