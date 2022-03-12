// >> 등차수열
// 1. 등차수열 : for문으로 구현
let result;

function forloop(s, t, number) {
  let acc = 0;

  for (let i = 1; i <= number; i++) {
    if (i == 1) {
      acc += 3;
    } else {
      acc += t;
    }
    console.log(i, acc);
  }
  return acc;
}

result = forloop(3, 2, 5);
console.log(result);
/* 
1 3
2 5
3 7
4 9
5 11
11
*/

// 2. 등차수열 : 재귀함수로 구현
let Result;

function recursive(s, t, number) {
  if (number == 1) {
    return s;
  } // break point 
  
  return recursive(s, t, number - 1) +t;
}

// [ 등차수열의 동작원리 ]
// number : 5 , recursive(s, t, 4) => 9 + 2 = 11
// number : 4 , recursive(s, t, 3) => 7 + 2 = 9
// number : 3 , recursive(s, t, 2) => 5 + 2 = 7
// number : 2 , recursive(s, t, 1) => 3 + 2 = 5
// number : 1 ==> 3 => 그냥 s값으로 지정된 3을 내보냄

Result = recursive(3, 2, 5);
console.log(Result);
//  따라서, 11 이 나옴.



// >> 등비수열
// 1. 등비수열 : for문으로 구현
let result_1;

function forloop(s, t, number) {
  let acc = 1;

  for (let i = 1; i <= number; i++) {
    if (i == 1) {
      // 등비수열은 일정한 비율. => 따라서, *
      acc *= s;
    } else {
      acc *= t;
    }
    
    console.log(i, acc);
  }

  return acc;
}

result_1 = forloop(3, 2, 5);
console.log(result_1);
/* 
1 3
2 6
3 12
4 24
5 48
48
*/

// 2. 등비수열 : 재귀함수로 구현
let Result_1;

function recursive(s, t, number) {
  if (number == 1) {
    return s;
  }

  return recursive(s, t, number - 1) * t;
}

// [ 등비수열의 동작원리 ]
// number : 5 recursive(s, t, 4) * t => 24 * 2 = 48
// number : 4 recursive(s, t, 3) * t => 12 * 2 = 24
// number : 3 recursive(s, t, 2) * t => 6 * 2 = 12
// number : 2 recursive(s, t, 1) * t => 3 * 2 = 6
// number : 1 ==> 3 => 지정된 s값이 3 이므로

Result_1 = recursive(3, 2, 5);
console.log(Result_1);
// 48 이 나온다.


// >> 팩토리얼 
// 1. 팩토리얼 : 재귀함수로 구현
let result_2;

function recursive(number) {
  if (number == 1) {
    return number;
  }

  return recursive(number - 1) * number;
}

result_2 = recursive(5); // 5! = 5 * 4 * 3 * 2 * 1
console.log(result_2);
// 120 이 나온다.



// >> 피보나치 수열
let Result_2;

function recursive(number) {
  if (number == 1 || number == 0) {
    return number;
  }

  // f(n) = f(n-1) + f(n-2)
  return recursive(number - 1) + recursive(number - 2);
}

// [ 피보나치 수열의 동작원리 ]
// number : 5 -> f(4) + f(3) ==> 3 + 2 = 5
// number : 4 -> f(3) + f(2) ==> 2 + 1 = 3
// number : 3 -> f(2) + f(1) ==> 1 + 1 = 2
// number : 2 -> f(1) + f(0) ==> 1 + 0 = 1
// number : 1 ==> 1
 


Result_2 = recursive(5);
console.log(Result_2);
// 5 가 나온다.

