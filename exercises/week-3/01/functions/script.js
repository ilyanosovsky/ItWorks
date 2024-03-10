// greet() //works without a problem
// greetExpression() //throws an error

// function greet(){
//   console.log("Hello there, from the wild, wild West")
// }

// const greetExpression = function(){
//   console.log("Uh oh")
// }

// const person = {
//   name: "Julius",
//   speak: function (food) {
//     console.log(`i like ${food}`);
//   },
// };

// console.log(person.name); //you know what this will do

// person.speak("cheese toast"); //and this? Try it out!

// Exercise 1
// Write a function called isEven that accepts a number as a parameter and checks if the number is even or not.
// Return true if it is even or false if it is odd. Don’t Google this one ;) Use modulo %

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

isEven(10);

// Exercise 2
// Write a function that takes in an array of numbers.
// The function should loop through the numbers and (using the function from Exercise 1)
// print out the odd numbers.

const oddNums = (numbers) => {
  let hasOdd = false; // Initialize a variable to track if any odd number is found
  for (let num of numbers) {
    if (!isEven(num)) {
      // Check if the number is odd using the isOdd function
      console.log(num);
      hasOdd = true; // Update the flag if an odd number is found
    }
  }
  if (!hasOdd) {
    // If no odd number is found, print the message
    console.log("There are no odd numbers in array");
  }
};

const arr = [1, 2, 3, 4, 5];
oddNums(arr);

// Exercise 3
// Write a JavaScript function that accepts two parameters: one being an array of integers,
// and the other being a number. The function should return true or false depending on whether the number exists in the array.
// Hint: You should loop through the array, and for each item in the array, check if it equals the number that was passed.
// checkExists([1, 2, 3], 2) - should return true
// checkExists([1, 2, 3], 5) - should return false

const isExist = (array, number) => {
  for (let num of array) {
    if (num === number) {
      return true;
    }
  }
  return false;
};

console.log(isExist([1, 2, 3], 2));
console.log(isExist([1, 2, 3], 5));

// Exercise 4
// Create an object called calculator.
// It should have two methods: add and subtract
// Both methods take two parameters, and should return the sum/difference of both numbers.
// Use this to test your code:

const calculator = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
};

const result1 = calculator.add(20, 1);
const result2 = calculator.subtract(30, 9);

console.log(calculator.add(result1, result2)); //should print 42

// Exercise 5 (Extra Practice)
// Complete the following code:

const increaseByNameLength = (money, name) => money * name.length;

const makeRegal = (name) => "His Royal Highness, " + name;

const turnToKing = function (name, money) {
  name = name.toUpperCase();
  money = increaseByNameLength(money, name);
  name = makeRegal(name);

  console.log(name + " has " + money + " gold coins");
};

turnToKing("martin luther", 100); // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"
