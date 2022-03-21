/*
  프로토타입(prototype) = 속성값
  - 어떠한 객체가 만들어지기 위해 객체의 모태가 되는 원형
  - 자바스크립트는 일반적인 객체지향 언어와는 다르게, 프로토타입을 이용한 복사(Cloning)를 통해 새로운 객체 생성 
  - 일반적인 객체 생성방식 : 속성은 생성자, 메서드는 프로토타입에서 정의 
 */

  // 생성자에서 속성 정의

  function Test(a, b) {
    // 속성 정의
  }
  
  // 첫 메소드 정의
  Test.prototype.x = function() {  };

  // 두번째 메소드 정의 
  Test.prototype.y = function() {  };

  // 객체 생성 
  let test = new Test(1, 2);

  // ...

  // 예제
  // 생성자 속성 정의
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }

  // 프로토타입을 통한 Person 메서드 정의
  Person.prototype.isAdult = function () {
    return this.age > 19;
  };

  // 객체 생성
  const p1 = new Person("bob", 26);
  const p2 = new Person("alice", 16);

  console.log(p1);
  console.log(p2);
  // 속성의 세부 상태
  console.log(Object.getOwnPropertyDescriptors(p1));

  console.log(p1.isAdult());
  console.log(p2.isAdult());
