const integers = [1, 2, 3];
const doubleArrayValues = function (integers) {
  const result = integers.map((item) => {
    return item * 2;
  });
  console.log(result);
};

doubleArrayValues([1, 2, 3]);

// result should be [2, 4, 6]