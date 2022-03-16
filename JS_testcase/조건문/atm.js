/*** 4. ATM 기기 ***/

/* user code */
function answer(withdraw, total) {
  let result;

  // 차분히 하자
  // 1. 인출값이 5의 배수가 아닐때 = total 그대로 보여주기
  // 2. 인출값 + 수수료가 total 보다 클때 = total 그대로 보여주기
  // 3. 그 외 => 인출값이 5의 배수이며, 수수료 더한 값이 total 넘지 않을때
  // ==> 3.은 전체에서 인출값 빼고 수수료 뺀 값을 보여주면 됨.
  // --> 차근차근 한단계씩 생각하며 하면 됨.

  if (withdraw % 5 != 0) {
    result = total;
  } else if (withdraw + 0.5 > total) {
    result = total;
  } else {
    result = total - withdraw - 0.5;
  }

  return result;
}

/* main code */
let input = [
  // TC: 1
  [40, 130.0],
  // TC: 2
  [33, 130.0],
  // TC: 3
  [300, 300.0],
];
for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i][0], input[i][1])}`);
}
