/* 기린의 시야 */

/*
  기린이 앞만 볼 수 있는 경우, 다른 기린을 몇 마리 볼 수 있는지 총합을 구하는 프로그램을 작성하시오.
  기린은 자신보다 작거나 같은 기린만 볼 수 있으며, 자신보다 큰 기린이 나올 경우 앞 기린들이 가려서 볼 수 없다.
  입력은 기린 별 키 값, 다른 기리늘 볼 수 있는 총합을 구해 반환한다.
  예를 들어, 5 2 4 2 6 1 순의 키가 입력으로 들어오면 1번 기린은 2,3,4 기린을 볼 수 있어 3마리, 
  2번은 볼 수 있는 기린이 없고, 3번은 1마리, 4번은 0마리, 5번은 1마리, 마지막 기린은 앞의 기린이 없으므로 0마리로,
  답은 총 5마리 기린이다. 
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
function answer(giraffe) {
  let result = 0;

  let stack = [];
  giraffe.push(Number.MAX_SAFE_INTEGER);
  for (let i = 0; i < giraffe.length; i++) {
    while (!stack.isEmpty() && stack.peek()["h"] < giraffe[i]) {
      // 높이 계산
      result += i - stack.pop()["i"] - 1;
    }
    stack.push({h: giraffe[i], i: i});
  }

  return result;
}

/* main code */
let input = [
  // TC: 1
  [10, 3, 7, 4, 12, 2],

  // TC: 2
  [7, 4, 12, 1, 13, 11, 12, 6],

  // TC: 3
  [20, 1, 19, 18, 15, 4, 6, 8, 3, 3],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
