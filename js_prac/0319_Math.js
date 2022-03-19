/*
>> Math
표준 built-in 객체로서 수학적인 연산을 위한 속성값과 메서드를 제공하는 객체
Math는 생성자 함수가 아니며, 모든 속성과 메서드는 정적이기에 Math.function()으로 언제든 호출 가능

> 대표 속성 및 메서드
1) 오일러 상수 : Math.E
2) PI : Math.PI
3) 절대값 : Math.abs(x)
4) 최대값: Math.max(x)
5) 최소값 : Math.min(x)
6) 랜덤 난수 값 : Math.random()
7) 제곱과 제곱근 : Math.pow(x, y), Math.sqrt(x)
8) 소수점 처리 : Math.round(x), Math.ceil(x), Math.floor(x),
*/

// > 최대(max(...x)) / 최소(min(...x)) / 절대값(abs(x))
// : 배열을 인수로 받아 최대 / 최소를 산출하려면 apply 함수 혹은 스프레드 문법 사용 필요
// 1) max, min
console.log(Math.max(1, -1));
console.log(Math.min(1, -1));

console.log(Math.max(1, -1, 5, 23, 17, -4)); // --> value로만 인자값을 받음
console.log(Math.min(1, -1, 5, 23, 17, -4));

let nums = [1, -1, 5, 23, 17, -4];
// use apply
console.log(`Max : ${Math.max.apply(null, nums)}`); // this 부분은 null로
console.log(Math.max.apply(null, nums)); // => 위는 형식 지정, 아래는 일반적으로 쓰일때
console.log(`Min : ${Math.min.apply(null, nums)}`);
console.log(Math.min.apply(null, nums));
// use spread
console.log(`Max : ${Math.max(...nums)}`); // spread 문법은 ...이 키워드
console.log(`Min : ${Math.min(...nums)}`);

// 2) abs
console.log(Math.abs(1));
console.log(Math.abs(-1)); // 절대값이라 1임
console.log(Math.abs(Infinity)); // 음수 인피니티를 넣어도 제거되고 나오는걸 볼 수 있다.

// > random
// 0과 1 사이의 난수 랜덤 값
console.log(Math.E);
console.log(Math.PI);

for (let i = 0; i < 3; i++) {
  console.log(Math.random());
}

for (let i = 0; i < 3; i++) {
  console.log(Number.parseInt(Math.random() * 10));
  // 10을 곱해서 정수인 1의 자리 숫자 나오게 만들기
}

// > 제곱 / 제곱근 / 소수점 처리
// 제곱 : Math.pow(x, y), 제곱근 : Math.sqrt(x)
// 소수점 이하 반올림 정수 : Math.round(x)
// 소수점 이하 올림 : Math.ceil(x), 소수점 이하 내림 : Math.floor(x)
console.log(Math.pow(2, 3));
console.log(2 ** 3);

console.log(Math.sqrt(4));
console.log(Math.sqrt(2));

// round : 반올림
console.log(Math.round(3.5)); // 4
console.log(Math.round(-2.3)); // -2
console.log(Math.round(-2.7)); // -3

// ceil : 무조건 다 올림
console.log(Math.ceil(3.5)); // 4
console.log(Math.ceil(-2.3)); // -2
console.log(Math.ceil(-2.7)); // -2

// floor : 무조건 다 내림
console.log(Math.floor(3.5)); // 3
console.log(Math.floor(-2.3)); // -3
console.log(Math.floor(-2.7)); // -3
