/*** 3. 윤년 판별기 ***/

/* user code */
function answer(year) {
  let result;

  // 굳이 모든 연산자를 다 쓰려고 안해도 됨
  // 혼자 풀긴 했는데 식에 연산자를 다 때려 넣느라고 조건식이 비대해짐
  if (year % 4 == 0 && year % 100 !== 0) {
    result = true;
  } else if (year % 400 == 0) {
    result = true;
  } else {
    result = false;
  }

  return result;
}

/* main code */
let input = [
  // TC: 1
  4,
  // TC: 2
  100,
  // TC: 3
  124,
  // TC: 4
  247,
  // TC: 5
  400,
];
for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
