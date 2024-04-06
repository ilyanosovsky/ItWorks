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
    console.log("finale result ->", num);
  })
  .catch((error) => {
    console.error("Error occurred:", error);
  });
