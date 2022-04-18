/*
>> 배열 
- 가장 간단한 자료 구조 중 하나
- 동일한 배열명을 가지고 같은 속성의 값들을 저장하기 위해서 사용된다.
- 그룹핑해주는 느낌으로 사용

> 배열 선언
1) new Array 를 통해 선언
2) []를 통해 선언하는 방법

> 접근 방법 
Array[index]를 통해 O(1) 접근 (알고리즘에서 많이 쓰임)

> 배열 속성
Array.length를 통해 배열의 요소 개수 확인 가능

> 배열의 실체 
자바스크립트의 배열은 다른 언어에서 말하는 일반적인 배열이 아니라 hash기반의 객체
밀집 배열이 아닌 희소 배열이다. 
밀집배열은 메모리가 연속적이다. 

> 배열 요소 삭제
삭제시 delete를 이용하게 되면 배열 사이즈는 그대로가 된다. 
따라서, 다른 방법으로 삭제해 주는 것이 좋다.
-> Array.splice(index, deleteCount, addElement1, addElement2....)을 통해 삭제 후 
그 자리에 새로운 요소를 추가 시켜 줄 수 있다. 
-> Array.slice([start], [end]) : end만 넣게 되면 start 이후로 전부 반환하는 것이고, 
start와 end를 전부 채웠다면, start부터 end까지의 값만 반환해 주는 것이다.
=이는 원본 값(기본 객체)을 해치지 않음 
------> 그런 의미에서 splice와 slice는 다르다.

> 배열 반복문
for문을 통해 배열 요소에 접근 
1) 배열 순회 
2) for...of는 element를 반환한다. 
: 배열 안의 요소들이 let 뒤에 쓰인 변수를 통해 반환된다.
3) for...in은 key를 반환한다.
: 배열에 대한 key를 반환해준다.

> 배열 탐색
요소가 있는지 없는지 탐색. -> 있으면 1 반환, 없으면 -1을 반환
뒤쪽에 있는 요소를 반환시, lastIndexOf를 써준다. 
음수값을 넣어준다면, 뒤쪽부터 지정된 숫자 만큼 가서 찾는 값이 있는지 찾게됨

> 배열 변형
배열 정렬 / 반전 / 변환
.sort() : 오름차순으로 정렬
.reverse() : 내림차순으로 정렬
=> 문자열도 정렬해준다.  / 앞자리 부터 비교
.join(separator) : 배열 값을 문자열로 변환 / separator를 이용하면, 그것으로 구분 가능

--> sort()
함수의 매개변수로 함수를 넣어 고차함수를 이용한 정렬 수행가능
--> forEach()
배열 요소 별 콜백함수 각각에 실행 
() 안에 함수가 들어간다. / == for문이 forEach로 깔끔하게 변함
--> map()
배열 요소 별 함수 호출 닟 결과를 배열로 변환 
() 안에 함수가 들어간다. / == for문이 map으로 변함.
--> find()
콜백함수의 조건을 만족하는 단 하나의 값만 반환.
() 안에 함수가 들어감.
--> filter()
콜백함수의 조건을 만족하는 모든 값을 반환.
() 안에 함수가 들어감 / ====> find랑은 만족하는 값을 '모두' 반환한다는 점에서 다름
--> reduce()
누적 결과 값을 반환할때 쓰임
() 안에 함수가 들어감 / accumulator : 이전 함수 결과 (initial로 초기값 설정 가능)

> some()
배열 내 단 하나라도 콜백함수 조건을 만족하는 요소가 있다면 true 아니라면 false를 반환
(빈 배열일 경우 false 반환)

> every()
배열 내 모든 요소가 콜백함수의 조건을 만족한다면 true, 아니면 false 반환 
(빈 배열일 경우 true 반환)

> N 차원 배열
배열에 N개만큼 배열이 존재하는 객체
*/

// > Some()
let users = [
  { name: "bob", age: 17, job: false },
  { name: "alice", age: 20, job: false },
  { name: "john", age: 27, job: true },
];

let some_job = users.some(function (user) {
  return user.job == false;
});
console.log(some_job); // true

let some_age = users.some(function (user) {
  return user.age < 16;
});
console.log(some_age); // false

let empty = [].some((item) => item > 16);
console.log(empty); // false

// > Every()
let every_job = users.every(function (user) {
  return user.job == false;
});
console.log(every_job); // false

let every_age = users.every(function (user) {
  return user.age > 16;
});
console.log(every_age); // true

let empty_1 = [].every((item) => item > 16);
console.log(empty_1); // true
