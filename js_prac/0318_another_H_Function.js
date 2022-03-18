// > 그 외 고차함수
// 1) forEach()
// = 배열 요소 별 콜백함수 각각에 실행 : Array...forEach(function(item, index, array){})
// ==> item : 배열 요소(element), index : 배열 위치, array : 배열

// use for loop = before
let nums = [1, 2, 3]; // -> element
for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]); // 1, 2, 3
}

// use forEach = after
nums.forEach(function (i) {
  // 여기서 element = i
  console.log(i); // 1, 2, 3
});

// 2) map()
// = 배열 요소 별 함수 호출 및 결과를 배열로 반환 : Array.map(function(item, index, array){})
// ==> item : 배열 요소(element), index : 배열 위치, array : 배열

// before
let nums_1 = [1, 2, 3, 4, 5];
let use_for_loop = [];
// -> 각각의 요소에 곱하기 2를 해서 그 결과값을 새로운 배열에 저장하는 것
for (let i = 0; i < nums_1.length; i++) {
  use_for_loop.push(nums_1[i] * 2);
}
console.log(use_for_loop);

// after = use map
let use_map = nums_1.map(function (item) {
  return item * 2;
  // map을 쓰면 -> '아이템에 2를 곱해서 결과값을 보여주는 함수를 실행하라'가 됨
  // push 를 통해 넣어줘야 하는 과정을 map에서는 거치치 않기 때문에 코드가 간결화
});
console.log(use_map);

// > find()
// = 콜백 함수의 조건을 만족하는, 단 하나의 값만 반환 : Array.find(function(item, index, array) {})
let users = [
  { name: "bob", age: 17, job: false },
  { name: "alice", age: 20, job: false },
  { name: "john", age: 27, job: true },
];

let find_job = users.find(function (user) {
  return user.job == false;
});
console.log(find_job);
// alice가 false임에도 불구하고, bob이 먼저 false이기 때문에 단 하나의 객체만 반환된다.

let find_age = users.find(function (user) {
  return user.age > 19;
  // 성인인지 판단
});
console.log(find_age);
// alice가 먼저 20살이라 하나만 출력

// > filter()
// = 콜백함수의 조건을 만족하는 값을 배열로 반환 : Array.filter(function(item, index, array) {})
let filter_job = users.filter(function (user) {
  return user.job == false;
});
console.log(filter_job);
let filter_age = users.filter(function (user) {
  return user.age > 19;
});
console.log(filter_age);
