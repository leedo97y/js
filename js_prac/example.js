let 안녕 = "하세요";
let hi = "hello";
let HI = "HELLO";

console.log(안녕);
console.log(hi);
console.log(HI);

// sigle-line comment 
// 123123123
// 단일행 주석

console.log("hello world !") // this is single-line comment
/*
 다중행 주석 (multi-line comment) 
 일반적으로 어떤 문자가 와도 개행이 되어도 주석 자리가 된다.
 */
console.log("hello world !")


let A = 123;
console.log(A);

A = 456;
console.log(A);

// let A = 789; // SyntaxError

const B = 123; // 상수 선언과 값 초기화 
console.log(B); 

// B = 456; // TypeError

// const C; // SyntaxError
// C = 123;



// 선언 후 할당
let hi;
hi = "hello";

// 선언과 동시에 초기화
let halo = "hello!";

// 한 줄에 여러변수 선언하고 초기화
let name = "john", age = 12, msg ="hello";


const TESTCASE = 5;
const BIRTHDAY = "2020. 1. 1";

console.log(name);
console.log(age);
console.log(msg);
console.log(BIRTHDAY);



// using var
console.log(name);
var name = "john";
console.log(name);

// using var
var name_2;
console.log(name_2);
var name_2 = "john";
console.log(name_2);
// 문법적으로는 var보다 let이 더 안전