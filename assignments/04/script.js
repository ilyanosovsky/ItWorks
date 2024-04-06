// Exercise 1: Basic Arithmetic Operations
// Create a chain of promises to perform and log the result of three arithmetic
//  operations in sequence. Start with a number, then add 5, multiply by 3,
//  and finally subtract 2.

const solveBasicOperations = new Promise((resolve, reject) => {
  const initialNumber = 10;
  resolve(initialNumber);
})
  .then((num) => {
    return (num += 5);
  })
  .then((num) => {
    return (num *= 3);
  })
  .then((num) => {
    return (num -= 2);
  })
  .then((num) => {
    console.log("finale result of Basic Arithmetic Operations ->", num);
  })
  .catch((error) => {
    console.error("Error occurred:", error);
  });

//   Exercise 2: String Manipulation
//   Write a promise chain that takes a string, converts it to uppercase,
//   then reverses it, and finally appends the string "-finished" at the end.
//   Log the final result.
//   Use `then` for every phase

const solveStringManipulation = new Promise((resolve, reject) => {
  const initialString = "test string";
  resolve(initialString);
})
  .then((str) => {
    return str.toUpperCase();
  })
  .then((str) => {
    return str.split("").reverse().join("");
  })
  .then((str) => {
    return str + " - finished";
  })
  .then((str) => {
    console.log("finale result of String Manipulation ->", str);
  })
  .catch((error) => {
    console.error("Error occurred:", error);
  });

//   Exercise 3: Array Filtering and Mapping
//   Write a function compareToNum that takes a number as an argument and returns a Promise
//   that tests if the value is less than or greater than the value 10 (reject otherwise)

const compareToNum = ({ num, isAboveNum }) => {
  return new Promise((resolve, reject) => {
    if (isAboveNum < num) {
      reject("Number is less than 10");
    } else if (isAboveNum > num) {
      resolve("Number is greater than 10");
    } else {
      reject("Number is equal to 10");
    }
  });
};

compareToNum({ num: 10, isAboveNum: 5 }) //will reject
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
compareToNum({ num: 10, isAboveNum: 12 }) //will resolve
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
