// 함수 (function)
// 함수 선언문
function func() {

}

const obj = {
  // 메서드
  prop: function() {

  }
}
// 생성자 함수 
function MyObj() {

}
// 화살표 함수
const arrowFunc = () => {};


// >> 함수 사용방법
// ==> 함수 중복의 문제 (호이스팅)
function sum(param1, param2) {
  return param1 + param2;
}
function sum() {
  return 'param1 + param2';
}

console.log(sum());
// ==> 함수 두개가 중복 : 마지막에 호출된 함수만 반응
// 문제가 생긴다 !  

// 함수 표현식 + 기명 함수
const func = function func() {
  return 'func';
}
console.log(func(1, 2)); // func
// --> 중복 호출이나 호이스팅의 문제를 const에서 잡을 수 있다.

// 함수 표현식 + 익명 함수
const func = function() {
  return 'func';
}
// 간단하게 쓸 수 있음.




// >> 화살표 함수
// case 1
const ArrowFunc = () => '문자열';

// case 2
function name () {
  return '문자열';
}
// ==> 두 함수는 같다.

const arrow_Func = () => {
  // 1. argument
  // 2. this

  return '문자열';
}


// >> 매개변수 / 인자
function Func(params) {
   params = params + 10;

   return params;
}
const result = Func(1);

console.log(result); // 11
// => 매개변수는 순서가 굉장히 중요


// >> arguments 함수
function func() {
  return arguments[0];
}
console.log(func(1)); // 1

const func = () => {
  return arguments[0];
}
console.log(func(1)); // {} ==> 안나옴
// 화살표 함수에는 arguments 객체가 없기 때문
// 가변인자를 넘겼을때 편하게 사용가능
// => 다만, 화살표 함수에서는 지양을 하는 것이 좋다.


// >> 나머지 매개변수
const func = (first, second, ...nums) => {
  // 굳이 형변환 필요없고, 화살표 함수에서 동작
  //const convertArr = Array.from(nums);
  console.log(first); // 1
  console.log(second); // 2
  console.log(Array.isArray(nums)); // true

  return nums.reduce((prev, curr) => prev + curr);
}

console.log(func(1, 2, 3, 4, 5, 6, 7)); // 25
// --> 다른 매개변수와 연관지어서 사용가능
// ... nums는 항상 마지막에 위치