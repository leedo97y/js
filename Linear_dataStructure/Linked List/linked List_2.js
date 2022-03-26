/* >> 연결리스트 
각 노드가 데이터와 포인터를 가지며, 한 줄로 연결되어 있는 방식으로 데이터를 저장하는 자료구조

어떤 Node부터 시작할지를 정해야 Node간의 연관 관계를 따라가며 끝지점까지 갈 수 있음 

Head : 시작 지점 (시작 Node)
pointer : 화살표
null : 끝지점

  Node
|  data  |  next | ->

- 구현 메서드 
1) 노드 개수 / 비어있는지 확인 / 노드 출력 : LinkedList.size(), LinkedList.isEmpty(), LinkedList.printNode()
2) 노드 추가 : LinkedList.append(), LinkedList.insert()
3) 노드 삭제 : LinkedList.remove(), LinkedList.remoteAt()
4) 데이터 위치 확인 : LinkedList.indexOf()
*/

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

let ll = new LinkedList();

ll.append(1);
ll.append(10);
ll.append(100);
ll.printNode();

console.log(ll);

ll.head = new Node(123);
ll.length++;
console.log(ll);

ll.head.next = new Node(456);
ll.length++;
console.log(ll);

ll.printNode();
// 연결이 어떻게 되고 있는지 가시적으로 알 수 있음


