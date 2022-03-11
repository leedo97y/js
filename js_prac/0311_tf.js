// > Number

console.log(5 == '5'); // true -> 느슨한 비교
console.log(5 === '5'); // false -> 엄격한 비교 
// 자료형까지 비교한다
console.log("5" <= 10); // true
console.log(true == 1); // true
console.log(false != 123); // true
console.log(true === 1); // false 
// 본질은 같지만, 각각의 타입이 따르기 때문에 false
console.log(false !== 123); // true


// > String

console.log("Z" > "A"); // true 
// 문자열의 비교는 첫번째 값으로만 비교, 문자 길이랑은 상관 X
console.log("hello" < "hi"); // true
console.log("hello" >= "helloo"); // false
// equal이 될 수 있지만, 오른쪽이 조금 더 크다고 판단
// 문자열 길이가 더 길기 때문에
// 따라서, false



// > 논리 연산자

console.log(true || false); // true
console.log(Boolean(0 || false)); // false
// 0은 false 이다.
console.log(Boolean(123 || false)); // true
console.log(Boolean(123 && 0)); // false
console.log(Boolean(false && true)); // false
console.log(Boolean(true && 3)); // true
console.log(Boolean(0 && false)); // false
console.log(!false); // true (!는 반대)
console.log(!123); // false