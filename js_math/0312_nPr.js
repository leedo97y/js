// >> for문으로 구성
let input = ["a","b","c"];
let count = 0;

function permutation(arr) {
  // i : 첫번째 위치 시킬 요소 {i, o, o}
  for (let i = 0; i < arr.length; i++) {
    // j : 두번째 위치 시킬 요소 {i, j, o}
    for (let j = 0; j < arr.length; j++) {
      // 혹시나 i랑 j가 같을 경우를 스킵 처리 해준다.
      if (i == j) continue;
      // k : 세번째 위치 시킬 요소 {i, j, k}
      for (let k = 0; k < arr.length; k++) {
        // i랑 k가 같을 경우 스킵 
        if (i == k) continue;
        // j랑 k가 같을 경우 스킵
        if (j == k) continue;

        console.log(arr[i], arr[j], arr[k]);
        count++;
      }
    }
  }
}

permutation(input);
console.log(count); // 6개의 경우의 수가 나온다.

/*a b c
  a c b
  b a c
  b c a
  c a b
  c b a*/


// >> 재귀 함수로 구성 (위랑 겹쳐서 첫글자 대문자 표기)
let Input = ["a", "b", "c"];
let Count = 0;

// 주의사항
// 1. 재귀함수를 멈춰야 할 조건
// 2. 재귀를 돌면서 변경되어야 할 부분 / 메인로직
function permutation(arr, s, r) {
  // = r은 도착해야할 인덱스
  // s가 r에 도달하면 Count 값을 증가 - 콘솔로 배열 상태 확인
    if (s == r) {
    Count++;
    console.log(arr.join(" ")); // join 메서드 -> 문자열로 변환
    return;
  } // 1. -> 재귀에 대한 break 역할을 하는 부분
  
  // 선택된것을 뽑지 않으려고 0 대신 s부터로 지정
  for (let i = s; i < arr.length; i++) {
    [arr[s], arr[i]] = [arr[i], arr[s]]; // swap
    // 첫번째 요소는 선택 했으니 두번째 요소를 선택 -> s + 1
    permutation(arr, s + 1, r);
    [arr[s], arr[i]] = [arr[i], arr[s]]; // swap 원상복귀

    /*
    s = 0, r = 2  ["a", ]
    s = 1, r = 2  ["a", "b", ]
    s = 2, r = 2  ["a", "b", "c"]
    */

  } 
}

permutation(Input, 0, 2); // 0번부터 2번까지(3개) 뽑는다.
console.log(Count);