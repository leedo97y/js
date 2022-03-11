function big_o(n) {
  let sum = 0; // 1회 - 넣어줌
  
  sum = n * 2; // 1회 - 곱하기

  return sum; // 1회 - 반환
} // => 총 3회
// 상수 받을 때, 아무리 커져도 이것을 O(1)으로 표기


function big_o(arr,n) {
  let sum = 0;  // 1회

  for (let i = 0; i < n; i++) {
    sum += arr[i]
  } 
  // n회
  // for 문 하나당 n이라고 봄 
  // 따라서 for문이 두개면 n제곱이 된다.

  return sum;  // 1회
}
// n + 2 -> O(N)


function big_o(arr, n) {
  let sum = 0;  // 1회 

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      sum += arr[i][j];
    }
  }
  // n제곱 회

  return sum;  //1회
}
// n제곱 + 2 -> O(N제곱) 
// 가장 높은 차수만 남기고 다 제거 따라서 N제곱
// 예) n제곱+ n + 1 -> 이 경우에도 O(N제곱)
// n이 커지면 커질 수록 시간이 많이 걸리는 코드


function big_o(n) {
  let sum = 0;  // 1회

  for (let i = 0; i < n; i *= 2) {
    sum += 2;
  }
  // n/2회

  return sum;  // 1회
}
// n/2 + 2 -> O(logN)