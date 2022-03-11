let str = "hello world";
console.log(typeof str);

console.log(typeof undefined);
console.log(typeof 123);
console.log(typeof 456n);
console.log(typeof 123.123);
console.log(typeof true);
console.log(typeof "hello");
console.log(typeof Symbol("id"));
console.log(typeof Math);
console.log(typeof null); // null이 object -> 호환성 때문에
console.log(typeof console.log); // function


// boolean
let name_check = true;
let age_check = false;

let value_check = 10 > 3;
console.log(value_check);


// null & undefined
// null
console.log(typeof null); // 호환성 문제로 object로 표기

const null_check = null;
console.log(null_check === null);

// undelfined
let name; // 값이 할당 되지 않음

console.log(name);

// number
let num_1 = 123.0;
let num_2 = 123.456;
let num_3 = 1 / 0;
let num_4 = 123456n; 

console.log(num_1 - num_2); // output -0.45600000000000307
console.log((num_1 - num_2).toFixed(3)); // output -0.456 -> toFixed(표현 원하는 자릿수)
console.log(num_3); // output Infinity
console.log(num_1 / "hello"); // output NaN -> 숫자가 아니다.
console.log(typeof num_4); // output bigint

// string 
let str_1 = "hello it's me"; // 큰 따옴표 : 문자열
let str_2 = 'nice to meet you'; // 작은 따옴표 : 문자열

let num = 3;
let str_3 = `hello_${num}`; // 백틱 backtick : 문자열 안에 변수 포함 가능

console.log(str_1);
console.log(str_2);
console.log(str_3);
