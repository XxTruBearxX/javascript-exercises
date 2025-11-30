const sumAll = function(num, num2) {
  // validate inputs
  if (
    typeof num !== 'number' ||
    typeof num2 !== 'number' ||
    !Number.isInteger(num) ||
    !Number.isInteger(num2) ||
    num < 0 ||
    num2 < 0
  ) {
    return 'ERROR';
  }
  const start = Math.min(num, num2);
  const end = Math.max(num, num2);
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }  
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
