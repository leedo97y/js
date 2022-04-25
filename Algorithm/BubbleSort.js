/*
  거품 정렬 (Bubble Sort)
  - 서로 인접한 두 원소를 비교하면서 정렬하는 알고리즘
  - 평균 시간 복잡도 O(n^2)
  - 알고리즘 동작 방식
    : 인접한 두원소를 비교해서 바꾸면서 해결 (뒤쪽에 정렬된 부분을 배치 / 오름차순이 default)
    - 1. 인접한 값 비교 => 큰값? 교환
    - 2. index N 반복
    - 3. N 차례 반복 N - i
*/

let swap = function (arr, idx_1, idx_2) {
  let tmp = arr[idx_1];
  arr[idx_1] = arr[idx_2];
  arr[idx_2] = tmp;
};

let bubbleSort_1 = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
};

let bubbleSort_2 = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
};

let bubbleSort_3 = function (arr) {
  let swapped;
  for (let i = 0; i < arr.length - 1; i++) {
    swapped = false;
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        swapped = true;
      }
    }
    if (!swapped) break;
  }
};

/* test code */
let init_array = [6, 5, 1, 3, 2, 4];

let array = [...init_array];
bubbleSort_1(array);
console.log(array);
array = [...init_array];
bubbleSort_2(array);
console.log(array);
array = [...init_array];
bubbleSort_3(array);
console.log(array);