/*** 5. 무한 뺄셈 ***/

/* user code */
function answer(s, e) {
  let sequence = [];
  sequence.push(s);
  sequence.push(e);

  let sum;

  while (1) {
    sum = s - e;
    s = e;
    e = sum; // 밑에 설명

    if (e < 0) break; // 음수인지 판단 --> 음수일때 break

    sequence.push(e); // 음수가 아니면 e에 다시 값 넣어주기
  }
  /*
  13  7  6  1  5  -4
  s   e sum 
      s  e sum
         s  e sum
            s  e  sum
                   e
   */

  return sequence;
}

/* main code */
let input = [
  // TC: 1
  [9, 3],
  // TC: 2
  [6, 3],
  // TC: 3
  [13, 7],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}
