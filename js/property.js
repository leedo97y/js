// 객체 생성
const object = {
  property : 'value',
  method: function() {},
}
// 파스칼 케이스 : WordWord1Word2 ... 이런거
function NewObject(name) {
  this.name = name;
}

const newObject = new NewObject('doy');

//const newObject2 = Object.create(프로토타입, 객체서술자(기술자));
// 더 자세하게 만들고 싶을때 이용
const newObject2 = Object.create(
  Object.prototype, 
  {
    name : {
    value : 'doy',
    writable : true, // 덮어쓸 수 있는지
    enumerable : true, // 열거 가능한지
    configurable : true, // 객체 서술자를 수정할 수 있는지
    },
  },
);

newObject2.name = 'Kim';

for (const key in newObject2) {
  console.log(key);
}
newObject2;



// >> 프로퍼티 열거
const obj = {
  prop1 : 'value1',
  prop2 : 'value2',
  prop3 : 'value3',
  prop4 : 'value4',
}

for (const key in obj) {
  // for .. in : 여기서는 4번 열거
  console.log(key);
  console.log(obj[key]);
} // 4개가 다 들어옴


// => chaining 이라고 한다
{
  let val = 1;
  {
    let val = 4;
    {
      let val = 10;
      {
console.log(val); // 10       
      }
    }
  }
}
// 객체도 자신의 프로토타입이 없는게 있으면 위로 chaining을 하게된다.

for (const key in obj) {
  
  if (obj.hasOwnProperty(key)) {
   
    console.log(obj[key]);
  }
} 
// obj 객체에 key가 가진게 맞는가? (hasOwnProperty로 파악가능)




// >> 프로퍼티 조작
const person = {
  firstName : 'lee',
  location : 'Seoul',
}

person.lastName = 'doy'; // 추가
person.lastName = 'do-yeon'; // 수정도 가능

delete person.location; // 삭제

console.log(person);


// >> 프로퍼티 접근자 (getter, setter)
const person = {
  _firstName : 'lee',
  lastName : 'ji-ho',

  get firstName() {
    return this._firstName.toUpperCase();
    // 현재 단계에서 this는 person이다. --> 대신하는 것
    // toUpperCase()는 모두 대문자로 만들어줌
  },
  set firstName(newFirstName) {
    if (typeof newFirstName !== 'string') {
      this._firstName = 'undefined name';

      return;
    }  
    
    this._firstName = newFirstName;
  },
    // setter로 걸러줌 **
  get fullName() {
    return (
      this._firstName +
      ' ' +
      this.lastName +
      '입니다.'
    );
  }, // get으로 한번 더 만들어줌 (속성 접근자)**
}


console.log(person.fullName); // UNDEFINED NAME


// >> 인스턴스
const me = {
  name : 'doy',
  age : 10,
  location : 'Seoul',
}
const me2 = {
  name : 'doy',
  age : 10,
  location : 'Seoul',
}

console.log(me === me2); // false
console.log(me.name === me2.name); // true


const you = {
  name : 'jiho',
  age : 20,
  location : 'USA',
}

console.log(me === you); // false -> 당연히 값이 다르기 때문
// 인스턴스 : 고유한 하나의 객체 - 특정 메모리에 공간을 차지하고 있는 것
// 하나하나 고유의 인스턴스 !
// 싱글 리터럴, 생성자 함수로 만드는 것도 하나의 인스턴스 


// >> 생성자
function Person(name, age, location) {
  this.name = name;
  this.age = age;
  this.location = location;
  // 생성될 인스턴스 = this 

  this.getName = function () {
    return this.name + '입니다.';
  }
}

const me1 = new Person('doy', 10, 'Seoul');
const you1 = new Person('jiho', 11, 'USA');
console.log(me1);
console.log(you1);
// 잘 만들어짐

console.log(me1.getName()); // name이 me1에서는 doy
console.log(you1.getName()); // name이 you1에서는 jiho
// 따라서 각자의 고유한 속성들을 보여주고 있다.








