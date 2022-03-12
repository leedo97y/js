// break : 이제 그만 수행
let text = "";

for (let i = 0; i < 10; i++) {
  if (i === 3) break;
  text = text + i;
}

console.log(text);
// output : 012 -> 원래는 0~9 까지 다 나옴
// break는 if 조건문인 i = 3 부터 뒤를 다 날리는 것 


// continue : 이거만 빼고 계속 수행
text = "";

for (let i = 0; i < 10; i++) {
  if (i === 3) continue;
  text = text + i;
}

console.log(text);
// output : 012456789 -> 3만 빠짐
// continue는 if 조건문인 i = 3 만 날림 나머지는 다 출력



// >> Label 예제 : 여기서는 end가 레이블
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(i + " * " + j + " = " + i * j);
    break;
  }
}
/* output : 0 * 0 = 0
            1 * 0 = 0
            2 * 0 = 0
*/ 
// break -> 제일 안쪽에 있는 j가 0이 되었을때 코드 종료


// 레이블 설정시 : end
end: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(i + " * " + j + " = " + i * j);
    break end;
  }
}
// output : 0 * 0 = 0
// Label을 end로 설정함으로써 끝까지 돌지 않고 
// 0 * 0 = 0이 값으로 나오자마자 코드가 종료된다.  
// 현업에서도 사용하는걸 권장하지 않음. 
// -> 코드가 더러워짐