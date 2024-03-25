// The following exercise contains the following subjects:
// ● Declaring functions 1
// Instruction
// Copy the code below to your computer, answer the
// questions on the file, and submit.

// JavaScript - Declaring Functions
// The following exercise contains the following
// subjects:
// * functions
// Instructions
// * Please reformat the following function
// declarations to function expression.
// * Please reformat the following function
// expressions to function declarations.
// Submit the file to Hive

// From function declarations to function expressions
// function welcome() {
// let welcome = 'Welcome to Appleseeds Bootcamp!';
// return welcome;
// }
const welcome = () => {
  let welcome = "Welcome to Appleseeds Bootcamp!";
  return welcome;
};

const power = (a) => {
  let myNumber = a;
  let result = Math.pow(myNumber, 2);
  return result;
};

const add = (a, b = 5) => {
  let myNumber = a;
  let sum = myNumber + b;
  return sum;
};

// From function expressions to function declarations
function hello() {
  "Hello!";
}

function squareRoot(a) {
  Math.sqrt(a);
}

function randomNumbers(a, b) {
  Math.random() * (a - b) + b;
}
