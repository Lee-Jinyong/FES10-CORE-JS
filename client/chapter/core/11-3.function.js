/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// 함수 선언 → 화살표 함수 (표현)식
let calcAllMoney = (...rest) => {

  let total = 0;

  // for 문
  // for(let i=0; i<rest.length; i++) {
  //   total += rest[i];
  // }

  // for of 문
  // for(let value of rest) {
  //   total += value;
  // }

  // forEach 
  // rest.forEach(function(item) {
  //   total += item;
  // });
  
  // forEach => arrow function
  // rest.forEach(item => total += item);

  // reduce
  // const result = rest.reduce(function(acc, cur) {
  //   return acc + cur
  // }, 0)
  
  // reduce => arrow function
  return rest.reduce((acc, cur) => acc + cur, 0);

  // return total;
};

// 위의 함수를 줄인 코드
// const calc = (...rest) => rest.reduce((acc, cur) => acc + cur, 0);

const result = calcAllMoney(1000, 5000, 4500, 13000);

console.log(result);

// 화살표 함수와 this

// 자바스크립트의 함수는 두 가지 호출 방식이 있다
// 일반 함수(normal function) 호출
// 생성자 함수(constructor function) 호출 >> 객체로 리턴 >> 보통 객체를 대량 생산하기 위해 사용함
// new String(), new Number(), new Object(), ...

// 위의 두 가지 호출 방식을 구분하기 위해서 생성자로 사용되는 함수는 이름 가장 앞을 대문자로 표시
function button(text) {
  return text;
}

function Button(text) {
  this.content = text;
  //content라는 키에 text 값을 가진 객체를 반환
}

// 일반 함수 호출
const a = button('more');

// 생성자 함수 호출
const b = new Button('more');


// 객체의 메서드를 정의할 때

// 일반 함수
// - constructor 내장
// - this : 나를 호출한 대상을 this
// - 객체의 메서드로 사용이 많이 됨 >> this를 찾기 위해

// 화살표 함수
// - constructor 내장 X
// - this : 바인딩 하지 않음 >> 그래서 this를 상위 컨텍스트에서 찾음
// - method 안의 함수를 작성해야 할 때 >> 내 상위 this를 가져오기 때문에

// concise method
// - constructor 내장 X
// - this : 나를 호출한 대상을 this
// - 객체의 메서드로 사용이 많이 됨 >> this를 찾기 위해

const method = {
  sayHi: function() {
    console.log(this);
  },
  sayHi2: () => {
    console.log(this);
  },
  sayHi3() {
    console.log(this);
  }
}

const user = {
  name: 'tiger',
  total: 0,
  grades: [30, 60, 80],
  totalGrades() {
    this.grades.forEach((item) => {
      this.total += item
    })
    return this.total;
  }
}

user.totalGrades();

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;

// let pow = (numeric, powerCount) => {

//   let result = 1;

//   for(let i=0; i<powerCount; i++) {
//     result *= numeric
//   }

//   return result;
// }

//배열을 사용해서 반복문 만들기
// const pow = (numeric,powerCount) => {
  
//   return Array(powerCount).fill(null).reduce((acc)=>{
//     return acc *= numeric
//   },1)
// }

// 위 함수를 표현식으로 바꾸기
const pow = (numeric, powerCount) => Array(powerCount).fill(null).reduce(acc => acc *= numeric, 1)

console.log(pow(2, 4));


// repeat(text: string, repeatCount: number): string;

// let repeat = (text, repeatCount) => {
//   let result = '';

//   for(let i=0; i<repeatCount; i++) {
//     result += text;
//   }

//   return result;
// };

//배열을 사용해서 반복문 만들기
// const repeat = (text, repeatCount) => {
//   return Array(repeatCount).fill(null).reduce((acc) => {
//     return acc + text;
//   }, '')
// }

// 위 함수를 표현식으로 바꾸기
const repeat = (text, repeatCount) => Array(repeatCount).fill(null).reduce(acc => acc + text, '');

console.log(repeat('안녕', 3)); // '안녕안녕안녕'