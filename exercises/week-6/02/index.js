const randomNumbers = [2, 5, 8, 4, 4];

const greaterNum = (array, num) => {
  const res = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > num) {
      res.push(array[i]);
    }
  }
  return res;
};

console.log(greaterNum(randomNumbers, 4));

const greaterNum2 = (array, num) => {
  return array.filter((value) => value > num);
};

console.log(greaterNum2(randomNumbers, 4));