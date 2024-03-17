// JavaScript – sum of even
// The following exercise contains the following subjects:
// ● debugging
// Instructions
// # Note: We ask you not to solve the bug by finding it with
// your
// eyes but to use the debugging tools we've learned!
// What is wrong with this code?
// 1. First, find the line that contains the problem. Write it down.
// line 25

// 2. Which debug method did you use to find the bug?
// console log

// 3. Explain the bug in your own words.
// don't have arr[10] - it is undefined. we can not sum it

// 4. Fix the code and submit it all.
// we want to sum all numbers in even cells in arrays of size 10:
// [1,2,3,4,5,6,7,8,9,10] => 2+4+6+8+10 = 30

function getSumOfEven(arr) {
    console.log(arr);
    console.log(arr[10]); // undefined
  return arr[2] + arr[4] + arr[6] + arr[8] + arr[10];
}
console.log(getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


function getSumOfEven2(arr) {
    let sum = 0;
    for (let i = 1; i < arr.length; i += 2) {
      sum += arr[i];
    }
    return sum;
  }
  
  console.log(getSumOfEven2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));