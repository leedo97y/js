/* 괄호 짝 찾기 */

/* 
  계산 수식이 주어졌을 때, 같은 짝의 괄호 위치를 찾는 프로그램을 제작하시오.
  입력은 계산 수식으로 주어지며, 괄호의 짝 별 위치를 [시작, 끝]으로 찾아 2차원 배열 형태로 반환한다.
  위치 시작 값은 0으로 시작하며, 하나라도 짝이 맞지 않을 경우 빈 배열을 반환한다.
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
  
  // stack 이라는 임시 공간을 만든다.
  let stack = [];
  // 1. "(" ")" 
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "(") {
      stack.push(i);
      // 이미 stack에 들어간것은 모두 시작 괄호기 때문에 stack에는 인덱스만 넣어준다.
    } else if (str[i] == ")") {
      if (stack.isEmpty()) {
        return [];
      }
      // str의 인덱스가 위치한 문자열이 ")"와 같은 경우, 
      // stack이 비어있다면 빈 배열을, 그렇지 않다면 push 해준다.

      result.push([stack.pop(), i]);
      // 시작과 끝 부분을 지정해준다. stack.pop()이 시작 부분이고, i는 끝나는 부분의 인덱스를 넣어준다.
    }
  }

  // 2. 예외처리 : 비어있지 않다면 ===> "(" 이거 한개만 남은 상황을 얘기
  if (!stack.isEmpty()) {
    return [];
  }
  // 마지막으로 stack이 비어있지 않다면
  // 논리 연산자 : ! ==> ~이 아니라면

  return result;
}

/* main code */
let input = [
  // TC: 1
  "(a+b)",

  // TC: 2
  "(a*(b+c)+d)",

  // TC: 3
  "(a*(b+c)+d+(e)",

  // TC: 4
  "(a*(b+c)+d)+e)",

  // TC: 5
  "(a*(b+c)+d)+(e*(f+g))",
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
