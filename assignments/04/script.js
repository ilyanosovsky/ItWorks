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

//   Exercise 4: Delayed Greetings
//   Simulate a delayed greeting with promises.
//   First, wait 2 seconds, then log "Hello", wait another second, and log "World!".
//   Each step should be done in a separate .then().

const getGreetings = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello");
  }, 2000); // Wait 2 seconds
})
  .then((message) => {
    console.log(message);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("World!");
      }, 1000); // Wait 1 second after logging "Hello"
    });
  })
  .then((message) => {
    console.log(message);
  });

//   Exercise 5: Error Handling
//   Create a promise chain that attempts to parse JSON data.
//   Use a try/catch block within a .then() method to handle JSON parsing errors.
//   If successful, log the parsed object; if an error occurs, log "Invalid JSON".

const jsonData = '{"name": "John", "age": 30}'; // Example JSON data

const handleError = new Promise((resolve, reject) => {
  resolve(jsonData);
}).then((data) => {
  try {
    const parsedData = JSON.parse(data);
    console.log("Parsed JSON:", parsedData);
  } catch (error) {
    console.log("Invalid JSON");
  }
});

// Make an async await version
// Exercise 6: Promise all
// Create "resolveImmediate" that resolves immediately to a number
// Create "resolveDelayed" that resolves to a number after 2 seconds

// Function to resolve immediately to a number
function resolveImmediate() {
  return Promise.resolve(25);
}

// Function to resolve to a number after 2 seconds
function resolveDelayed() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(17);
    }, 2000);
  });
}

async function combine(prmX, prmY) {
  return Promise.all([prmX, prmY]).then((values) => {
    return values[0] + values[1];
  });
}
// `fetchX()` should return a promise that is resolved to 25 immediately
// and `fetchY()` should return a promise that is resolved after 2 seconds to 17
combine(resolveImmediate(), resolveDelayed()).then((sum) => {
  console.log(sum);
});
