// JavaScript – scope & hoisting
// The following exercise contains the following subjects:
// ● scope
// ● hoisting
// Instructions
// Without running the code below, explain in your own words
// what the result of each block of code will be and why.
// If there are any faulty outputs, please write on how we can fix
// them.
// Block 1
// we console log a before in declared in function that is why it is undefined
// so we will see only "2"

function funcA() {
  console.log(a);
  console.log(foo());
  var a = 1;
  function foo() {
    return 2;
  }
}
funcA();

// Block 2

var fullName = "John Doe";
var obj = {
  fullName: "Colin Ihrig",
  prop: {
    fullName: "Aurelio De Rosa",
    getFullName: function () {
      return this.fullName;
    },
  },
};
console.log(obj.prop.getFullName());
// we call getFullName method from prop of obj, and inside this.fullName resolves to "Aurelio De Rosa"
var test = obj.prop.getFullName;
// test is now just a reference to the getFullName function
console.log(test());

// Block 3

function funcB() {
  let a = (b = 0);
  a++;
  return a;
}
funcB();
console.log(typeof a);
// a is declared within the scope of the funcB function, so it is not accessible outside of the function
console.log(typeof b);
// b is declared without let, var, or const, it becomes a global variable

// Block 4

function funcC() {
  console.log("1");
}
funcC();
function funcC() {
  console.log("2");
}
funcC();
// When there are multiple function declarations with the same name, the last one defined will overwrite any previous declarations with the same name
// output:
// 2
// 2

// Block 5

function funcD1() {
d = 1;
}
funcD1();
console.log(d);
// output 1
function funcD2() {
var e = 1;
}
funcD2();
// console.log(e);
// reference error e is not defined

// Block 6
function funcE() {
console.log("Value of f in local scope: ", f);
}
// global scope - do not have access to f in the function
// undefined
console.log("Value of f in global scope: ", f);
// 1
var f = 1;
funcE();
