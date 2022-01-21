const average = function (numbers) {
  return (numbers.reduce((a, b) => a + b, 0) / numbers.length).toFixed(2);
};
console.log(average(numbers));
