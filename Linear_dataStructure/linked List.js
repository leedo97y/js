/* >> 연결리스트 
  각 노드가 데이터와 포인터를 가지며, 한 줄로 연결되어 있는 방식으로 데이터를 저장하는 자료구조
  
  어떤 Node부터 시작할지를 정해야 Node간의 연관 관계를 따라가며 끝지점까지 갈 수 있음 
  
  Head : 시작 지점 (시작 Node)
  pointer : 화살표
  null : 끝지점

        * Node
  |  data  |  next | ->
  
  - 구현 메서드 
  1) 노드 개수 / 비어있는지 확인 / 노드 출력 : LinkedList.size(), LinkedList.isEmpty(), LinkedList.printNode()
  2) 노드 추가 : LinkedList.append(), LinkedList.insert()
  3) 노드 삭제 : LinkedList.remove(), LinkedList.remoteAt()
  4) 데이터 위치 확인 : LinkedList.indexOf()
 */

