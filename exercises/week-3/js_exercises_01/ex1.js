// JavaScript – primitive data types
// The following exercise contains the following subjects:
// ● primitive data types
// Instructions
// Copy the code below to your computer, answer the
// questions on the file and submit.

/*--Delete the wrong answers--
1. Which of the following is/are strings?
    c) '4'
2. Which of the following is/are numbers?
    a) 4
    b) 4.0
    d) -4
3. Which of the following is/are booleans?
    a) true
    b) false
4. What is the result of 80 + 71.2?
    a) 151.2
5. What is the result of "80" + 71.2?
    c) "8071.2"
6. Does 100 + 30 produce a number or a string?
    a) number
7. Does "100" + 30 produce a number or a string?
    b)string
*/

//------Submit your answers under the question------//
//create three different ways to declare variables
let first = 1;
var second = 2;
const third = 3;

//declare a variable and reassign a value to it
let smth;
smth = 11;

//create a variable and after that assign a string
//with its value being: He's got it!
let str = "";
str = "He's got it!";

// 1. create a variable and assign a value on how
// much a restaurant bill is.
const bill = 100;

// 2. create a variable and assign a value on how
// much tax they should pay.
const tax = 15;

// 3. create a variable that will calculate the bill
// * tax and its output would be: Your total bill is
// <total bill> $.
const totalBill = `Your total bill is ${bill + (tax * bill) / 100}`;
console.log(totalBill);

// 4. Round the number 50.6 to its nearest integer
const roundedNumber = Math.round(50.6);
console.log(roundedNumber);

// 5. Create a variable that is undefined
let notDefined;
