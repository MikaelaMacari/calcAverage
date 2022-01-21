//this is a function that calculate average of a numbers from an array
const average = function (numbers) {
  return (numbers.reduce((a, b) => a + b, 0) / numbers.length).toFixed(2);
};
console.log(average(numbers));
