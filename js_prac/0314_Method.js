// Method
/* 1. 함수 선언식  */
function add_1(x, y) {
  return x + y;
}

/* 2. 함수 표현식 */
const add_2 = function (x, y) {
  return x + y;
};

/* 3. 화살표 함수 */
const add_3 = (x, y) => x + y;

const add_4 = add_1;

console.log(add_1 == add_2); // false
console.log(add_1 == add_4); // true

console.log(Object.getOwnPropertyDescriptors(add_1));
console.log(Object.getOwnPropertyDescriptors(add_2));
console.log(Object.getOwnPropertyDescriptors(add_3));
console.log(Object.getOwnPropertyDescriptors(add_4));

// 객체에 저장된 값이 함수인 경우, 이를 메서드라고 부름
// 메서드 예시
let user = {
  name: "john",
  age: 27,
  hello_func() {
    console.log("hello");
  },
};

// > method 변경

function hello_func() {
  console.log("hello"); // hello
}

function hi_func() {
  console.log("hi"); // hi
}

let obj = {
  name: "molly",
  age: 24,
  func: hello_func,
};

hello_func();
obj.func();
console.log(hello_func == obj.func); // true
// 여기까지 hello_func가 obj.func와 같기 때문에 true가 나온다.

obj.func = hi_func;
// 하지만, 여기사 obj.func의 값을 변경함.
hi_func();
obj.func();
console.log(hello_func == obj.func); // false -> 그래서 false.
console.log(hi_func == obj.func); // true -> 이건 true

// > this

// 메서드에서 객체 내부 속성 값을 접근할 수 있는 지시자
// 예시
let obj = {
  name: "john",
  age: 27,
  hello_func() {
    console.log("hello " + this.name);
  },
};
// 데이터 저장 부분과, 핸들링하는 부분을 나눠서 볼 수 있다.

// case 1
let user1 = { name: "john" };
let admin1 = { name: "admin" };

// hello_func 내 this 값은 런타임에 설정
function hello_func() {
  console.log("hello " + this.name);
}

user1.func = hello_func; // 수행시, this == user1.name
admin1.func = hello_func; // 수행시, this == admin1.name

user1.func(); // hello john
admin1.func(); // hello admin

user1["func"](); // hello john
admin1["func"](); // hello admin
