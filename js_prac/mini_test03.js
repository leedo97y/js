// 문제
// 두 정수를 입력받아 가장 큰 값을 입력해주는 함수 작성

// case 1
function MAX(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }

}

console.log(MAX(0, 3)); // 3
console.log(MAX(-1, 5)); // 5
console.log(MAX(100, 7)); // 100


// case 2
function MAX(x, y) {
  return x > y ? x : y;
}

console.log(MAX(0, 3)); // 3
console.log(MAX(-1, 5)); // 5
console.log(MAX(100, 7)); // 100


// case 3 (my Own Sollution)
function MAX(x, y) {
  if (x > y) return x;
  if (x < y) return y;
}
console.log(MAX(0, 3)); // 3
console.log(MAX(-1, 5)); // 5
console.log(MAX(100, 7)); // 100