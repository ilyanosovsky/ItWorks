// The following exercise contains the following subjects:
// ● Array
// Instructions
// Write a function that will receive an array of strings and will
// return a new array containing all the lengths of all the strings in
// the array it got as a parameter.
// So that if you call this function with this array for example:
// ["boo", "doooo", "hoo","ro"]
// it will return this array: [3, 5, 3, 2].

const getLength = (arr) => {
  return arr.map((string) => string.length);
};

console.log(getLength(["boo", "doooo", "hoo", "ro"]));
