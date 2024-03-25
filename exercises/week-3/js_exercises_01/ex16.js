// The following exercise contains the following subjects:
// ● Ternaries
// ● Logical operators
// Instructions
// Create a simple password validation function that takes a
// password string as an argument.
// If the length of the password is more than 7 characters return
// “Strong”. If it is less than 7 characters long return “Weak.
// 1. Create a function that uses an if/else conditional
// expression.
// 2. Create a function that uses a ternary conditional
// expression.
// 3. Create a function that uses a && logical operator.
// 4. Create an “advanced” password validation function that
// takes a password string as an argument.
// If the password length is more than 7 characters long and
// has at least one capital letter return “Very Strong”. If the
// password length is only 7 characters long returns “Strong”.
// If the password length is less than 7 characters long return
// “Weak”
// Use only a ternary conditional expression.

const ifPass = (password = "") => {
  if (password.length > 7) {
    console.log("Strong");
  } else {
    console.log("Weak");
  }
};

ifPass("hello777");
ifPass("Hello");

const ternPass = (password = "") => {
  return password.length > 7 ? "Strong" : "Weak";
};

console.log(ternPass("hithereer"));
console.log(ternPass("123456"));

const logicPass = (password = "") => {
  if (password.length < 8 && password.length > 0) {
    console.log("Weak");
  } else {
    console.log("Strong");
  }
};

logicPass("123456");
logicPass("1234567");
logicPass("12345678");

const advPass = (password = "") => {
  if (password.length > 7) {
    if (/[A-Z]/.test(password)) {
      console.log("Very Strong");
    } else {
      console.log("Strong");
    }
  } else {
    console.log("Weak");
  }
};

advPass("123456");
advPass("hello123456");
advPass("Hello");
advPass("Hello10101");
