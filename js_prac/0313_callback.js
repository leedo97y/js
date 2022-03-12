function add(x, y) {
  return x + y;
}
function sub(x, y) {
  return x - y;
}
function mul(x, y) {
  return x * y;
}
function div(x, y) {
  return x / y;
}
function calculator(callback, x, y) {
  return callback(x, y);
}

console.log(calculator(add, 7, 3)); // 10
console.log(calculator(sub, 7, 3)); // 4
console.log(calculator(mul, 7, 3)); // 21
console.log(calculator(div, 7, 3)); // 2.3333333333333335