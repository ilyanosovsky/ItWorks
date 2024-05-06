// JavaScript – average
// The following exercise contains the following subjects:
// ● debugging
// Instructions
// # Note: We ask you not to solve the bug by finding it with
// your eyes but to use the debugging tools we've learned!
// What is wrong with this code?
// 1. First find the line that contains the problem. Write it down.
// line 20

// 2. Which debug method did you use to find the bug?
// console logging

// 3. Explain the bug in your own words.
// we declare sum as undefined so we can not count our sum

// 4. Fix the code and submit it all.

function calcAverage(arr) {
  //   var sum; --- wrong one
  let sum = 0;
  console.log(sum);
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(arr);
  return sum;
}
console.log(calcAverage([85, 90, 92]));
