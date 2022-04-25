// 스택 구현 (1)

// Stack() : 생성자 함수로 초기 데이터 설정
function Stack(array) {
  this.array = array ? array : [];
  // array에 연산자가 없으면 3항연산자를 통해 빈 array를 반환해준다.
}

// getBuffer() : 객체 내 데이터 셋 변환
Stack.prototype.getBuffer = function () {
  return this.array.slice();
  // 이 메서드가 하는 일은 array를 복사를 해서 반환을 해주는 것이다.
  // slice를 통해 복사. = 매개변수를 넣지 않았을때 배열 내 모든 값을 복사해서 반환시켜준다.
  // ===> Stack은 대부분 배열 내 메서드를 활용해서 구현한다.
}

// isEmpty() : 객체 내 데이터 존재 여부 파악 ( O / X )
Stack.prototype.isEmpty = function () {
  return this.array.length == 0;
  // length가 0 이면 ==> 데이터가 존재하지 않음. (isEmpty는 비어있다는 뜻이므로 length가 0 이어야 한다.)
  // length가 0 이 아니면 ==> 데이터가 존재한다.
}

let stack = new Stack([1, 2, 3]); // 잘 동작하는지 확인

console.log(stack);

let data = stack.getBuffer(); // stack을 복사하기 - data로 받아서 data를 출력
console.log(data === stack.array); // ==> false (복사한 값이기 때문에)
// 일치 연산자를 통해 위의 stack이랑 복사한 data 값이랑 일치하는지 본다.
console.log(data);

console.log(stack.isEmpty()); // ==> false (현재 값이 있기 때문)

console.log(Object.getOwnPropertyDescriptors(Stack.prototype));
// 객제가 내부적으로 어떻게 이뤄졌는지 볼때 쓰이는 메서드 : getOwnPropertyDescriptors

//---------------------------------------------------------------------------------------------------

// 스택 구현 (2)

// 초기값 설정
function Stack(array) {
  this.array = array ? array : [];
};

// stack은 값이 맨 위에서 쌓이고 맨 위에서 빠짐 = 배열의 push, pop과 유사함
// push, pop을 이용해서 wrapping 함

// push() : 데이터 추가
Stack.prototype.push = function (element) {
  return this.array.push(element);
};

// pop() : 데이터 삭제
Stack.prototype.pop = function () {
  return this.array.pop();
  // array에서 pop 메서드는 배열의 끝쪽에서 값을 삭제함과 동시에 그 값을 반환해줬음
  // ==> 여기서도 동일
};

// peek() : 가장 끝 데이터 반환
Stack.prototype.peek = function () {
  return this.array[this.array.length - 1];
  // 데이터 삭제 없이 반환해줌
};

// size() : 스택 내 데이터 개수 확인
Stack.prototype.size = function () {
  return this.array.length;
};

let stack1 = new Stack([1, 2]);

console.log(stack1); // Stack { array: [ 1, 2 ] }
stack1.push(3);
console.log(stack1); // Stack { array: [ 1, 2, 3 ] }

console.log(stack1.pop()); //3
console.log(stack1.pop()); // 2
console.log(stack1.peek()); // 1
console.log(stack1.size()); // 1


// ====> 알고리즘 풀이에 있어서 좋은 성능을 낼 수 있어서 stack을 많이 이용한다.
//---------------------------------------------------------------------------------------------------

// 스택 구현 (3)

// 초기값 설정
function Stack(array) {
  this.array = array ? array : [];
};

// indexOf() : 데이터 위치 값 조회 /  매개변수로 넘어온 element의 위치 확인
Stack.prototype.indexOf = function (element, position = 0) {
  // ** case 1 
  // return this.array.indexOf(element, position);
  // ** case 2
  for (let i = position; i < this.array.length; i++) {
    if (element === this.array[i]) return i;
  } 

  return -1; // --> for 문 다 돌때까지 찾지 못하면

  // 반복문을 통해 element가 0 번째 부터 this.array.length까지 순회하도록 만듬
  // ==> position 값부터 찾고싶다 하면 i 대신에 position 값을 넣으면 된다.
};

// includes() : 데이터 존재 여부 확인 ===> element 값을 넘겼을때, 여기에 값이 있는지 없는지 판단해준다.
Stack.prototype.includes = function (element) {
  // ** case 1
  // return this.array.includes(element, position);
  // ** case 2
  for (let i = 0; i < this.array.length; i++) {
    if (element == this.array[i]) return true;
  }

  return false; // --> for 문 다 돌때까지 찾지 못하면

  // 반복문을 통해 element가 0 번째 부터 this.array.length까지 순회하도록 만듬
  // ==> position 값부터 찾고싶다 하면 i 대신에 position 값을 넣으면 된다.

};

let stack2 = new Stack([1, 2, 3]);

console.log(stack2.indexOf(1)); // 0
console.log(stack2.indexOf(1, 2)); // -1
console.log(stack2.includes(1)); // true 
console.log(stack2.includes(1, 2)); // true