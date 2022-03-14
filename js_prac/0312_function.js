// >> 함수 정의

/* 1. 함수 선언식 
function func (arg1, arg2, ...argN) {
  expression;
} */
function add(x, y) {
  return x + y;
}

/* 2. 함수 표현식
const func = function (arg1, arg2, ...argN) {
  expression;
}
*/
const add = function (x, y) {
  return x + y;
}

/* 3. 화살표 함수 
const func = (arg1, arg2, ...argN) => expression;
*/
const add = (x, y) => x + y;




// >> 함수 호출 
// 1. default value
// 함수 이름을 지정할때 -> 이름만 보고도 바로 알 수 있게 지정
function print_add(x, y = 10) {
  console.log(x + y);
}
print_add(10, 20, 30); // 30 ==> x, y 이외에 또 들어가도 소용없음 걍 무시함
print_add(10, 20); // 30 ==> x, y 더한값 30
print_add(10); // 20 ==> y가 10으로 지정 -> x, y 더한값은 20
print_add(); // NaN ==> undefined 값 끼리만 더해져서 NaN

// 2. dynamic parameters
function print_min() {
  // console.log(arguments);
  // 넘어오는거 자동으로 저장
  // arguments 0번째 - arguments 1번째
  console.log(arguments[0] - arguments[1]);
}
print_min(10, 20, 30); // -10 ==> 10 - 20 = -10
print_min(10, 20); // -10 ==> 10 - 20 = -10
print_min(10); // NaN ==> 10 - undefined = NaN
print_min(); // NaN ==> undefined - undefined = NaN

// => 반환이 없는 함수 = void 함수 


// >> 함수 반환
// --> return value로 결과값 반환
// --> default return value는 undefined
function add (x, y) {
  return x + y;
  console.log("hello"); // 미수행 코드 
  // --> return은 break 역할을 해준다.
}

function dummy () {}

function checkAge (age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

console.log(add(10, 20)); // 30
console.log(dummy()); // undefined
console.log(checkAge(14)); // false
console.log(checkAge(20)); // true