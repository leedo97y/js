/* 10. 2차원 배열의 곱셈 합 */

/* user code */
function answer(arr) {
  let product = 1;

  // 1. 2차원 array -> 2중 forloop 사용
  // 2. 제일 안쪽 곱한거 
  // 3. 겉에 곱한거

  
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
      
      
    }
  }

  return product;
}

/* main code */
let input = [
  // TC: 1
  [[1], [2], [3]],
  // TC: 2
  [
    [1, 2],
    [3, 4],
    [5, 6, 7],
  ],
  // TC: 3
  [
    [5, 1],
    [0.2, 4, 0.5],
    [3, 9],
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
