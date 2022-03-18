// > 생성자 함수
// : 유사한 객체를 다중으로 만들 때 사용되는 함수 (타 언어에서의 class 개념과 유사)
//   일반적으로 생성자 함수의 첫 글자는 대문자로 시작
//   생성자 함수로 객체 생성시 new 연산자를 통해 객체 생성

// * 생성자 컨셉 = 붕어빵으로 예시 듬
// 예) 붕어빵 (가격, 재료, 앙금)
// 붕어빵 틀을 통해 가격, 재료, 앙금 등을 다르게 해서 다중으로 만듬
// 예를 들어 - 팥 붕어빵, 슈크림 붕어빵, 우유앙금 붕어빵 등
function FishBread(flavor, price) {
  // (flavor, price)는 property이다.
  // this는 자기자신을 가리킴
  this.flavor = flavor;
  this.price = price;
  this.base = "flour"; // 변하는 변수가 아니라 고정시킴
}
// ---------> 이 부분이 빵틀
let bread_1 = new FishBread("cream", 1200); // 새로운 객체는 new를 적어줘야함
let bread_2 = new FishBread("redbean", 1000);
let bread_3 = new FishBread("milk", 1500);
// ---------> 이 부분이 붕어빵

console.log(bread_1);
console.log(bread_2);
console.log(bread_3);
// => new는 꼭 적어줘야 한다.

// > new.target 속성
// : 이 속성은 new와 함께 호출했는지 확인이 가능하다. 또한, new를 추가 가능
function User(name) {
  console.log(new.target);
  this.name = name;
}

// let result_1 = User("john");
// console.log(result_1);
// let result_2 = new User("john");
// console.log(result_2);

// -----> after
function User(name) {
  if (!new.target) {
    // new를 잊었어도 확실하게 붙여줄 수 있는 조건처리
    return new User(name);
    // -> undefined일 때, 이걸 수행
  }
  this.name = name;
}

let result_1 = User("john");
console.log(result_1);
let result_2 = new User("john");
console.log(result_2);
