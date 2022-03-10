// plus : +
console.log(31 + 10); // 41
// substract : -
console.log(31 - 10); // 21
// multiply : *
console.log(31 * 10); // 310
// division : /
console.log(31 / 10); // 3.1 -> 소숫점이 나온다.
console.log(parseInt(31 / 10)); // 3 
//--> parsrInt를 통해 몫만 구할 수 있다.
// remain : % 
console.log(31 % 10); // 1
// power : **
console.log(2 ** 3); // 8



// 대입 연산자
let num_1 = 123;
let num_2 = 456;
let str_1 = "hello";
let str_2 = "world";

let num_3, str_3;

num_3 = num_1 + num_2;
str_3 = str_1 + str_2;
// 중복을 최소화 해보자 -> 복합 대입 연산자

console.log(num_3);
console.log(str_3);

let num_4 = num_1 - num_2;
console.log(num_4);


// 복합 대입 연산자
let num = 10;

let result_1, result_2, result_3, result_4, result_5;
result_1 = result_2 = result_3 = result_3 = result_4 = result_5 = 31;

// +=
result_1 += num; // result_1 = result_1 + num 
console.log(result_1); // 41

// -=
result_2 -= num;
console.log(result_2); // 21

// *=
result_3 *= num;
console.log(result_3); // 310

// /=
result_4 /= num;
console.log(result_4); // 3.1

// %=
result_5 %= num;
console.log(result_5); // 1