/* 1. 최소값 구하기 */

/* user code */
function answer(x, y) {
  let min;

  if (x > y) {
    min = y;
  } else if (x < y) {
    min = x;
  }
  // min = x > y ? y : x;
  // 이거 한줄로 끝낼 수 있음
  return min;
}

/* main code */
let input = [
  // TC: 1
  [16, 3],
  // TC: 2
  [-3, 1],
  // TC: 3
  [1000, 525],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i][0], input[i][1])}`);
}
