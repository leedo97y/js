let apple_price = 9; // apple 가격은 9

if (apple_price >= 10) {
  // apple이 10보다 가격이 클때
  
  console.log("very expensive :(");
} else if (apple_price < 5) {
  // if else는 else 내에 if가 또 있는 거랑 동일
  
  // apple의 가격이 5보다 작을때
  console.log("very chip :)");
} else {
  // apple 가격이 그 외일때
  
  console.log("nice!"); // nice!
}

let age = 10; // age는 10

if (age < 10)
  // age가 10보다 작으면 
  
  console.log("young!");
else
  // age가 그 이외이면
  
  console.log("old!"); // old!
// 중괄호 안써도 됨 - 한줄일땐
// 하지만, 웬만하면 그냥 쓰는게 나음



// > 3항 연산자
let age1 = 20;

// 조건문 : if-else
if (age1 < 19) {
  msg = "The user is not an adult.";
} else {
  msg = "The user is an adult.";
}

console.log(msg); // The user is an adult.

// 조건문 : 3항 연산자
msg_another = age1 < 19 ? "The user is nor an adult." : "The user is an adult.";
console.log(msg_another); // The user is an adult.
// => (조건문) ? 참일 경우 수행 : 거짓일 경우 수행

// ==> 두 조건문의 결과는 같다. 같은 말이다. 