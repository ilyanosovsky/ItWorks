// The following exercise contains the following subjects:
// ● for loop
// Instructions
// You are given two arrays:
// const food = ["Noodle", "Pasta", "Ice-cream",
// "Meat", "Cucumber", "Olives"];
// const food1 = ["Fries", "Ice-cream", "Pizza",
// "Olives", "Hamburgers"];
// Create a function that takes these two arrays as
// arguments.
// Compare these two arrays using 2 for loops and return the
// items that are the same. If none are the same return false.

const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

const compareArr = (arr1, arr2) => {
  const same = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr2[j] === arr1[i]) {
        same.push(arr2[j]);
      }
    }
  }
  if (same.length > 0) {
    return same;
  } else {
    return false;
  }
};

console.log(compareArr(food, food1));