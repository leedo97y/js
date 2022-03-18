/* 
>> Set 
value 만을 저장하며, 중복을 허용하지 않는 Collection

> 대표 속성 및 메서드 
1) 생성자 : new Set()
2) 개수 확인 : Set.size
3) 요소 추가 : Set.add(value)
4) 요소 삭제 : Set.delete(value)
5) 전체 삭제 : Set.clear()
6) 요소 존재 여부 확인 : Set.has(key)
7) 그 밖의 메서드 : Set.keys(), Set.values(), Set.entires() 

*/

// > 요소 추가 / 삭제
// = 요소 추가 : Set.add(value), 요소 존재 여부 확인 : Set.has(key), 요소 삭제 : Set.delete(value)
// = 다양한 자료형을 value로 사용 가능하며, set.add 호출시 set이 반환되므로 체이닝 가능
let set = new Set();
let num = new Set([1, 2, 3, 4, 5]);

console.log(set);
console.log(num);
console.log(str); // Set(5) { 'H', 'e', 'l', 'o', '!' }
// 중복을 허용하지 않는다. 그래서 문자열 중복이 빠짐

set.add(1).add(1).add(10).add(20);
console.log(set);
// 1 두번 출력해도 하나만 반영

console.log(set.has(10)); // true
console.log(set.has(2)); // false

set.delete(1);
console.log(set); // 1이 지워져서 나타난다
set.delete(-1);
console.log(set); // 따로 오류가 나진않음
// 삭제 될 값이 들어있으면, return true
// 삭제 될 값이 없으면, return false

// > Set 반복문
// Collection 객체인 Set이 가지고 있는 iterator 속성을 이용하여 for... of 구문을 통해 반복문 수행가능
let str = new Set("Hello!");
console.log(str);

for (let item of str) {
  console.log(item);
}
for (let item of str.keys()) {
  console.log(item);
}
for (let item of str.values()) {
  console.log(item);
}

for (let item of str.entries()) {
  console.log(item);
}
