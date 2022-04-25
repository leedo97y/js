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

/* 거품정렬 (1) */
let swap = function (arr, idx_1, idx_2) {
  let tmp = arr[idx_1];
  arr[idx_1] = arr[idx_2];
  arr[idx_2] = tmp;
};

let bubbleSort_1 = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) { // 총 수행 횟수
    for (let j = 0; j < arr.length - 1; j++) { 
      if (arr[j] > arr[j + 1]) { // 인접한 값끼리 비교
        swap(arr, j, j + 1);
      }
    }
  }
};

let bubbleSort_2 = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) { // - i 를 통해 이미 정렬된 부분은 다시 건드리지 않도록 처리
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
};

let bubbleSort_3 = function (arr) {
  let swapped;
  for (let i = 0; i < arr.length - 1; i++) {
    swapped = false; // for문 수행 전에 false 처리
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        swapped = true; // 한번만 swap 되어도 true 처리함
      }
    }
    if (!swapped) break; // 이미 정렬된 상태에서는 break 걸림
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


/* 거품정렬 (2) */
let swap_1 = function (arr, idx_1, idx_2) {
  let tmp = arr[idx_1];
  arr[idx_1] = arr[idx_2];
  arr[idx_2] = tmp;
};

let ascending = function (x, y) {
  return x > y;
};

let descending = function (x, y) {
  return x < y;
};

let bubbleSort = function (arr, compare) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (compare(arr[j], arr[j + 1])) {
        swap_1(arr, j, j + 1);
      }
    }
  }
};

/* test code */
let init_array_1 = [6, 5, 1, 3, 2, 4];
let array_1;

let sorting = [bubbleSort];
let order = [ascending, descending];
for (let i = 0; i < sorting.length; i++) {
  for (let j = 0; j < order.length; j++) {
    console.log(sorting[i].name, order[j].name);

    array_1 = [...init_array_1];
    sorting[i](array_1, order[j]);
    console.log(array_1);
  }
}

/*
< Output >

bubbleSort ascending
[ 1, 2, 3, 4, 5, 6 ]
bubbleSort descending
[ 6, 5, 4, 3, 2, 1 ] 

*/