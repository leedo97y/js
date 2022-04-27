/*
  동생에게 전달해준 서류를 순서대로 서랍에 정리해 달라고 부탁했더니, 서류를 반대 순서로 넣어두었다. 
  다시 제대로 정렬하기 위해, 이미 정리된 순서의 반대로 서류를 역 정렬시키는 프로그램을 제작하시오.
  만약 서류가 1 -> 2 -> 3 순서로 들어가 있다면 3 -> 2 -> 1 으로 역 정렬시켜야 한다.
  입력은 동생의 가공을 통해 역 정렬된 서류가 저장되어 있는 Linked List 객체가 주어지며, 
  포인트 조작을 통해 파일의 순서만 변경하여 Linked List 객체를 반환한다.
*/


/* user code */
function File(number) {
  this.number = number;
  this.next = null;
}

function LinkedList() {
  this.head = null;
}

function answer(ll) {
  // 코드 구현 시작 영역

  // …

  // 코드 구현 종료 영역

  return ll;
}

/* main code */
let input = [
  // TC: 1
  [7, 3, 1],

  // TC: 2
  [4, 6, 9, 1, 3],

  // TC: 3
  [3, 4, 1, 2, 7, 9, 6],
];

LinkedList.prototype.printNode = function () {
  for (let node = this.head; node != null; node = node.next) {
    process.stdout.write(`${node.number} -> `);
  }
  console.log("null");
};

LinkedList.prototype.makeFiles = function (files) {
  let current = this.head;
  let node;
  for (let i = 0; i < files.length; i++) {
    node = new File(files[i]);
    node.next = current;
    this.head = node;

    current = node;
  }
};

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);

  let ll = new LinkedList();
  ll.makeFiles(input[i]);
  answer(ll).printNode();
}
