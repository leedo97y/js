/* 수열 최소값 위치 */

/* user code */
function answer(nums) {
  let result = [];

  let min = 100; // min 값은 초기화 해줄때 배열 내 가장 큰 수로 해줘야 함 => 최솟값 바로 업데이트 가능
  // 본문에서 100 이하로는 안 주어진다고 했으니까

  // 1. 최소값
  for (let i = 0; i < nums.length; i++) {
    if (min > nums[i]) {
      // min값 보다 nums의 값이 작을 경우에
      min = nums[i]; // min에 nums[i]를 업데이트해준다.
    }
  }
  // 이 배열 한바퀴 돌면 최솟값 찾게됨

  // 2. 최소값에 해당하는 위치 index
  for (let i = 0; i < nums.length; i++) {
    // 배열요소에 대한 위치는 i로 순회 하면서 나온다 
    if (min == nums[i]) {
      // 같으면 
      result.push(i); // result에 push 해준다.
    }
  }

  return result;
}

/* main code */
let input = [
  // TC: 1
  [5, 2, 10, 2],

  // TC: 2
  [4, 5, 7, 4, 8],

  // TC: 3
  [12, 11, 11, 16, 11, 12],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
