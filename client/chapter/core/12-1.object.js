/* --------- */
/* Object    */
/* --------- */

/* global isObject */

/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  position: 'fixed',
  zIndex: 10000,
  top: '50%',
  left: '50%',
  width: '60vw',
  maxWidth: 800,
  height: '40vh',
  minHeight: 280,
  transform: 'translate(-50%, -50%)',
};


// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = null;

authUser = {
  uid: 'user-id-asdf@asdf',
  name: 'tiger',
  email: 'asdf@asdf.com',
  isSignIn: false,
  permission: 'paid' // paid | free
}


// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

console.log(authUser.uid);
console.log(authUser.name);
console.log(authUser.email);
console.log(authUser.isSignIn);
console.log(authUser.permission);


// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고 
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.

console.log(authUser['uid']);
console.log(authUser['name']);
console.log(authUser['email']);
console.log(authUser['isSignIn']);
console.log(authUser['permission']);


Object.prototype.nickName = '호랑이';

// 객체 안에 키가 있는지 확인 방법

// in 문
console.log('uid' in authUser);

for(let key in authUser) {
  if({}.hasOwnProperty.call(authUser, key)) {
    console.log(authUser[key]);
  }
}

// 객체의 key 만을 모아서 배열을 반환하는 메서드 Object.keys()
const keyList = Object.keys(authUser);

console.log(keyList);


// 객체의 value 만을 모아서 배열을 반환하는 메서드 Object.values()
const valueList = Object.values(authUser);

console.log(valueList);

// 객체의 key 만을 모아서 배열을 반환하는 함수
function getPropertiesList(obj) {
  let result = [];

  for(let key in obj) {
    if({}.hasOwnProperty.call(obj, key)) {
      result.push(key);
    }
  }

  return result;
}

console.log(getPropertiesList(authUser)); // ['uid', 'name', 'email', 'isSignIn', 'permission']


// 객체의 value 만을 모아서 배열을 반환하는 함수
function getPropertiesList_value(obj) {
  let result = [];

  for(let key in obj) {
    if({}.hasOwnProperty.call(obj, key)) {
      result.push(obj[key]);
    }
  }

  return result;
}

console.log(getPropertiesList_value(authUser)); // ['user-id-asdf@asdf', 'tiger', 'asdf@asdf.com', false, 'paid']


// 프로퍼티 제거(remove)(자리 비워두기) or 삭제(delete)(메모리까지 삭제)
// 1. 객체가 맞는지 확인

function removeProperty(obj, key) {
  if(isObject(obj)) {
    obj[key] = null;
  }
}

removeProperty(authUser, 'name'); // authUser.name = null;
console.log(authUser.name); // authUser.name = null;


function deleteProperty(obj, key) {
  if(isObject(obj)) {
    delete obj[key];
  }
}

deleteProperty(authUser, 'name'); // undefined
console.log(authUser.name); // undefined



// 계산된 프로퍼티 (computed property)
let calculateProperty = 'phone'; // phone | tel

function createUser(name, age, phone) {
  return {
    name: name,
    age: age,
    [calculateProperty + 'Number']: phone,
  };
}

console.log(createUser('Lee', '15', '010-1234-5678'));


// 프로퍼티 포함 여부 확인


// 프로퍼티 나열


// 프로퍼티 제거 or 삭제 


// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

const student = {
  name,
  email,
  authorization,
  isLogin,
};


// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...


// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}

const a = {};

console.log(isEmptyObject(a)); // true
console.log(isEmptyObject(student)); // false


/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */

const arr = [10, 100, 1000, 10_000];

// 배열의 값이 너무 많이 재사용이 된다면 변수에 넣어서 사용 >> 양이 많아지면 쉽지 않다.
// const a0 = arr[0];
// const a1 = arr[1];
// const a2 = arr[2];
// const a3 = arr[3];

const [a0, a1, a2, a3, a4] = arr; // a0=arr[0], a1=arr[1], a2=arr[2], a3=arr[3]
const [b0, ...rest] = arr; // b0=arr[0], rest=[100, 1000, 10000]

// 단, 구조 분해를 할 때 배열의 순서(order)를 바꿀 수 없다.
// 하지만 변수명은 자유롭게 사용할 수 있다.

// Object.entries >> [[key, value], [key, value], ...] >> for of 문에서 구조분해 가능
for(let [key, value] of Object.entries(authUser)) {
  console.log(key, value);
}


// 유사 배열에도 배열 구조 분해 할당이 가능하다

// const [spanList] = document.querySelectorAll('span');
// const first = spanList[0];
// const second = spanList[1];

const [first, second] = document.querySelectorAll('span');


/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */

const price = {
  apple:10,
  ballon:100,
  cake:1000,
  dog:10_000
}

// const cake = salaries.cake;
// const ballon = salaries.ballon;

const {apple, ballon, cake, dog} = price;

// 구조 분해를 할 때 순서를 고려하지 않아도 된다.
// 하지만 객체 키 값의 이름과 변수의 이름이 동일해야 사용할 수 있다.

console.log(apple);


function createUserObject1(name, age, gender, job) {

  return {
    name,
    age,
    gender,
    job,
  }
}

const person1 = createUserObject1('beom', 40, 'male', '개발자');
console.log(person1);
// 자리마다 알맞게 설정해야 하는 번거로움이 있다.

function createUserObject2(obj) {

  const {name, age, gender, job='홈프로텍터'} = obj;

  return {
    name,
    age,
    gender,
    job,
  }
}

const person2 = createUserObject2({
  name: 'beom',
  age: 40,
  gender: 'male',
})
console.log(person2);

// 함수의 인수에서 바로 구조 분해 할당도 가능하다
function createUserObject3({name='철수', age='15', gender='male', job='홈프로텍터'} = {}) {

  return {
    name,
    age,
    gender,
    job,
  }
}

console.log(createUserObject3());


// 자주 쓰는 메서드도 구조 분해 할당할 수 있다.

// const {acos} = Math;
// const acos = Math.acos;

// 위 두개는 동일