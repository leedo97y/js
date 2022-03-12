// 1. basic recursive function
function recursive(num) {
  if (num == 0) return 0;
  return num + recursive(num - 1);
}
// 3 + (2 + (1 + 0)) = 0
console.log(recursive(3)); // 6

// 2. factorial function
function factorial(x) {
  if (x === 0) return 1;

  return x * factorial(x - 1);
}

const num = 3;

let result = factorial(num); 

// The factorial of 3 is 6
console.log(`The factorial of ${num} is ${result}`);