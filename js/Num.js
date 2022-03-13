// >> NaN

console.log(Number(undefined));
// 그냥 NaN
console.log(parseInt('숫자로 변환 불가능한 문자열'));
// parseInt가 정수로 변환해주는 내장 메서드 => NaN
console.log(Math.log(-1));
// NaN => 음수를 넣으면 숫자로 표현 불가능
console.log(10 + NaN);
// NaN => 숫자 + NaN 따라서 그냥 NaN 된다.
console.log('가나다라' / 10);
// NaN => 기본적으로 숫자가 문자열로 변환된다.

console.log();


// >> infinity

console.log(Math.pow(2, 1024));
console.log(7 / 0);
// 구문 오류 없음 
isFinite(19); // true
isFinite(Infinity); // false
// infinity 인지 판별해주는 것 
// -> 일반 숫자는 true가 뜬다.



// >> Bigint
console.log(Number.MAX_VALUE);
// 1.7976931348623157e+308
// 자바스크립트에서 표현할 수 있는 가장 큰 값
console.log(Number.MAX_SAFE_INTEGER);
// 9007199254740991 --> 이젠 알아볼 수 있게 표기 해줌
console.log(BigInt(123123123123123123123));
// 123123123123123126272n
// n을 붙여도 되고, Bibint로 호출해도 된다.
// 무한한 숫자를 표현 시킬 수 있다. 
// typpof = Bigint

console.log();

// >> 정수
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
// 자바스크립트에서 숫자 다루는 방법 
console.log(Math.floor(4)); // 4 => DOWN 가장 가까운 정수 
console.log(Math.ceil(4.9)); // 5
console.log(Math.ceil(4.1)); // 5 => UP 올림
console.log(Math.round(4.6)); // 5 => Half 반올림



// >> 정수로 변환
console.log(parseInt('10')); // 10
// parseInt
// => radix 주의 !
// isSafeInt
console.log(Number('10')); // 10



// >> 산술 연산자
// + - * / %
1 + 1;
2 - 1;
10 / 2; 
10 % 2;
2 * 2;
// > case 1
// 증가연산자
let x = 5;
++x;
console.log(x); // 6
// 감소연산자
let y = 5;
--y;
console.log(y); // 4

// > case 2
// 위험하고 예측하기 어려움 
// x + 1로 하는 것이 나을때도 있다. (명시적 방법)
let x1 = 5;
x1++;
console.log(x1); // 6

let y1 = 5;
y1--;
console.log(y1); //4
// 연산자 우선 순위 
console.log(3 + (10 * 2));
// ( ) 써주기


console.log();

// >> Not a Number
console.log(isNaN(undefined)); // true
console.log(isNaN({})); // true
console.log(isNaN('문자열')); // true
console.log(Number.isNaN(undefined)); // false
console.log(Number.isNaN({})); // false
console.log(Number.isNaN('문자열')); // false

