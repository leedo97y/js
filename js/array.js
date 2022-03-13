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