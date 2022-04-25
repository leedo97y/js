/* 일곱 난장이 */

/* user code */
function answer(dwarf) {
  let result = [];

  // 1. 9명 = 7명 + 2명(faker 합)
  // 9명 - 7명 = 2명에 대한 합 숫자 
  let sum = 0; // sum 초기화
  for (let i = 0; i < dwarf.length; i++) {
    sum += dwarf[i]; // 9명 값 나옴
  }
  sum -= 100; // -> 2명 값


  // 2. for 두 요소의 합이 faker 2명에 대한 합 숫자와 같은지 비교 -> i, j
  let faker = []; // 두명을 찾아서 잠시 넣어줘야 할 배열이 필요 !
  for (let i = 0; i < dwarf.length; i++) {
    for (let j = i + 1; j < dwarf.length; j++) {
      if (sum == dwarf[i] + dwarf[j]) {
        // sum 값이 dwarf[i] + dwarf[j] 와 같다면
        faker[0] = i; // faker의 0번째 자리에 i
        faker[1] = j; // faker의 1번째 자리에 j
        break; // 답을 찾으면 break
      }
    }

    if (faker.length != 0) break; // 답을 찾은 경우에 break
  }
  console.log(faker);
  // 3. faker 두명을 제외하고 나머지 값을 result에 넣기
  for (let i = 0; i < dwarf.length; i++) {
    if (faker[0] != i && faker[1] != i) {
      // faker의 0번째에오는 값이 i와 같지 않고, 1번째에 오는 값도 i와 같지 않다면
      result.push(dwarf[i]); // result에 dwarf[i] 값을 push 해줘라
    }
  }


  console.log(result);
  return result;
}

/* main code */
let input = [
  // TC: 1
  [1, 5, 6, 7, 10, 12, 19, 29, 33],

  // TC: 2
  [25, 23, 11, 2, 18, 3, 28, 6, 37],

  // TC: 3
  [3, 37, 5, 36, 6, 22, 19, 2, 28],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
