/*** 4. 헨드폰 판매 ***/

/* user code */
function answer(employee) {
  let employee_id;

  let max = 0;
  for (let i = 0; i < employee.length; i++) {
    // 현재판매한 핸드폰 개수가 max 값보다 크다면
    // max 값은 그 판매 개수가 된다.
    if (employee[i] > max) {
      max = employee[i];
      // 종업원 id는 0번 부터가 아니라 1번부터 이므로
      // i + 1이 된다.
      employee_id = i + 1;
    }
  }

  return employee_id;
}

/* main code */
let input = [
  // TC: 1
  [3, 7, 9, 6, 1],
  // TC: 2
  [2, 7, 1, 4, 3, 0, 5],
  // TC: 3
  [7, 5, 0, 1, 2, 12, 6],
];
for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
