/* 4. 요일 구하기 */

/* user code */
function answer(str) {
  let week = new Array(
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일"
  );
  let day;

  let date = new Date(str); // str을 기준으로 날짜로 변환
  let day_num = date.getDay(); // 날짜로 변환한걸 요일 나타내주는 함수 이용해서 숫자 변환
  day = week[day_num]; // 숫자로 변환된 요일을 미리 만들어둔 배열을 통해 문자로 표현

  // 1. Date : date라는 변수를 만들어서 new Date라는 객체를 만들어서 변환.
  // -> 만들어둔 값을 기준으로 하려면 str을 넣어준다.
  // 2. getDay() : 요일은 getDay라는 함수를 통해 구할 수 있음 (요일이 숫자로 나옴)
  // -> number 값을 문자로 반환하기 **
  // 1) switch 케이스 (-> 난잡해짐)
  // 2) 배열을 미리 만들어 주기 (-> 추천 **)
  // ==> getDay()로 얻은 값을 미리 만들어둔 배열 객체를 통해 넣어주게 된다면
  // ==> 효율성 측면에서도 good !

  // ** 어떤 함수가 있고, 어떤 메서드가 있는지 숙지 하는것이 중요 !!

  return day;
}

/* main code */
let input = [
  // TC: 1
  "2021-01-27",
  // TC: 2
  "2021-02-27",
  // TC: 3
  "2021-03-14",
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
