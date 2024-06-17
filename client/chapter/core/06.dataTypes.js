/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
let empty = null;
console.log(typeof empty);

// 2. 값이 할당되지 않은 상태
let undef;
console.log(typeof undef);

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
const double = "hello"; // string literal
const single = 'hello';
const backtick = `hello ${10+5}`;

console.log(double);
console.log(single);
console.log(backtick);

console.log(typeof double);
console.log(typeof single);
console.log(typeof backtick);

const str = new String('hello');  //constructor function

console.log(str);
console.log(typeof str);

// 4. 정수, 부동 소수점 숫자(길이 제약)
const integer = 150;  // number literal
const floatingPointNumber = 10.5;

console.log(typeof integer);
console.log(typeof floatingPointNumber);
console.log(typeof Infinity);
console.log(typeof NaN);

const num = new Number(150);

console.log(num);
console.log(typeof num);

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
const bigInt = 123n;

console.log(typeof bigInt);

const b = BigInt(111);

console.log(b);

// 6. 참(true, yes) 또는 거짓(false, no)
const isActive = false;

console.log(typeof isActive)

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
const obj = {
  name: 'tiger'
}; // object literal

console.log(obj);
console.log(typeof obj);

const object = new Object({name: 'lion'}); // constructor function

console.log(object);
console.log(typeof object);

// 8. 고유한 식별자(unique identifier)
const id = Symbol('uuid');
const id2 = Symbol('uuid');

console.log(typeof id);
console.log(id === id2);

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류

// Object
const user = {
  name: 'tiger',
  age: 20,
};

console.log(user);
console.log(user.name);
console.log(user.age);

// Array
const arr = [
  10,
  100,
  1000,
  null,
  undefined,
  'hello',
  {name: 'tiger'},
  [1, 2, 3],
  function(){},
  ];

console.log(arr);
console.log(typeof arr);

const array = new Array([1, 2, 3]);

console.log(array);
console.log(typeof array);

// function
function plus(a, b) {
  return a + b;
}

const result = plus(1, 2);

console.log(result);

//method
const method = {
  sum: function(a, b) {
    return a + b
  },
  sayHi1: function() {
    return 'Hello'
  },  // normal function
  sayHi2: ()=> {
    return 'hi'
  },  // arrow function
  sayHi3() {
    return 'hola'
  },  // concise method
};

console.log(method.sum(1, 2));
console.log(method.sayHi1());
console.log(method.sayHi2());
console.log(method.sayHi3());

// this
