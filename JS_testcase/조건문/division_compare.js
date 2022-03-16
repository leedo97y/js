/*** 2. 나누기와 대소비교 ***/

/* user code */
function answer(a, b, c, d) {
  let result;

  // if ... else를 이용해서 풀기
  // 혼자 다 품 -> 쉬운가봄
  if (a / b > c / d) {
    result = 1;
  } else if (a / b == c / d) {
    result = 0;
  } else if (a / b < c / d) {
    result = -1;
  }

  return result;
}

/* main code */
let input = [
  // TC: 1
  [14, 2, 6, 6],
  // TC: 2
  [6, 7, 8, 9],
  // TC: 3
  [18, 2, 36, 4],
];

for (let i = 0; i < input.length; i++) {
  console.log(
    `#${i + 1} ${answer(input[i][0], input[i][1], input[i][2], input[i][3])}`
  );
}
