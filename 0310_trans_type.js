// String 형변환 예제
console.log(String(123));
console.log(String(1 /0));
console.log(String(-1 / 0));
console.log(String(NaN));
console.log(String(true));
console.log(String(false));
console.log(String(undefined));
console.log(String(null));
// -> 큰 변화 없음


// Number 형변환 예제
console.log(Number(""));
console.log(Number("123"));
console.log(Number("hello"));
console.log(Number("123hello"));
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN

console.log(parseInt("123.123")); // 123 -> 정수만
console.log(parseFloat("123.123")); // 123.123 -> 실수까지 포함

