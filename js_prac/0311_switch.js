switch (ch) {
  case 1:
    statements;
    break;
  case 2:
    statements;
    break;
  case 3:
    statements;
    break;

} // 형식이 이렇다는 것 !



// 예제 1 : 요일 판단 예제
let day_number = 1;
let day = "";

switch (day_number) {
  case 0:
    day = "Sunday"; 
    break;
  case 1:
    day = "Monday"; // 저장
    break; // break 로 빠져나옴
  case 2:
    day = "Tuesday"; 
    break;
  case 3:
    day = "Wednesday"; 
    break;
  case 4:
    day = "Thurday"; 
    break;  
  case 5:
    day = "Friday"; 
    break; 
  case 6:
    day = "Saturday"; 
    break;
  default:
    day = "error"; 
    break;  
}

console.log(day); // Monday


// 예제 2 : 브라우저 지원 여부에 관한 예제
let browser = "Chrome";

switch (browser) {
  case "Explorer":
    msg = "ActiveX installation required.";
    break;
  case "Chrome":
  case "Firefox":
  case "Safari":
  case "Opera":
    msg = "Supported browsers!"; // 변경최소화 때문에 한번에 작성
    break;
    
  default:
    msg = "Unsupported browsers!";
    break;

}

console.log(msg); // Supported browsers!