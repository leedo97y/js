/* 5. 중복 단어 제거 */

/* user code */
function answer(arr) {
  let new_arr = [];

  new Set(arr).forEach(function (same) {
    new_arr.push(same);
  });
  // 배열을 만들때는 new를 쓰고 써야하나봄..
  // Set이라는 객체는 중복된 값을 제해준다. (미쳤다 이걸 왜 놓쳤지)
  // Set으로 돌면서 계속 넣어줘야 하므로 forEach 함수를 써야한다.
  // 그렇게 만든 함수를 new_arr에 push를 통해 넣어준다.

  // case 2 > new_arr = Array.from(new Set(arr)); --> 배열로 변경해주는 것 : Array.from(배열로 바꾸고 싶은것)
  // -----> from을 통해 유사 객체로 변환 / 바로 new Set(arr)를 Array로 바꿔준다. (얕은 복사)

  return new_arr;
}

/* main code */
let input = [
  // TC: 1
  ["john", "alice", "alice"],
  // TC: 2
  ["Hello", "hello", "HELLO", "hello"],
  // TC: 3
  ["kiwi", "banana", "mango", "kiwi", "banana"],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
