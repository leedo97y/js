// >> for문으로 구현
let input = [1, 2, 3, 4];
let count = 0;

function combination(arr) {
  // for 문 개수 => 뽑는 개수 == r ==> 2
  // 인덱스 3, 즉 vaule 4가 오게 되면
  for (let i = 0; i < arr.length; i++) {
    // j는 4가 된다.
    for (let j = i + 1; j < arr.length; j++) {
      count++;
      console.log(arr[i], arr[j]);
    }
  }
}

combination(input);
console.log(count);

/* 
1 2
1 3
1 4
2 3
2 4
3 4
6
*/


// >> 재귀함수로 구현
let Input = [1, 2, 3, 4]; // 4C2
let Output = [];
let Count = 0;

// arr, data : Output에 저장될 값, s : 뽑을 개수, idx : 스타팅 포인트, r : 끝나는 값
function combination(arr, data, s, idx, r) {
  if (s == r) {
    Count++;
    console.log(data);
    return;
  } // break 포인트 

  for (let i = idx; arr.length - i >= r - s; i++) {
    data[s] = arr[i];
    combination(arr, data, s + 1, i + 1, r);
  }
}

combination(Input, Output, 0, 0, 2);
console.log(Count);

/*
[ 1, 2 ]
[ 1, 3 ]
[ 1, 4 ]
[ 2, 3 ]
[ 2, 4 ]
[ 3, 4 ]
6
*/