/* 숫자 빈도수 구하기 */

/* user code */
function answer(s, e) {
  let result = [];

  // 0. 각 자리수 별 index => 0
  for (let i = 0; i < 10; i++) {
    result[i] = 0;
  }

  // 1. s <= n <= e :  s 부터 e 까지 순회
  
  let num; // 사칙연산을 위해 만든 변수
  for (let i = s; i <= e; i++) {
    num = i; // 결국에는 num이 i이다.
  

  // 2. n => % / : 나누기와 나머지 연산자를 이용해서 counting
    while (num != 0) { // 129 9 2 1 -> 0이 되면서 while문이 stop
      // num이 0이 아닐때까지 반복
      
      result[num % 10]++; 
      // [] : num을 10으로 나눈 나머지(일의 자리)
      // 일의 자리가 들어가는 위치에 해당하는 result를 증가 시킴

      num /= 10; 
      // num을 10으로 나눠서 업데이트

      num = parseInt(num);
      // 나누고 업데이트 하면 소숫점꺼지 나오게 된다. 
      // 따라서 parseInt 라는 내장 메서드를 이용하여 정수로 변환
    }
  }
  return result;
}

/* main code */
let input = [
  // TC: 1
  [129, 137],

  // TC: 2
  [1412, 1918],

  // TC: 3
  [4159, 9182],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}
