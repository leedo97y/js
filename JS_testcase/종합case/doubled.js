/* 2. 제곱 구현 */

/* user code */
function answer(x, y) {
  let result = 1;

  // 첫번쨰 값 : 2에 y가 3번 곱해줘야 한다.
  // ==> 변수 초기화 시켜준뒤, result에 ~만큼 곱해준다.
  // y = 3 --> 2, 4, 8
  for (let i = 0; i < y; i++) {
    result *= x;
  }

  return result;
}

/* main code */
let input = [
  // TC: 1
  [2, 3],
  // TC: 2
  [4, 6],
  // TC: 3
  [1, 100],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i][0], input[i][1])}`);
}
