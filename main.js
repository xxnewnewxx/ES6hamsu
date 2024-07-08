//모든 문제에는 다음 배열이 쓰입니다.

let names = [
  "Steven Paul Jobs",
  "Bill Gates",
  "Mark Elliot Zuckerberg",
  "Elon Musk",
  "Jeff Bezos",
  "Warren Edward Buffett",
  "Larry Page",
  "Larry Ellison",
  "Tim Cook",
  "Lloyd Blankfein",
];

// 1. map 문제
// 모든 이름을 대문자로 바꾸어서 출력하시오.
// 성을제외한 이름만 출력하시오. (예-[“Steven”,“Bill”,“Mark”,“Elon”…])
// 이름의 이니셜만 출력하시오. (예-[“SPU”,“BG”,“MEZ”,“EM”…])

let dea = names.map((item) => {
  return item.toUpperCase();
});
console.log(`문제 1번 이름을 대문자로 출력하세요.`);
console.log(dea);

let twoCase = names.map((item) => {
  return item.split(" ")[0];
});
console.log(`문제 1번 성을제외한 이름만 출력하세요.`);
console.log(twoCase);

let initialOnly = names.map((item) => {
  let splitName = item.split(" "); // 배열의 있는 문자를 기준을 정해주고 자른다.
  let initial = ""; //initial를 선언후 값을 비워놓는다.
  splitName.forEach((nameItem) => (initial += nameItem[0])); //splitName에 forEanh를 사용해 initialdp 자른 배열에 0번째 인덱스의 문자를 추가한다.
  return initial; //추가된 값을 return 시키면 이니셜만 나온다.
});
console.log(`문제 1번 이름의 이니셜만 출력하세요`);
console.log("이니셜 : ", initialOnly);

// 2번 filter 문제
// 이름에 a를 포함한 사람들을 출력하시오.
// 이름에 같은 글자가 연속해서 들어간 사람을 출력하시오. (예-tt,ff,ll 이런 글자들)

let name_a = names.filter((item) => {
  return item.includes("a");
});
console.log(`문제 2번 이름에 a만 들어간 사람을 출력하세요`);
console.log("a포함 : ", name_a);

let doubleLetter = names.filter((item) => {
  let splitName = item.split(""); //한글자 한글자 씩 자른다.
  return splitName.some((letter, index) => letter == splitName[index + 1]); // letter에 한글자 씩 넣어서 비교하고 같은 글자가 있으면 true를 반환 한다. 그리고. filter는 값이 나온 아이템을 새로운 배열안에 저장을 하게된다.
});

console.log(`문제 2번 이름에 연속된 스펠링이 들어간 사람을 출력하세요`);
console.log("연속글자 : ", doubleLetter);

// 3번 some 문제
// 전체 이름의 길이가 20자 이상인 사람이 있는가?
// 성을 제외한 이름에 p를 포함한 사람이 있는가?(대소문자 상관 no)
let someName = names.some((item) => {
  return item.length > 20;
});

console.log(`문제 3번 전체 이름의 길이가 20개 이상인 사람이 있나요?`);
console.log("정답 : ", someName);

let pName = names.some((item) => {
  // 성을 제외한 이름 부분만 검사
  let nameParts = item.split(" ");
  let firstNameAndMiddleName = nameParts.slice(0, -1).join(" ").toLowerCase(); // 성 제외, 소문자로 변환
  return firstNameAndMiddleName.includes("p");
});

console.log(`문제 3번 성을 제외한 이름에 p를 포함한 사람이 있는가?`);
console.log("정답 : ", pName);

// every 문제
// 모두의 전체 이름의 길이가 20자 이상인가?
// 모두의 이름에 a 가 포함되어 있는가?

let everyName = names.every((item) => {
  return item.length > 20;
});
console.log(`문제 4번 모두의 전체 이름의 길이가 20자 이상인가?`);
console.log("정답 : ", everyName);

let everyName_a = names.every((item) => {
  return item.includes("a");
});
console.log(`문제 4번 모두의 이름에 a 가 포함되어 있는가?`);
console.log("정답 : ", everyName_a);

// find 문제
// 전체 이름의 길이가 20자 이상인 사람을 찾으시오.
// 미들네임이 포함되어있는 사람을 찾으시오.(예-Steven Paul Jobs)

let find_name = names.find((item) => {
  return item.length > 20;
});
console.log(`문제 5번 전체 이름의 길이가 20자 이상인 사람을 찾으시오.`);
console.log("정답 : ", find_name);

let middle_name = names.find((item) => item.split(" ").length > 2);
console.log(`문제 5번 미들네임이 포함되어있는 사람을 찾으시오`);
console.log(middle_name);

// findIndex 문제
// 전체 이름의 길이가 20자 이상인 사람의 인덱스 번호를 찾으시오.
// 미들네임이 포함되어있는 사람의 인덱스 번호를 찾으시오.

let overname = names.findIndex((item) => {
  return item.length > 20;
});
console.log(
  `문제 6번 전체 이름의 길이가 20자 이상인 사람의 인덱스 번호를 찾으시오.`
);
console.log(overname);

let middle_find = names.findIndex((item) => item.split(" ").length > 2);
console.log(`문제 6번 미들네임이 포함되어있는 사람의 인덱스 번호를 찾으시오.`);
console.log(middle_find);
