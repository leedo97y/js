// >> 문자열
const singleQuote = '';
const doubleQuote = "";
// 사용 가능
const backQuote = ``;
const multiLine = '1\
2\
3\
4\
'
// 현재는 백틱 쓴다.

// -> 문자열의 내장함수
const str = 'ABC    ';
str.charAt(2); // 배열 접근 2번째 글자 알려줌
str[2]; // charAt 이랑 같음
str.trim(); // 공백지우기 
str.indexOf(r); // r이 있는지 찾아볼 수 있음 
// -> 문자열 넣는 방법
console.log(String(123)); // 123
console.log(String(null)); // null
console.log(String({})); // [object Object]
console.log(String({name : 'young'})); // [object Object]
console.log(String([1, 2, 3])); // 1,2,3
console.log(JSON.stringify({name : 'alley'})); // {"name":"alley"}
// JSON.stringify 그냥 냅다 찍는 것
console.log([1, 2, 3].toString()); // 1,2,3

// -> 함수 만들어 보기
function genhello(name) {
  return '안녕하세요 ' + name ? name : '이름없음' + '님 반갑습니다'; 
}
genhello('amy');
// 연산자 우선 순위 때문에 잘 해줘야 함
// ==> case 1
function genhello(name) {
  const resultName = name ? name : '이름없음';
  return '안녕하세요 ' + resultName + '님 반갑습니다'; 
}
// ==> case 2
genhello('amy');
function genhello(name) {
  const resultName = name || '이름없음';
  return '안녕하세요 ' + resultName + '님 반갑습니다'; 
}
genhello('amy');