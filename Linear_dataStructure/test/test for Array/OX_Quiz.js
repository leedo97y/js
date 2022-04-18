/* OX 퀴즈 */

/* user code */
function answer(mark) {
  let result = 0;

  // 1 -> 1점, 연속한 1인 경우 연속한 count 만큼 점수 추가
  let score = 0; 
  // 밑의 if 식만 했을때는 그냥 1만 세서 결과값이 되므로, 1점일때 점수를 담는 변수 추가
  for (let i = 0; i < mark.length; i++) {
    
    
    if (mark[i] == 1) {
      result += ++score;
    } else {
      score = 0;
    }
    
  }
  // -> 누적되는 값도 for문을 통해서 볼 수 있다.
  // -> score라는 변수를 추가해 누적되는 값이 담기게 만들어야 함.
  return result;
}

/* main code */
let input = [
  // TC: 1
  [1, 0, 1, 1, 1, 0, 1, 1, 0, 0],

  // TC: 2
  [1, 1, 0, 1, 1, 0, 1, 1, 1, 1],

  // TC: 3
  [1, 1, 1, 1, 1, 0, 0, 1, 1, 0],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
