/* 8. 배열 회전 */

/* user code */
function answer(user) {
  let reverse = [];

  
  for(let i = user.length - 1; i >= 0; i--) {
    reverse.push(user[i]);
    // user.length에서 -1한 값은 맨뒤 (배열 끝) / 양수 일때만 참 / i를 큰값에서 작은 값으로 나열
  }
  

  console.log(reverse);

  return reverse;
}

/* main code */
let input = [
  // TC: 1
  [1, 2, 3, 4],
  // TC: 2
  [-1, 6, "hello", -15],
  // TC: 3
  ["apple", "banana", "mango"],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
