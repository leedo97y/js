// Node() : data와 point를 가지고 있는 객체
function Node(data) {
  this.data = data;
  this.next = null;
}

// LinkedList() : head와 length를 가지고 있는 객체
function LinkedList() {
  this.head = null;
  this.length = 0;
}

// size() : 연결 리스트 내 노드 개수 확인
LinkedList.prototype.size = function() {
  return this.length
}

// isEmpty() : 객체 내 노드 존재 여부를 파악할때
LinkedList.prototype.isEmpty = function () {
  return this.length === 0;
  // 메서드 내 일치 비교
} 

// <-------------------------------------!----------------------------------------->

// printNode() : 노드 출력
LinkedList.prototype.printNode = function (){
  for (let node = this.head; node != null; node = node.next) {
    // node를 head로 놓고 node가 null이 아닐때까지 반복하면,
    // node의 next에 새로운 node값을 업데이트하면서 순차 탐색
    process.stdout.write(`${node.data} -> `)
    // process.stdout.write()는 붙어다니며, 내장 함수이다.
    // 이를 이용하면 ()안에 쓰인대로 출력이 된다.
  }
  console.log("null");
}

// append() : 연결 리스트 가장 끝에 노드 추가
LinkedList.prototype.append = function (value) { 
  let node = new Node(value);
  // 새로운 Node 값을 만들고 node라는 변수에 넣어줌
  current = this.head;

  if (this.head === null) {
    this.head = node;
  } else {
    while(current.next != null) {
      current = current.next;
    }
    current.next = node;
  }

  this.length++;
}

//<--------------------------------------------!------------------------------------------->

// insert() : position 위치에 노드 추가 
LinkedList.prototype.insert = function (value, position = 0) {
  // position이 index 역할 한다. 
  // value : 2 , position : 0 ==> 0번째 자리에 2 추가
  if (position < 0 || position > this.length) {
    // position에 이상한 값이 들어오는 것을 방지하기 위해 범위체크를 해준다.
    return false;
  }
  let node = new Node(value),
  current = this.head,
  index = 0,
  prev;

  if (position === 0) {
    node.next = current;
    this.head = node;
  } else {
    while (index++ < position) {
      prev = current;
      current = current.next;
    }

    node.next = current;
    prev.next = node;
  }

  this.length++;

  return true;

}

//<--------------------------------------------!------------------------------------------->

// remove() : value 데이터를 찾아 노드 삭제
LinkedList.prototype.remove = function (value) {
  let current = this.head; // current를 첫 node로 정해준다.
    prev = current; // prev : current로 초기화

  while (current.data != value && current.next != null) {
    // current.data가 value와 같지 않고, current.next가 null이 아니면
    // --> current.next가 null이면 끝지점이라 더 이상 반복되면 안된다.
    // 따라서 그걸 정해주기 위해 and 연산자 써서 나타내줌.
    prev = current; // 이전값
    current = current.next; // current : 이전값이 current여서 current.next = current
  }

  if (current.data != value) {
    return null;
    // 종료하게 만듬
  }

  if (current === this.head) {
    this.head = current.next;
  } else {
    prev.next = current.next;
  }

  this.length--;
  // 삭제이므로 --이다.

  return current.data;
}



//<--------------------------------------------!------------------------------------------->

// removeAt() : position 위치 노드 삭제
LinkedList.prototype.removeAt = function (position = 0) {
  if (position < 0 || position >= this.length) {
    return null;
  }

  let current = this.head,
    index = 0,
    prev;

  if (position == 0) {
    this.head = current.next;
  } else {
    while (index++ < position) {
      prev = current;
      current = current.next;
    }

    prev.next = current.next;
  }

  this.length--;

  return current.data;
}



//<--------------------------------------------!------------------------------------------->


// indexOf() : value 값을 갖는 노드 위치 변경
LinkedList.prototype.indexOf = function (value) {
  let current = this.head,
    index = 0;

  while (current != null) {
    if (current.data === value) {
      return index;
    }

    index++;
    current = current.next;
  }

  return -1; // 없을때 return  
}

// remove2() : indexOf + removeAt = remove
LinkedList.prototype.remove2 = function (value) {
  let index = this.indexOf(value);
  return this.removeAt(index);
}

let ll = new LinkedList();

ll.insert(1);
ll.insert(10);
ll.insert(100);
ll.insert(2, 1);
ll.insert(3, 3);
ll.printNode();

console.log(ll.indexOf(1000)); // -1
console.log(ll.indexOf(1)); // 4
console.log(ll.indexOf(100)); // 0
console.log(ll.indexOf(10)); // 2

console.log(ll.remove2(1000)); // null
ll.printNode(); 
console.log(ll.remove2(1)); // 1
ll.printNode();
console.log(ll.remove2(2)); // 2
ll.printNode();
console.log(ll.remove2(100)); // 100
ll.printNode();
console.log(ll.size()); // 2