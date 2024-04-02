const numbers = [1, 6, 7, 5, 45];

function sumArr(numArr) {
  return numArr.reduce((acc, num) => acc + num, 0);
}

console.log(sumArr(numbers));

const getSum2 = (array) => {
  let res = 0;
  for (let i = 0; i < array.length; i++) {
    const currNum = array[i];
    res += currNum;
  }
  return res;
};

console.log(getSum2(numbers));
