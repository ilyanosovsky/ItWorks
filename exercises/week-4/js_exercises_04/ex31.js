// JavaScript – functions
// The following exercise contains the following subjects:
// ● Debugging
// Instructions
// # Note: We ask you not to solve the bug by finding it with
// your eyes but to use the debugging tools we've learned!
// What is wrong with this code?
// 1. First, find the line that contains the problem. Write it down.
// line 30 and line 23

// 2. Which debug method did you use to find the bug?
// console log in browser

// 3. Explain the bug in your own words.
// The correct syntax for passing two arrays as arguments is to separate them with a comma, enclosed in parentheses.
// using let instead of const because we need to change sum

// 4. Fix the code and submit it all.

function getSum(arr1, arr2) {
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    sum += arr2[i];
  }
  return sum; // added return statement to return the sum
}
// getSum([1, 2, 3][(5, 66, 23)]); --- wrong one
console.log(getSum([1, 2, 3], [5, 66, 23])); // Output: 100
