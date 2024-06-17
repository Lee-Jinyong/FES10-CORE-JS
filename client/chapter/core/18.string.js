/* -------------------- */
/* String Type          */
/* -------------------- */

let message = 'Less is more.';


// length 프로퍼티
let stringTotalLength = message.length;

console.log(stringTotalLength);


// 특정 인덱스의 글자 추출
let extractCharacter = message[5];

console.log('extractCharacter : ', extractCharacter);


// 문자열 중간 글자를 바꾸는 건 불가능 
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter = 'P' + message.slice(1);

console.log('immutableChangeCharacter : ', immutableChangeCharacter);

// enumerable : 열거 가능한
// iterable : 반복 가능한
// immutable : 불변의
// mutable : 변경 가능한
// mutant : 돌연변이


// 부분 문자열 추출
console.log('message : ', message);

let slice = message.slice(4, -1);
console.log('slice : ', slice);

let subString = message.substring(2, 5);
console.log('subString : ', subString);

let subStr = message.substr(2, 5);
console.log('subStr : ', subStr);


// 문자열 포함 여부 확인
let indexOf = message.indexOf('hi');
console.log('indexOf : ', indexOf);

// indexOf를 사용해서 현재 브라우저 확인 방법
// console.log(window.navigator.userAgent.toLowerCase());
// console.log(window.navigator.userAgent.toLowerCase().indexOf('chrome'));
// console.log(window.navigator.userAgent.toLowerCase().indexOf('firefox'));
// console.log(window.navigator.userAgent.toLowerCase().indexOf('edge'));

// 브라우저 확인 함수
function checkBrowser() {

  const agent = window.navigator.userAgent.toLowerCase();

  let browserName;

  switch(true) {
    case agent.indexOf('deg') > -1 :
      browserName = 'MS Edge'
    break;
    case agent.indexOf('chrome') > -1 && !!window.chrome :
      browserName = 'Chrome'
    break;
    case agent.indexOf('safari') > -1 :
      browserName = 'Safari'
    break;
    case agent.indexOf('firefox') > -1 :
      browserName = 'Firefox'
    break;
    case agent.indexOf('trident') > -1 :
      browserName = 'IE'
    break;
  }

  return browserName;
}

console.log(checkBrowser());


let lastIndexOf = message.lastIndexOf('s');
console.log('lastIndexOf : ', lastIndexOf);

let includes = message.includes('Less');
console.log('includes : ', includes);

let startsWith = message.startsWith('less');
console.log('startsWith : ', startsWith);

let endsWith = message.endsWith('more.');
console.log('endsWith : ', endsWith);


let str = '     a     b     c          d     ';
// 공백 잘라내기
let trimStart = str.trimStart(); // 왼쪽 공백 삭제
console.log('trimStart : ', trimStart);

let trimRight = str.trimEnd(); // 오른쪽 공백 삭제
console.log('trimRight : ', trimRight);

let trim = str.trim(); // 좌우 공백 삭제
console.log('trim : ', trim);

const replaceAll = str.replaceAll(' ', ''); // 첫번째 인수의 값을 두번째 인수의 값으로 변경
console.log('replaceAll : ', replaceAll);

const replace = str.replace(/\s*/g, ''); // 정규 표현식으로 값 변경하기
console.log('replace : ', replace);


const trimText = (string) => string.replace(/\s*/g, '');

console.log('trimText : ', trimText(str));


// 텍스트 반복
let repeat = message.repeat(3);
console.log('repeat : ', repeat);


// 대소문자 변환
let toLowerCase = message.toLowerCase();
console.log('toLowerCase : ', toLowerCase);

let toUpperCase = message.toUpperCase();
console.log('toUpperCase : ', toUpperCase);


// 텍스트 이름 변환 유틸리티 함수
function toCamelCase(string) {
  return string.replace(/(\s|-|_)+./g, ($1) => $1.trim().replace(/(-|_)+/, '').toUpperCase())
}
console.log('toCamelCase : ', toCamelCase('ease-in-out-bounce'));
console.log('toCamelCase : ', toCamelCase('ease in out bounce'));
console.log('toCamelCase : ', toCamelCase('ease_in_out_bounce'));

function toPascalCase(string) {
  let name = toCamelCase(string);
  return name[0].toUpperCase() + name.slice(1);
}
console.log('toPascalCase : ', toPascalCase('ease_in_out_bounce'));