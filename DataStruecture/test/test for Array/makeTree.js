/* 나무 그리기 */

/* user code */
function answer(height) {
  let str = "\n";

  
  for (let i = 0; i < height; i++) {
    // 높이 만큼 돌아야 하므로, height를 쓴다.
    
    // 1. 공백 처리 " "
    for (let j = 0; j < height - i - 1; j++) {
      str += " ";
      // 공백 처리 부분은 원래 설정된 height 값보다 하나 줄었으므로 height - 1 이다.
      // 거기에 i만큼 계속 줄어야 하니까 - i도 해준다. 따라서, height - i - 1 가 된다.
      // 아무 문자나 넣어서 콘솔에 찍어보고 공백문자를 찍어야 하는 범위인지 알게됨
      
    }
    
    // 2. * 처리 "*" 2n + 1
    for (let j = 0; j < i * 2 + 1; j++) {
      str += "*";
      // 루프를 도는 만큼 * 문자를 찍어주는 부분
      // 2n + 1을 2i + 1로 표현
    }
    
    // 3. 개행문자 추가 
    str += "\n";
  }

  return str;
}

/* main code */
let input = [
  // TC: 1
  3,

  // TC: 2
  5,

  // TC: 3
  7,
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
