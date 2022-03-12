// 반복문 문제

// 문제 (1)
// 반복문 for을 이용하여 0~10 까지의 정수 중 
// 짝수의 합을 구한 뒤,출력해주는 코드를 작성하시오.

const UNTIL_NUM = 10;
let sum = 0;

for (let i = 0; i <= UNTIL_NUM; i++) {
  if (i % 2 == 0) {
    sum += i;
  }
}
console.log(sum);
// 30


// 문제 (2)
// 반복문 for 2개를 이용하여 2~9단까지 출력

for (let i = 2; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    console.log(`${i} X ${j} = ${i * j}`)
  }
}

/*
2 X 1 = 2
2 X 2 = 4
...

9 X 8 = 72
9 X 9 = 81
*/