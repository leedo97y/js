/* 두 수 최대합 */

/* user code */
// 내가 쓴 코드
function answer(nums) {
  let result = [];
    let ascending_order = function (x, y) {
      return x - y;
    }
    result = nums.sort(ascending_order);
    result.reverse(ascending_order);

    result = result.slice(0, 2);

  return result;
}
// 해설 코드
function answer(nums) {
  let result = [];

  // result[0] ---> 1번째 최대값, result[1] ----> 2번쨰 최대값
  result = nums[0] > nums[1] ? [nums[0], nums[1]] : [nums[1], nums[0]];
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] > result[0]) {
      result[1] = result[0]; // value shift
      // result 0 값을 먼저 nums i 에 넣어주면 원래 0에 있던 값을 result 1로 밀어줘야 한다.
      result[0] = nums[i];
    } else if (nums[i] > result[1]) {
      result[1] = nums[i]
    }
  }

  return result;
}



/* main code */
let input = [
  // TC: 1
  [-11, 5, 18, -2, -3, 6, 4, 17, 10, 9],

  // TC: 2
  [3, 7, -14, 2, -6, 13, -20, -2, -7, 6, -17, -5, 14, -9, 19],

  // TC: 3
  [
    -15, -4, -8, 12, 12, -8, -8, 9, 10, 15, -2, 10, -14, 2, 13, 19, -9, 3, -18,
    14,
  ],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
