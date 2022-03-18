/*
  > Array **
  여러 개체(entity) 값을 순차적으로 나열한 자료 구조
  알고리즘 내 사용빈도가 높다.
  배열 내 값을 요소(element)라고 하며, 배열 요소는 index로 접근 
  
  > 대표 속성(property)과 메서드 
  배열 크기 및 배열 여부 확인 : Array.length : 크기 , Array.isArray() : 베열 여부
  배열 추가 / 삭제 : Array.push(), Array.pop(), Array.shift(), Array.unshift(),
                    Array.splice(), Array.slice() 등
  배열 탐색 : Array.indexOf(), Array.lastIndexOf(), Array.includes()
  배열 변형(callbsck 미사용) : Array.sort(), Array.reverse(), Array.join()
  --> 기본 내장 중에 콜백을 사용하지 않는것
 */

// > 배열 크기 및 배열 여부 확인
let arr = new Array(10);
let arr_1 = [];

console.log(arr);
console.log(arr_1);

let fruits = ["apple", "orange", "melon"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

fruits[1] = "kiwi"; // 바꾸고 싶을때
console.log(fruits);

/* 
  -> 배열의 실체
  자바스크립트에서 배열은 다른 언어에서 말하는 일반적인 배열이 아닌 hash 기반의 객체 
  메모리가 연속적인 밀집 배열(dense array)이 아닌 비 연속적인 희소 배열(sparse array)
*/
let nums = [];

nums[0] = "one"; // 추가시
nums[1] = "two";
console.log(nums.length);
console.log(nums);

nums["once"] = "once";
nums["twice"] = "twice";
console.log(nums.length);
console.log(nums);

// getOwnPropertyDescriptors() --> 내부를 볼 수 있다.
console.log(Object.getOwnPropertyDescriptors(nums));
// 그 내부의 value로써 one, two를 가진걸 볼 수 있다.

// > 배열 타입 확인 및 요소 삭제
let num_1 = 123.456;
let str = "here i am";
let fruits = ["apple", "grape", "watermelon"];

console.log(Array.isArray(num_1)); // false
console.log(Array.isArray(str)); // false
console.log(Array.isArray(fruits)); // true

console.log(fruits);
console.log(fruits.length); // 3

delete fruits[1];
console.log(fruits);
console.log(fruits.length); // 3 --> delete를 사용하지 않는 이유
// ==> 배열을 삭제 했음에도 빈공간이 남아서 length는 계속 3으로 변하지 않는다.

// > 배열 조작 (1)
// 1) 배열 추가 / 삭제 : LIFO (= Last In First Out) = Back
// => 배열 추가 : Array.push(element), 배열 삭제 : Array.pop()
let fruits = ["apple", "banana", "grape"];
let ret; // return value 라고 함.

ret = fruits.push("watermelon"); // 배열 뒤쪽
console.log(fruits);
console.log(fruits.length); // 4
console.log(ret); // 4

ret = fruits.pop();
console.log(fruits);
console.log(fruits.length); // 3
console.log(ret); // watermelon
// --> pop을 거친 return value를 통해 삭제된 값을 확인하고, 이를 다룰 수 있음

// > 배열 조작 (2)
// 2) 배열 추가 / 삭제 : LIFO (= Last In First Out) = front
// => 배열 추가 : Array.unshift(element), 배열 삭제 : Array.shift()

ret = fruits.unshift("watermelon"); // 배열 앞쪽
console.log(fruits);
console.log(fruits.length); // 4
console.log(ret); // 4

ret = fruits.shift();
console.log(fruits);
console.log(fruits.length); // 3
console.log(ret); // watermelon

let fruits_1 = ["apple", "orange", "grape"];
let retr;

// 3) 배열 추가 / 삭제 :
retr = fruits_1.splice(1);
console.log(retr); // [ 'orange', 'grape' ]
// 매개변수로 받은 index 이후의 값을 잘라서 return 하는것
console.log(fruits_1); // [ 'apple' ]

fruits_1 = ["apple", "orange", "melon", "strawberry"];
console.log(fruits_1.splice(1, 1)); // [ 'orange' ] -> 오렌지가 빠짐
console.log(fruits_1); // 사과, 멜론, 딸기만 보임

console.log(fruits_1.splice(1, 1, "mango", "kiwi")); // [ 'melon' ] -> 멜론이 빠짐
console.log(fruits_1); // 사과, 망고, 키위, 딸기 -> 멜론이 빠진 자리에 데이터가 추가

// > 배열 조작 (3)
// 4) 배열 삭제 (index) : 배열요소 삭제 -> Array.slice([start], [end])
// => 원본 객체에 영향을 미치지 않음 (slice)
let fruits = ["apple", "orange", "melon"];

console.log(fruits.slice(1));
console.log(fruits); // 사과, 오렌지, 멜론 다 있음 (원본데이터)

console.log(fruits.slice(1, 2)); // 슬라이스는 스트링과 동일하게 인덱스이다.
// 따라서, end point를 두번째 매개변수로 넣어야 한다
console.log(fruits.slice(-2));
// 자료형과 동일하게 음수로도 넣어줄 수 있다.
// ==> 슬라이스의 방식은 스트링과 동일하다.

// 5) 배열 병합 : 다중 배열 병합 -> Array.concat(arg1, arg2, ...)
// => concat을 통해 손쉽게 추가 가능
let fruits = ["apple", "orange", "melon"];
let fruits_add = ["cherry", "banana"];

console.log(fruits.concat(fruits_add));
console.log(fruits); // 원본데이터 그대로

// > 배열 반복문
// 다양한 반복문 문법을 통해 배열 요소에 접근 가능
// 반복문 문법 : for ... length(index 접근), for ... of(element 접근), for ... in(key 접근)

let fruits = ["apple", "orange", "melon"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

for (let fruit of fruits) {
  console.log(fruit);
}
for (let key in fruits) {
  console.log(key);
  console.log(fruits[key]);
}

// > 배열 탐색
// 1) index 탐색(앞에서 부터) : Array.indexOf(item, from)
// 2) index 탐색(뒤에서 부터) : Array.lastIndexOf(item, from)

let fruits = ["apple", "orange", "banana", "orange", "melon"];

console.log(fruits.indexOf("orange")); // 1
console.log(fruits.indexOf("Orange")); // -1 (없다는 뜻임)
console.log(fruits.indexOf("orange", 2)); // 3 -> 2번째 값부터 찾음
console.log(fruits.lastIndexOf("orange")); // 3
console.log(fruits.lastIndexOf("orange", -3)); // 1
console.log(fruits.lastIndexOf("orange", 0)); // -1 -> apple 말고는 없으니까

// 3) 값 포함 여부 확인 : Array.includes(item, from)
console.log(fruits.includes("orange")); // 찾는 값이 있는지 없는지 알려준다.
console.log(fruits.includes("grape"));
console.log(fruits.includes(0)); // 없으면 false, 있으면 true 반환

// > 배열 변형
// 1) 배열 정렬 / 반전
// = 배열 정렬 : Array.sort(), 배열 반전 : Array.reverse()
let nums = [1, -1, 4, 5, 2, 0];
console.log(nums.sort()); // 오름차순으로 정렬이 됨 (default)
console.log(nums.reverse()); // 이미 sort를 써서 정렬된것을 내림차순으로 반전해줌

let fruits = ["apple", "orange", "banana", "melon"];
console.log(fruits.sort()); // 앞글자 알파벳 위주로 정렬
console.log(fruits.reverse());

// 2) 배열 변환
// = 배열 값을 문자열로 변환 : Array.join(separator)
let fruits = ["apple", "orange", "banana", "melon"];
let strr = fruits.join();
console.log(strr); // apple,orange,banana,melon

let strr_separator = fruits.join(";");
console.log(strr_separator); // apple;orange;banana;melon
let result = strr_separator.split(";");
console.log(result); // [ 'apple', 'orange', 'banana', 'melon' ]
// join 메서드를 써서 ;로 나눠주고, split 메서드를 통해 배열형태로 나눠준다.
