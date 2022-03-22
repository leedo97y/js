/* 6. 배열 내 최대값 구하기 */

/* user code */
function answer(arr) {
  let max;

  max = Number.MIN_SAFE_INTEGER;
  // 음수를 표현할 수 있는 안전한 값을 세팅해줌
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      // 만약 i가 max값보다 크다면, max 값에 i를 넣어줘라
      // 배열을 한번 다 탐색하게 되면 maximum 값만 남게 된다.
      max = arr[i];
    }
    
  }

  // max = Math.max.apply(null, arr); --> 바로 나옴 
  // Math 객체를 쓰면 바로 알 수 있지만, for문을 쓰는 법을 익혀야 하기 때문에 제한을 둠

  return max;
}

/* main code */
let input = [
  // TC: 1
  [1, 6, 5, 2, 3],
  // TC: 2
  [19, 41, 23, -4, 17],
  // TC: 3
  [-64, -27, -41, -33, -59],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
