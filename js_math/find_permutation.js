/* 1. 등차수열의 항 찾기 */

/* user code */
function answer(a, d, n) {
  let index = -1;

  // 등차수열 
  let num;
  for (let i = 1; ; i++) {
    num = a + d * (i - 1);
    
    // 답 찾지 못함
    if (num > n) {
      index = -1;
      break;
    }

    //  답 찾음
    if (num == n) {
      index = i;
      break;
    }

    //console.log(num);
  }

  return index;
}

/* main code */
let input = [
  // TC: 1
  [1, 2, 7],
  // TC: 2
  [2, 3, 10],
  // TC: 3
  [3, 5, 23],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i][0], input[i][1], input[i][2])}`);
}
