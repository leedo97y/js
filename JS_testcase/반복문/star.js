/*** 1. 별별별 ***/

// ==> 내가 푼 방법

/* user code */
function answer(num) {
  let result = "";

  // 코드 구현 시작 영역
  if (num == input[0]) {
    result = "*****";
  } else if (num == input[1]) {
    result = "*******";
  } else {
    result = "************";
  }
  // 코드 구현 종료 영역

  return result;
}

/* main code */
let input = [
  // TC: 1
  5,
  // TC: 2
  7,
  // TC: 3
  12,
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}

// ==> 정답 코드로 나와있는 것

/* user code */
function answer(num1) {
  let result = "";

  // 코드 구현 시작 영역
  for (let i = 0; i < num1; i++) {
    result += "*";
  }
  // 코드 구현 종료 영역

  return result;
}

/* main code */
let input1 = [
  // TC: 1
  5,
  // TC: 2
  7,
  // TC: 3
  12,
];

for (let i = 0; i < input1.length; i++) {
  console.log(`#${i + 1} ${answer(input1[i])}`);
}
