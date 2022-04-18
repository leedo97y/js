/* 기차 운행 */

/*
  오른쪽 그림처럼 열차가 들어갔다 나올 수 있는 플랫폼이 있다. (그림 : stack 구조 플랫폼)
  열차가 1번 부터 3번 까지 순서대로 들어온다고 했을때, 
  입력 순서대로 나갈 수 있는지 없는지 판단하는 프로그램을 작성하시오. 
  입력은 차량 순서 번호가 적혀 있는 배열이며, 
  가능 여부에 따라 true/false를 반환.
*/

/* user code */
function answer(train) {
  for (let i = 0; i < train.length; i++) {
    if (train.push() === train.pop()) {
      return true;
    } else if (train.push() !== train.pop()) {
      return false;
    } 
    return true;
  }
  // 들어오는 숫자가 저장되고 순조롭게 나갈 수 있다면 = true (in: 1, 2, 3 ==> out: 3, 2, 1)
  // 들어오는 숫자가 저장되고 숫자 순서대로 나갈 수 없다면 = false (in : 1, 2, 3 ==> out: 3, (error) 1, 2)
  // 들어오자마자 나간다면 (예외처리) = true (in: 1, 2, 3 ==> out: 1, 2, 3)
}

/* ANSWER code */

/* < 동작예시 >
  train[0] === 3
  stack: [1, 2, 3]
*/
function answer(train) {
  let stack = [];
  for (let i = 0; train.length; i++) {
    while (stack.length === 0 || stack[stack.length - 1] < train[i]) {
      stack.push(++num);
      // stack에 열차가 없다면 push 해준다. (num은 증가 시켜준다.)
      // 또한 stack의 가장 끝 값이 train의 i 값보다 작다면 push 해준다.
    }

    // train[i]가 우리가 빼야할 열차와 같은지 비교 
    // => 같다면 pop을 해주고  /  다르다면 => false를 반환
    if (stack[stack.length - 1] === train[i]) {
      stack.pop();
    } else {
      return false;
    }
  }
  return true;
}

/* main code */
let input = [
  // TC: 1
  [1, 2, 3],

  // TC: 2
  [3, 2, 1],

  // TC: 3
  [3, 1, 2],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
