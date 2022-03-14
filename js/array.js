// 배열
const arr = [1, 2, 3];

arr[0];
arr[1];
arr[2];
arr[3] = 4; // 배열에 추가하는 간단한 방법
arr.push(5); // push 메서드로 기존 배열에 추가
arr[9] =10;
// 사이가 비어있다. / 뛰어넘으면 안됨 
// 배열의 빈 공간은 알아서 안 채워짐
arr.prop = [6, 7];
arr.prop;

// 배열의 length
const arr = [1, 2, 3];

arr[9] = undefined;

console.log(arr);

console.log(arr.length); // 10
arr.length = 0;
// 0을 넣으면 배열이 clear된다.
// 따라서 length를 다룰때 부주의하면 원본 배열이 망가짐


// >> 배열 순회
const arr = [1, 2, 3];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
// 선언문 -> let i = 0; ==> 초기화
// 조건문 -> i < arr.length;
// 증감문 -> i++ ==> 반복문이 실행 될 때마다 쓰임.

let j = 0;

while (i < arr.length) {
  console.log(arr[j]);

  j = j + 1; // ==> j++;
}
// 객체 열거하는 for ~ in, for ~ of 문이 있지만, 굳이 사용하지 말자!


// >> 배열 다루는 법
const squidMembers = ['기훈', '상우', '일남', '새벽', '알리'];

squidMembers.push('덕수');
// 배열의 끝에 요소 추가 
squidMembers.unshift('미녀');
// 배열의 앞에 요소 추가

console.log(squidMembers);
console.log(squidMembers.indexOf('영희')); // 요소 찾기 => -1
console.log(squidMembers.indexOf('상우')); // 2
// indexOf 에서 -1은 없는 것이고, 있으면 몇번째에 있는지 알려준다.
// 배열 요소 파악 여부 
console.log(squidMembers.includes('상우')); // true
console.log(squidMembers.includes('예진')); // false
// 배열의 앞 요소 지우기
console.log(squidMembers.shift('미녀'));
console.log(squidMembers);
// 배열의 끝 요소 지우기
console.log(squidMembers.pop('덕수'));
console.log(squidMembers);
// 배열에서 특정 인덱스 요소 지우기
squidMembers.splice(2, 1);
// 2번째 인덱스 부터 1개 지우는것 



// >> 특이한 배열 : 유사 배열 객체
// Array like Object
function func () {
  console.log(arguments);
  console.log([1, 2]._proto_);
}

func(1, 2, 3, 4, 5, 6);
// 배열을 가지고 놀 수 없음 => 실질적으로 배열이 아님
// 배열 같지만, 배열 메서드를 쓸 수 없음.
const nodeList = document.querySelectorAll('li');

nodeList;
// 이것 역시 배열 같지만 아니다.
console.log(Array.isArray(arguments)); // false -> 진짜 배열이 아님
// ==> 콘솔에 들어간 Array.isArray()는 확실한 배열인지 확인시켜줌.
// Array.from()를 이용하면 nodeList에 추가도 할 수 있다.


// 03/14 ==>> 배열 다루기 추가 사항
const array = ['JS', 'HTML', 'CSS'];

//const newArr = array.concat('TS');
// const newArr = ['TS'].concat(array);
// = 해도 같은 결과 나온다.

const newArr = [...array, 'TS']
// const newArr = ['TS', ...array]
// [ 'TS', 'JS', 'HTML', 'CSS' ] -> ...array가 뒤로 붙어서 나옴

console.log(newArr); // [ 'JS', 'HTML', 'CSS', 'TS' ]
// + 원본 배열인 array는 훼손되지 않음.

const array1 = ['JS', 'HTML', 'CSS'];
const other = ['TS', 'Java'];

const newArr1 = [...array1, ...other];
console.log(newArr1);
// --> 이렇게 하더라도 잘 병합 할 수 있다.





// >> map
const langs = ['JS', 'HTML', 'CSS'];

const newLangs = langs.map(function(lang) {
  // map은 return 문이 반드시 있어야함.
  // langs에 있는 element 개수만큼 함수가 실행
  return lang + '언어';
})

console.log(langs); // [ 'JS', 'HTML', 'CSS' ]
console.log(newLangs); // [ 'JS언어', 'HTML언어', 'CSS언어' ]
// map : 내가가진 배열을 새롭게 조작해서 새로운 배열로 반환할때 쓰임. 



// filter
const langs1 = ['JS', 'HTML', 'CSS', 0, 1, 2, 3];

const newLangs1 = langs1.filter(function(el) {
  if (typeof el === 'number') {
    return el; // return true; 로 써도 됨
  }
});
console.log(newLangs1); // [ 1, 2, 3 ]


const strings = langs1.filter(function(el) {
  if (typeof el === 'string') {
    return el; // return true;
  }
});
console.log(strings); // [ 'JS', 'HTML', 'CSS' ]
// filter : 조건에 맞는 결과만 필터링 해주는 것이다.

// 간단하게 바꾸기 : 화살표 함수 => case 1
const strings1 = langs1.filter((el) => (typeof el === 'string'));


// 간단하게 바꾸기 => case 2
const isString = function(el) {
  if (typeof el === 'string') {
    return el; // return true;
  }
}

const strings2 = langs1.filter(isString);


// reduce
// --> 가장 좋은 예제 : 누적된 값을 다루는 예제
// case 1
function sumTotal() {
  let temp = 0;

  for (let i = 0; i < arguments.length; i++) {
    temp = temp + arguments[i];
  }

  return temp;
  
}

console.log(sumTotal(1,2,3,4,5,6,7)); // 28

// case 2
function sumTotal(...numbers) {
  let temp = 0;

  for (let i = 0; i < numbers.length; i++) {
    temp = temp + numbers[i];
  }

  return numbers.reduce(function(total, current) {
    return total + current
  }, 0);
  
}

console.log(sumTotal(1,2,3,4,5,6,7)); // 28


// case 3
function sumTotal(...numbers) {

  return numbers.reduce((total, current) => total + current, 0);
}

console.log(sumTotal(1,2,3,4,5,6,7)); // 28


// 배열 : 요소 정렬
// sort
// case 1
const numbers = [4, 2, 5, 1, 3];

numbers.sort(function(a, b){
  return a - b; // 작은 수 순 : a와 b 비교
})

console.log(numbers); // [ 1, 2, 3, 4, 5 ]


// case 2
const numbers1 = [4, 2, 5, 1, 3];

numbers1.sort(function(a, b){
  return b - a; // 큰 수 순 : a와 b 비교
})

console.log(numbers1);
// 유니코드로 구분 / 따라서 문자열은 이걸로 안됨


// case 3
const str = ['마', '다', '가', '다', '라', '나'];

str.sort(function(a, b){
  return a.localeCompare(b); // 큰 수 순 : a와 b 비교
})

console.log(str); // [ '가', '나', '다', '다', '라', '마' ]

// case 4
const str1 = ['마', '다', '가', '다', '라', '나'];

const 내림차순 = (a, b) => b.localeCompare(a);
const orderStr = str1.sort(내림차순);

console.log(orderStr); // [ '마', '라', '다', '다', '나', '가' ]


// find : 찾기
const members = ['ehdus', 'wlgh', 'aldhr', 'whddls'];

const result = members.findIndex(function(member) {
  return member === 'wlgh';
})

// const result = members.includes('wlgh'); --> true
// 있으면 true, 없으면 false => 최근 문법

console.log(result); // wlgh 
// find 대신에 findIndex 쓰면 1 나옴 (값이 1번째에 있음)
// -1은 값이 없음

// ==> 배열은 내장된 메서드 많다 !!


