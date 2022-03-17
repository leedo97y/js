// > 지수표기범
// = 0의 갯수를 지수표기법 e로 대체가능
let billion_2 = 1e9;
console.log(billion_2); // 1000000000 --> 1 + 0 9개

// > 형변환
// = Number to String : Number.toString(), String(Number), Number + "" 를 통해 변환

// > 자리수 표현
// 1) 소수의 자리 수 길이를 제한 : Number.toFixed(pos)
// 2) 정수와 소수의 자리수를 합한 길이로 제한 : Number.toPrecision(pos)

let ms = 1e-6;

console.log(ms.toString()); // 0.000001
console.log(typeof ms.toString());
console.log(String(ms));
console.log(typeof String(ms));
console.log(ms + "");

let num_1 = 125.0;
let num_2 = 123.456;

console.log(num_1 - num_2); // 1.543999999999997
console.log((num_1 - num_2).toFixed(3)); // 1.544
console.log((num_1 - num_2).toPrecision(3)); // 1.54
// precision은 앞의 정수까지 세서 3개의 숫자를 표기한다.
// -> 만약 정수 부분이 0 일 경우 숫자가 시작되는 부분부터 센다.
// 예) 0.044 가 num_1 - num_2의 값일 경우 --> 0.0440이 답이 된다.

// > Number 자료형 확인
// 1) 부동소숫점 산술에서 정의되지 않거나 표현할 수 없는 값(NaN)인지 확인
// : Number.isNaN()
// 2) 정상적인 유한수 인지 확인 : Number.isFinite()

console.log(!Number.isNaN(0.123)); // true
console.log(!Number.isNaN(123 / "hello")); // false
console.log(Number.isFinite(-123)); // true
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite("hello")); // false

// > 정수와 실수 형변환
// 1) 정수로 변환하는 방법 : Number.parseInt()
// 2) 실수로 변환하는 방법 : Number.parseFloat()

console.log(Number.parseInt("125px")); // 125
console.log(Number.parseFloat("1.25em")); // 1.25
console.log(Number.parseInt("1.25em")); // 1
console.log(Number.parseInt("t123")); // NaN
console.log(Number.parseInt("0f", 16)); // 15
