/* 9. 문자 교정 */

/* user code */
function answer(str) {
  let fix_str = "";
  // 1. 단어 기준으로 나눈다 -> 공백 기준으로 나눈다.
  // 2. 단어의 앞 글자를 대문자로 변환시킨다.
  // 3. 단어들을 다시 문장으로 변환시켜준다.
  let list = str.split(" ");
  
  for (let item of list) {
    fix_str += item[0].toUpperCase() + item.slice(1) + " ";
  }


  return fix_str;
}

/* main code */
let input = [
  // TC: 1
  "Hello, My name is john",
  // TC: 2
  "This week is closed due to COVID-19",
  // TC: 3
  "fifty percent off this week",
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
