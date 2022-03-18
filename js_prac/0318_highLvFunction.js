/*
  > 고차함수 **
  = 하나 이상의 함수를 매개변수로 취하거나 함수를 결과로 변환하는 함수
  = 매개변수로 전달되는 함수는 콜백함수
  
  => 대표 배열 조작 메서드 
  1) 임의 정렬 : Array.sort(callback Function)
  2) 반복 작업 : Array.forEach() --> for문 처럼 사용
  3) 콜백함수 결과 배열 변환 : Array.map()
  4) 조건 만족하는 하나의 값 변환 : Array.find()
  5) 조건 만족하는 값 배열로 변환 : Array.filter()
  6) 누적 결과 값 변환 : Array.reduce() --> 지속적인 연산
*/

// > sort() 문제와 한계점
// 문제점 : 일의 자리 4가 10의 자리보다 뒤쪽에 정렬
// 원인 : sort 메서드로 정렬될 때 배열의 요소가 일시적으로 문자열로 변경되어 발생
let num = [1, -1, 4, 2, 3, 10, 20];
console.log(num.sort()); // [ -1, 1, 10, 2, 20, 3, 4]
// 한계점 : 대소문자 구분 없이 정렬하고 싶지만, 대소문자가 구분 되어 정렬
// ==> 대문자가 앞에 먼저 정렬되고, 그 다음에 소문자끼리 다시 정렬된다.

// > sort() -> 고차함수 (1)
// : 숫자 정렬시 제대로 정렬이 안되는 문제해결 방법

// before
let nums = [1, -1, 4, 0, 10, 20, 12];
console.log(nums.sort());
console.log(nums.reverse());

// after
let ascending_order = function (x, y) {
  return x - y;
  // x - y > 0 : 연산 반환시 0보다 큰 값이면 서로의 자리를 바꾸게 됨
  // x = 12, y = 20 ==> x - y = -8 이므로 서로의 자리를 바꾸지 않아도 됨
};
let descending_order = function (x, y) {
  return y - x;
  // y - x > 0
};
console.log(nums.sort(ascending_order));
console.log(nums.reverse(descending_order));

// > sort() -> 고차함수 (2)
// : 문자 정렬시 대소문자 구분이 안되는 경우 문제해결 방법

// before
let fruits = ["apple", "Orange", "orange", "melon"];
console.log(fruits.sort());
console.log(fruits.reverse());

// after
let ascending_text = function (x, y) {
  x = x.toUpperCase();
  y = y.toUpperCase();

  if (x > y) return 1;
  else if (y > x) return -1;
  else return 0;
};

let descending_text = function (x, y) {
  x = x.toUpperCase();
  y = y.toUpperCase();

  if (x < y) return 1;
  else if (y < x) return -1;
  else return 0;
};
console.log(fruits.sort(ascending_text));
console.log(fruits.sort(descending_text));

// sort() - 고차함수 (3)
// : 콜백함수 ascending_order1, descending_order1 공용화
// ==> 숫자나 문자나 전부 적용 가능한 것
let ascending_order1 = function (x, y) {
  if (typeof x === "string") x = x.toUpperCase();
  if (typeof y === "string") y = y.toUpperCase();
  // 만약에 타입이 string이라면 대문자로 변경해준다. (조건문을 추가 -> 공용화헤서 쓰려고)

  return x > y ? 1 : -1; // 작은게 앞에오게
};

let descending_order1 = function (x, y) {
  if (typeof x === "string") x = x.toUpperCase();
  if (typeof y === "string") y = y.toUpperCase();

  return x < y ? 1 : -1; // 큰게 앞에오게
};

let nums1 = [1, -1, 4, 0, 10, 20, 12];
console.log(nums1.sort(ascending_order1));
console.log(nums1.sort(descending_order1));

let fruitt = ["apple", "Orange", "orange", "melon"];
console.log(fruitt.sort(ascending_order1));
console.log(fruitt.sort(descending_order1));
