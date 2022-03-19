/*
>> Date
표준 built-in객체로써 날짜와 시간을 위한 속성값과 ㅁ서드를 제공하는 객체
Date 객체는 1970년 1월 1일 UTC (혐정 세계시) 자정과의 시간 차이를 밀리초로 나타내는 정수 값으로 표현

> 갱성자 및 대표 메서드 
1) Date 객체 생성자 : new Date()
2) 현재 시간 기준 문자열 : Date()
3) 날짜 정보 얻기 (년 / 월 / 일) : Date.getFullYear(), Date.getMonth(), Date.getDate()
4) 날짜 정보 얻기 (시 / 분 / 초 / ms) : Date.getHours(), Date.getMinutes(), Date.getSeconds()
5) 날짜 정보 설정 (년 / 월 / 일) : Date.serFullYear(), Date.setMonth(), Date.setDate()
6) 날짜 정보 설정 (시 / 분 / 초 / ms) : Date.setHours(), Date.setMinutes(), Date.setSeconds()
7) 그 외 날짜 정보 얻기 : Date.getDay(), Date.getTime(), Date.getTimezoneOffset()
8) 그 외 날짜 정보 설정 : Date.parse(string)
*/

// > Date 생성자 (1)
// Month 값 범위는 1월(0) ~ 12월(11)
let date_now = new Date();
let date_now_str = Date();

console.log(date_now);
console.log(date_now_str);

console.log(typeof date_now); // object
console.log(typeof date_now_str); // string

// 2) Ms
let date_ms_1 = new Date(0);
let date_ms_2 = new Date(24 * 3600 * 1000); // 24 * 3600 * 1000 --> 하루 더 추가 하려면.. !
console.log(date_ms_1);
console.log(date_ms_2);
// 3) 문자열 형태
let date_str = new Date("2020-01-01");
console.log(date_str);
// 4) 하나하나 parameter 설정
let date_params_1 = new Date(2021, 0, 1); // 1월은 0이다. --> UCT 때문에 그럼 한국은 UTC+9
let date_params_2 = new Date(Date.UTC(2021, 0, 1, 6, 12, 18, 24));
let date_params_3 = new Date(Date.UTC(2021, 0, 1)); // 보정 가능
console.log(date_params_1);
console.log(date_params_2);
console.log(date_params_3);

// > Date 생성자 (2)
// 날짜 정보 얻기
let date = new Date();
console.log(date);

console.log(date.getFullYear());
console.log(date.getMonth());
// 일요일(0) ~ 토요일(6)
console.log(date.getDay());

console.log(date.getHours());
console.log(date.getUTCHours());

console.log(date.getTime());
console.log(date.getTimezoneOffset());

// 날짜 정보 설정
let date1 = new Date();
console.log(date1);

let ms_year = date1.setFullYear(2020, 3, 15);
console.log(date1);
console.log(new Date(ms_year));

date1.setDate(1);
console.log(date1);
date1.setDate(0); // 이전 달의 마지막날
console.log(date1);

date1.setHours(date1.getHours() + 2);
console.log(date1);

// > parse
// 문자열 기반 날짜 정보 설정 : Date.parse(YYYY-MM-DDTHH:mm:ss:sssZ)
// T : 구분기호, Z : 옵션 -> 미설정시, 현재 로컬 기준 UTC로, 설정할 경우 UTC+0 기준으로 시간 설정
let ms_parse = Date.parse("2020-03-31T00:00:00.000"); // ms가 반환된다.
console.log(ms_parse);
console.log(new Date(ms_parse)); // 새로운 객체 생성
console.log(new Date(Date.parse("2020-03-31T00:00:00.000Z"))); // UTC보정을 한 상태

// > benchmark
// 성능 측정 : 벤치마크 측정 대상 함수 전후로 시간을 비교하여 알고리즘 성능 측정
function dateSub(old_date, new_date) {
  return new_date - old_date;
} // #1 (그냥 바로 마이너스 해줌)
function getTimeSub(old_date, new_date) {
  return new_date.getTime() - old_date.getTime();
} // #2 (ms로 변환후에 마이너스를 하는 것)
// ==> #1, #2에 대한 비교

function benchmark(callback_func) {
  // 콜백함수는 각각의 함수를 받아준다.
  let date_1 = new Date("2020-01-01"); // 임의의 날짜를 하나 넣어줌
  let date_2 = new Date(); // 현재 날짜 기준으로 생성

  let start = Date.now(); // 현재시간 저장
  for (let i = 0; i < 100000; i++) {
    // for loop을 통해서 수행
    // 10만번 수행해줌
    callback_func(date_1, date_2);
  }
  return Date.now() - start;
}
console.log("dataSub : " + benchmark(dateSub) + "ms");
console.log("getTime : " + benchmark(getTimeSub) + "ms");
/*
dataSub : 25ms
getTime : 3ms
 */
