/**
 * > String
 *
 * 1) 텍스트 길이에 상관없이 문자열 형태로 저장되는 자료형
 * 2) 자바스크립트에서는 글자 하나만 저장할 수 있는 char 자료형이 없음.
 * 3) 자바스크립트에서 문자열은 페이지 인코딩 방식과 산관없이 항상 UTF-16 형식을 따름.
 *
 * > 대표 속성과 메서드
 *  [대표 속성]
 * 1) 문자열 길이 : String.length
 *
 *  [메서드]
 * 2) 문자열 접근 : String.charAt(index), String.charCodeAt(index)
 * 3) 문자열 검색 : String.indexOf(), String.lastIndexOf(), String.includes(),
 *                 String.startsWith() 등
 * 4) 문자열 변환 : String.toUpperCase(), String.toLowerCase()
 * 5) 문자열 치환 : String.repalce()
 * 6) 문자열 추출 : String.slice(), Srting.substring(), String.substr()
 * 7) 문자열 분할 : String.split()
 *
 * > 문자 정의 / 표기
 * 1) string 정의 방법 : "", '', String()
 * 2) 문자열과 변수 혼합 표현방법 : ``(역따옴표 = 백틱)
 * 3) 문자표기 방법 : Line feed(\n), Carriage return(\r), Backslash(\\), Tab(\t),
 *                   Unicode(\u{})
 */

console.log("line\nfeed");
console.log("carri\rage"); // 개행
console.log("back\\slash"); // back\slash
console.log("ta\tbbbbb"); // ta	bbbbb
console.log("\u{1F60B}"); // 😋

// [대표 속성]
let str = "hello\nworld\nnice world\n111";

console.log(str);
console.log(str.length); // 26 (개행까지 포함)
console.log();

// [메서드] : 문자열 접근
let strr = "hello nice world !!!";

console.log(strr.charAt(1)); // e --> 2번째 문자
console.log(strr.charCodeAt(1)); // 101 --> 그 코드값
console.log(strr[1]); // e --> 2번째 문자 charAt 이랑 같음.

let str_1 = "hello nice world !!!";

console.log(str_1.indexOf("l")); // 2
console.log(str_1.indexOf("l", 3)); // 3 --> 3번쨰 부터 탐색을 해라
console.log(str_1.lastIndexOf("l"));

console.log(str_1.includes("hello")); // 대소문자 구분한다. : 전체에서 있는지 판단.
console.log(str_1.startsWith("ello")); // 무조건 ello로 시작하는지 판단.
console.log(str_1.startsWith("ello", 1)); // 1번째부터 찾아라.
console.log(str_1.endsWith("!!!")); // 끝에 !!!가 오는지 판단.
console.log(str_1.endsWith("world")); // 끝은 world가 아니다.

// 문자열 변환
let text = "HeLlo!!";

console.log(text.toUpperCase()); // 전부 대문자
console.log(text.toLowerCase()); // 전부 소문자

// 문자열 치환
let text_1 = "heLlo, world!!!";
let changed_text_1 = ""; // 변수 따로 선언

changed_text_1 = text_1.replace("world", "earth"); // (바꾸고 싶은 문자, 바꿀 문자)
console.log(changed_text_1);

console.log(text_1.replace("!", "?"));
console.log(text_1.replace(/l/g, "i")); //  /l/g는 정규표현식 --> 전부 찾아서 바꿔줌
console.log(text_1.replace(/l/gi, "i")); // gi는 대소문자 구분없이 전부 바꿔주는 것
// 코테에서는 정규표현식이 잘 허용안됨

// 문자열 추출
let text_2 = "hello, world !";

console.log(text_2.slice(0, 5));
console.log(text_2.slice(4));
console.log(text_2.slice(-4));

console.log(text_2.substring(2, 6));
console.log(text_2.substring(6, 2));
console.log(text_2.slice(2, 6));
console.log(text_2.slice(6, 2)); // 값 안나옴
// slice는 내부적으로 변환이 안됨, 그러나 substring은 내부변환이 된다.
// 보통은 slice씀

console.log(text_2.substr(2, 6));
console.log(text_2.substr(-5, 3));

// 문자열 분할
let fruits = "apple banana melon";
result = fruits.split(" ");
console.log(result);
console.log(result[0]);
console.log(result[1]);
console.log(result[2]);

// 문자 하나하나 자르기
let cherry = "hello cherry";
result = cherry.split("", 3); // (나눌방법, 제한: 몇 개 보여줄껀지)
console.log(result);
