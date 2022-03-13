// 삼항 연산자
// 3개의 피 연산자, 조건 연산자
const val = (조건) ? 참일때 : 거짓일때;
//표현식
const age = 20;
const isAdult = age >= 20 ? '성인' : '미성년자';
// 함수가 들어갈 순 없다.
// if, for, while 등 
// 값, 식, 문 중 값과 식만 들어올 수 있다.
isAdult;

// 비교 연산자
const Age = 20;

if (Age < 10) {
  // Age가 10 미만
}
if (Age > 10) {
  // Age가 10 초과
}
if (Age <= 10) {
  // Age가 10 이하
}
if (Age >= 10) {
  // Age가 10 이상
}


// typeof 연산자
typeof 'string';
typeof 123;
typeof 1n;
typeof true;
typeof Symbol();
typeof undefined;
typeof func;
typeof [];
// 래퍼 타입 -> object
typeof {};
// 래퍼 타입 -> object
typeof null; 
// 이전 버전 때문에 그냥 계속 object로 정함
// js 초기 설계 오류 -> 추가수정 안함


// instanceof 연산자
// 객체의 인스턴스가 어떤 생성자로 생성된 것인지
const obj = {};
const arr = [];
const func = function() {};
console.log(obj instanceof Object); // true
console.log(arr instanceof Object); // true
console.log(func instanceof Object); // true
undefined instanceof Object; // false
null instanceof Object; // false ** -> 원시값 맞다는걸 보여줌
// 수많은 객체들이 최상위 타입으로 Object를 가지고 있기 때문
