/*
>> Map
다양한 자료형의 key를 허용하고, key-value 형태의 자료형을 저장 가능할 수 있는 collection
Map은 Object 대비 비교하면 다양한 key의 사용을 허용하고, 값의 추가 / 삭제 시 메서드를 통해 수행이 필요함.

> 대표 속성(property) 및 메서드 
1) 생성자 : new Map()
2) 개수 확인 : Map.size
3) 요소 추가 : Map.set(key, value)
4) 요소 접근 : Map.get(key)
5) 요소 삭제 : Map.delete(key)
6) 전체 삭제 : Map.clear()
7) 요소 존재 여부 확인: Map.has(key)
8) 그 밖의 메서드 : Map.keys(), Namp.values(), Map.entires()

*/
let map = new Map();

map.set("name", "john");
map.set(123, 456);
map.set(true, "bool_type");

console.log(map); // 전체 내부 보여줌
console.log(map.get(123)); // 123의 value 값
console.log(map.get("name")); // name의 value 값
console.log(map.get(true)); // true의 value 값
console.log(map.size); // size

map.delete(123); // 123만 삭제
console.log(map); // 2개 들어있음
map.clear(); // 전체 삭제
console.log(map); // 0

map.set(123, 789).set(false, "bool_type").set("fruit", "sweet");
// 이런 식으로도 추가 가능
console.log(map);

// > Map 반복문
// : Collection 객체인 Map이 가지고 있는 iterator 속성을 이용하여 for...of 구문을 통해 반복문 수행 가능
let recipe_juice = new Map([
  ["strawberry", 50],
  ["banana", 100],
  ["ice", 150],
]);

for (let item of recipe_juice.keys()) {
  console.log(item);
} // strawberry banana ice
for (let amount of recipe_juice.values()) {
  console.log(amount);
}
for (let entity of recipe_juice) {
  console.log(entity);
}

console.log(recipe_juice);
console.log(recipe_juice.entries());
/*
[Map Entries] {
  [ 'strawberry', 50 ],
  [ 'banana', 100 ],
  [ 'ice', 150 ]
}
*/

// 예제2)
// Object로 바꾸기
let recipe_juice_obj = Object.fromEntries(recipe_juice);
console.log(recipe_juice_obj);
// Map 표시 사라지고 오브젝트로 변경되어 나타남
// { strawberry: 50, banana: 100, ice: 150 }
let recipe_juice_kv = Object.entries(recipe_juice_obj);
console.log(recipe_juice_kv);
// [ [ 'strawberry', 50 ], [ 'banana', 100 ], [ 'ice', 150 ] ]
// 처음 넣어 줬을때 값처럼 만들어줌
let recipe_juice_map = new Map(recipe_juice_kv);
console.log(recipe_juice_map);
// Map(3) { 'strawberry' => 50, 'banana' => 100, 'ice' => 150 }
// 다시 Map 처럼 보여줌
