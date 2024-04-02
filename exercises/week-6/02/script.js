function addNumbers(num1, num2) {
  //   const res = num1 + num2;
  //   return res;
  return num1 + num2;
}

addNumbers(3, 4); //7

function calculate(num1, num2, operationStr) {
  if (operationStr === "ADD") {
    return num1 + num2;
  } else if (operationStr === "MULTIPLY") {
    return num1 * num2;
  }
  return null;
}
