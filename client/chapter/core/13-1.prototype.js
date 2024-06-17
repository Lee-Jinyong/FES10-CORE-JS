/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우

// 객체의 프로토타입 [[Prototype]] => __proto__

const animal = {
  legs: 4,
  tail: true,
  stomach: [],
  set eat(food) { // setter
    this.stomach.push(food);
  },
  get eat() { // getter
    return this.stomach;
  }
}

// animal.eat = '고기';
// console.log(animal.eat);

const tiger = {
  patter: '호랑이무늬',
  hunt(target) {
    this.prey = target;
    return `${target}에게 조용히 접근한다.`
  },
  __proto__: animal,
}

// tiger.eat = '사과';
// console.log(tiger);

const 백두산호랑이 = {
  color: 'white',
  name: '백돌이',
  __proto__: tiger,
}

console.log(백두산호랑이.hunt('사슴'));
백두산호랑이.eat = '사슴';
console.log(백두산호랑이.eat);


// 생성자 함수

function Animal(){
  this.legs = 4;
  this.tail = true;
  this.stomach = [];
  this.getEat = function() {
    return this.stomach;
  }
  this.setEat = function(food) {
    this.stomach.push(food);
  }
}

// const a1 = new Animal();


function Tiger(name) {
  Animal.call(this);
  this.name = name;
  this.pattern = '호랑이무늬';
  this.hunt = function(target) {
    return `${target}에게 조용히 접근한다.`;
  }
}

Tiger.bark = function(sound) { // 정적 메소드
  return sound
}

// Tiger.prototype = Object.create(Animal.prototype);
// Tiger.prototype.constructor = Tiger;

// Tiger.prototype = a1;

const 금강산호랑이 = new Tiger('금순이');
console.log(Tiger.bark('어흥'));


// 함수의 메서드 (함수의 능력)
// call >> this를 전달함, 인수를 개별로 받음, 함수 실행 O
// apply >> this를 전달함, 인수를 배열로 받음, 함수 실행 X
// bind >> this를 전달함, 인수를 개별로 받음, 함수 실행 X


function sum(a, b, c) {
  console.log(this);
  return a + b + c;
}

sum(1, 1, 1);
sum.call('hello', 1, 2, 3); // 6
sum.apply('hello', [1, 2, 3]); // 6
const b = sum.bind('hello', 1, 2, 3);
b();