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
  console.log(i); // 1, 2, 3
});
// element = i

// 2) map()
// = 배열 요소 별 함수 호출 및 결과를 배열로 반환 : Array.map(function(item, index, array){})
// ==> item : 배열 요소(element), index : 배열 위치, array : 배열

// before
let nums_1 = [1, 2, 3, 4, 5];
let use_for_loop = [];
for (let i = 0; i < nums_1.length; i++) {
  use_for_loop.push(nums_1[i] * 2);
}
console.log(use_for_loop);

// after = use map
let use_map = nums_1.map(function (item) {
  return item * 2;
});
console.log(use_map);
