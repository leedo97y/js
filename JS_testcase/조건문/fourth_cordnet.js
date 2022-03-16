/*** 5. 네번째 좌표 ***/

/* user code */
function answer(x_arr, y_arr) {
  let result = [];

  // x, y는 따로 해줘야 한다.
  // 차근차근 생각해보기
  // cordingTest #1 => 목표 1개..!!
  if (x_arr[0] == x_arr[1]) {
    result[0] = x_arr[2];
  } else if (x_arr[1] == x_arr[2]) {
    result[0] = x_arr[0];
  } else if (x_arr[0] == x_arr[2]) {
    result[0] = x_arr[1];
  }

  if (y_arr[0] == y_arr[1]) {
    result[1] = y_arr[2];
  } else if (y_arr[1] == y_arr[2]) {
    result[1] = y_arr[0];
  } else if (y_arr[0] == y_arr[2]) {
    result[1] = y_arr[1];
  }

  return result;
}

/* main code */
let input = [
  // TC: 1
  [
    [5, 5, 8],
    [5, 8, 5],
  ],
  // TC: 2
  [
    [3, 1, 1],
    [2, 1, 2],
  ],
  // TC: 3
  [
    [7, 7, 3],
    [4, 1, 1],
  ],
];
for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}
