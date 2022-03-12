// for문 예제
for (let i = 0; i < 3; i++) {
  console.log(i);
}
// output : 0, 1, 2

for (let i = 10; i < 3; i++) {
  console.log(i);
}
// output : 없음 => false 가 되어서 !

let num = 0;
for (; num < 2; ) {
  console.log(num);
  num++;
}
// output : 0, 1





// >> 2중 for문 예제
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(`${i} + ${j} = ${i + j}`);
  }
}

// [ 2중 for문의 원리 ]
// i = 0 --> j = 0, j = 1, j = 2까지 다 돌고 
// i = 1 --> j = 0, j = 1, j = 2
// i = 2 --> j = 0, j = 1, j = 2

/* output
0 + 0 = 0
0 + 1 = 1
0 + 2 = 2
_________
1 + 0 = 1
1 + 1 = 2
1 + 2 = 3
_________
2 + 0 = 2
2 + 1 = 3
2 + 2 = 4
*/



// >> 반복문 for의 확장
// 1. for .. in 반복문

// 2. for .. of 반복문
let language = "javascript";
let text = "";

for (let x of language) {
  text += x;
  console.log(x);
}
console.log(text);

/* 
j
a
v
a
s
c
r
i
p
t
javascript
*/
