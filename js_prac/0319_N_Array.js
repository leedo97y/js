/*
>> N차원 Array (N차원 배열)
배열(Array) 안에 N개 만큼 배열이 존재하는 객체
2/3 차원 지도 정보, RGB를 저장하는 2차원 사진파일 등을 표현할 때 활용가능
*/
array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]; // --> Array[3][3]
array[0][2]; // --> 3에 접근하기 위한 접근 방법

// 에시 코드)
// : 2차원 배열은 array[N][M]으로 접근하며, 배열(Array)전체를 push(), pop() 가능
let array = [
  [101, 102, 103],
  [201, 202, 203],
  [301, 302, 303],
];

console.log(array);
console.log(array[0]);
console.log(array[1][0]); // 201
console.log(array[2][2]); // 303

let arr_2 = array.pop(); // -> 가장 뒷쪽 요소를 뺌
console.log(array.length); // 2
console.log(arr_2); // [301, 302, 303] --> 지워진 요소가 들어가 있다.
console.log(array); // 지워진 요소를 제외하고 보여줌

let array_num = array.push([401, 402, 403]); // -> 가장 뒷쪽에 요소 추가
console.log(array.length); // 3
console.log(array_num); // 3 --> push를 했을 때 length를 return 한다.
console.log(array); // 아까 pop으로 지워준 301..303 요소 빼고 그 자리에 401..403 요소가 추가되어 출력

// > 2차원 배열 반복문 예제
// 2중 for loop을 사용한 2차원 배열 접근
let array1 = [
  [101, 102, 103],
  [201, 202, 203],
  [301, 302, 303],
];

for (let i = 0; i < array1.length; i++) {
  for (let j = 0; j < array1.length; j++) {
    console.log(array1[i][j]);
    // : 두가지 변수를 컨트롤 하면서 코드 양을 간결하게 줄일 수 있음
    // => 원래는 0~2까지 하나하나 넣어가면서 확인해야하지만,
    //    이중 for loop을 이용하면 관리가 더 쉬움
  }
}
// 문자열과 number 동시에 저장
let fruits = [
  ["strawberry", 50],
  ["banana", 100],
  ["ice", 150],
];
// 각각의 요소들을 인덱스로 접근
for (let i = 0; i < fruits.length; i++) {
  console.log(`fruit : ${fruits[i][0]}, amount : ${fruits[i][1]}`);
}
// = 0번째는 과일 이름, 1번째는 양
// 인덱스에 어떤 것을 저장할지만 알고 있다면, 이렇게 활용가능
// --> 자료구조에서 복습할 예정
