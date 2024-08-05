const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
  if (numbers.length == 0) {
    return 0;
  }
	return numbers.reduce((total, cur) => total += cur)
};

const multiply = function(numbers) {
  return numbers.reduce((product, curr) => product *= curr);
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(number) {
	if (number == 0) {
    return 1;
  }
  return number * factorial(number - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
