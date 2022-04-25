/* 접시 꺼내기 */

/*
  접시가 a, b, c, d 순으로 한쪽이 막혀있는 세척기에 들어간다고 할때, b a c d 순으로 꺼내기 위해서는 
  push push pop pop push pop push pop 순으로 꺼내면 된다. 세척기에 꺼내야 하는 접시의 순서가 주어질때, 
  push / pop으로 접시가 꺼내져야 하는 동작을 계산하는 프로그램을 작성하시오.
  입력은 접시으ㅏ 수가 10개를 넘기지 않는 소문자 알파벳, 접시 꺼내는 push / pop 연산 동작을
  push -> 0, pop -> 1로 변환하여 배열로 반환한다. 
  (단, 주어진 순서로 못꺼내면 배열로 반환)
 */


// 미리 정의해놓은 코드 peek과 isEmpty

if (!Array.prototype.peek) {
  // Array.prototype.peek라는 것이 존재하지 않는다면
    Array.prototype.peek = function () {
    return this[this.length - 1];
  };
  // peek 함수 만들어준다.
}

if (!Array.prototype.isEmpty) {
  // Array.prototype.isEmpty라는 것이 존재하지 않는다면
  Array.prototype.isEmpty = function () {
    return this.length == 0;
  };
  // isEmpty 함수 만들어준다.
}

/* user code */
function answer(str) {
  let result = [];

  // 1. 점시의 순서 문자열

  // 2. 꺼내야 하는 접시, 세척기 안 알파벳 작을 때

  // 3. 최상단 접시와 비교

  let stack = [];
  let dish = str.split("").sort().join("");
  let dish_index = 0;

  for (let i = 0; i < str.length; i++) {
    while(stack.isEmpty() || stack.peek() < str[i]) {
      stack.push(dish[dish_index++]);
      result.push(0);
    }

    if (stack.isEmpty() || stack.peek() > str[i]) {
      return [];
    } else {
      stack.pop();
      result.push(1);
    }
  }

  return result;
}

/* main code */
let input = [
  // TC: 1
  "bacd",

  // TC: 2
  "dabc",

  // TC: 3
  "edcfgbijha",
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
