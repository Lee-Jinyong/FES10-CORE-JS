/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */


function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function() {

  // 함수 안에서만 접근 가능한 인수들의 집학 객체로서 배열과 유사하여 유사배열이라 불리는 변수

  let total = 0;

  // for 문
  // for(let i=0; i<arguments.length; i++) {
  //   total += arguments[i];
  // }

  // for of 문
  // for(let value of arguments) {
  //   total += value;
  // }

  // arguments => array => forEach
  console.log(arguments);
  const arr = [...arguments];
  // const arr = Array.from(arguments);
  // const arr = Array.prototype.slice.call(arguments);

  // arr.forEach(function(price) {
  //   //console.log(item);
  //   total += price;
  // })

  // forEach => arrow function
  // arr.forEach(price => total += price)

  //reduce
  // const result = arr.reduce(function(acc, cur) {
  //     return acc + cur
  // }, 0)

  //reduce => arrow function
  // const result = arr.reduce((acc, cur) => acc + cur, 0)

  // return result;

  // call로 메서드 빌려쓰기
  // Array.prototype.forEach.call(arguments, function(item) {
  //   total += item;
  // })

  //태생을 배열로 바꾸기
  arguments.__proto__ = Array.prototype;
  total = arguments.reduce((acc, cur) => acc + cur, 0);

  return total;
};

// let calculateTotal2 = (arr) => arr.reduce((acc, cur) => acc + cur, 0);

const result = calculateTotal(1000, 5000, 2500, 4000, 2300);

console.log(result);

//forEach => 배열 순환, 값 반환 X
//reduce  => 배열 순환, 값 반환 O (숫자, 문자, 배열, 객체 형태로 반환 가능)
//map     => 배열 순환, 값 반환 O (only 배열만 반환)
//filter  => 배열 순환, 값 반환 O (only 배열만 반환)

const arr = [10, 100, 1000];

const mapValue = arr.map(function(item) {
  return item * 2;
})

console.log(mapValue)

// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function() {};


// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello() {};


// 콜백 함수 (표현)식 => callbackFunctionExpressio
let cb = function(isActive, success, fail) {
  if(isActive) {
    success();
  } else {
    fail();
  }
};

cb(false,
  function() {
    console.log('성공입니다!');
  },
  function() {
    console.log('실패입니다..');

  }
)


function movePage(url, success, fail) {
  if(url.includes('https')) {
    success(url);
  } else {
    fail();
  }
}

movePage(
  'https://www.naver.com',
  function(url) {
    console.log(`현재 입력하신 url은 ${url} 입니다. 3초 뒤 해당 사이트로 이동합니다.`);

    // location.href = url
  },
  function() {
    console.log('잘못된 url을 입력했습니다.');
  }
)


// higher-order function 고차함수

function map(arr, func) {

  let result = [];

  for(let i=0; i<arr.length; i++) {
    result.push(func(arr[i]));
  }

  return result;
}

// map([1, 2, 3], (item) => item * 2);


// 함수를 인수로 받아 처리함
// 함수를 리턴함

function greater(n) {
  return function(m) {
    return n > m;
  }
}

const g = (n) => (m) => n > m;



// 함수 선언문 vs. 함수 (표현)식


// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
let IIFE;

// 함수가 선엄됨과 동시에 실행되는 것을 말합니다.

// var는 블록 스코프 : X
// var는 함수 스코프 : O
// encapsulation (캡슐화) => 함수 내부에 변수를 묶어두기 위해서 사용한 것이 처음의 목적
// 혹은 변수를 지키기 위해 캡슐화를 한다

// 최근에는 잘 사용하지 않는다(모듈 프로그래밍 때문에)
// 모듈 프로그래밍 => (import, export)

// 즉시실행함수도 매개변수를 받을 수 있다 => 아래 예시에서는 window가 tiger로 rename되어 사용된다

const MASTER = (function (tiger){

  let uuid = 'azxcqwASFqjKJ112314!23';
  
  return {
    getKey(){
      return uuid;
    },
    setKey(value){
      uuid = value;
    }
  }

})(window)


// 캡슐화를 통해 접근을 제한할 수도 있다

const css = (function() {
  function setStyle(node, prop, value) {

    if(typeof node === 'string') node = document.querySelector(node);
  
    if(typeof prop !== 'string') throw new Error('setStyle 함수의 두 번째 인수는 문자 타입 이어야 합니다.');
    
    if(!value) throw new Error('setStyle 함수의 세 번째 인수는 필수값 입니다.');
  
    node.style[prop] = value;
  }
  
  function getStyle(node, prop) {
  
    if(typeof node === 'string') if(typeof node === 'string') node = document.querySelector(node);
  
    if(typeof prop !== 'string') throw new Error('getStyle 함수의 두 번째 인수는 문자 타입 이어야 합니다.');
  
    return getComputedStyle(node)[prop];
  }
  
  function css(node, prop, value) {
  
    return !value ? getStyle(node, prop) : setStyle(node, prop, value);
  }

  return css
})();

// css();