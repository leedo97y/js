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


let ll = new LinkedList();

ll.insert(1);
ll.insert(10);
ll.insert(100);
ll.printNode();

ll.insert(2, 1);
ll.insert(3, 3);
ll.printNode();
console.log(ll.size()); 

