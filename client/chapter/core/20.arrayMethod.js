/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray

console.log(Array.isArray([]));

// function typdOf(data) {
//   return Object.prototype.toString.call(data).slice(8, -1).toLowerCase()
// }
// const typdOf = data => Object.prototype.toString.call(data).slice(8, -1).toLowerCase();

// function isArray(data) {
//   return typdOf(data) === 'array'
// }
// const isArray = data => typdOf(data) === 'array'; // type.js에 선언해둔 함수를 불러옴
console.log(isArray([])); // true | false


const people = [
  {
    id: 0,
    name: 'Lee',
    age: 25,
    job: 'developer',
    imgSrc: 'https://randomuser.me/api/portraits/lego/1.jpg',
    imgAlt:'대체 텍스트입니다.',
  },
  {
    id: 1,
    name: 'Kim',
    age: 40,
    job: 'teacher',
    imgSrc: 'https://randomuser.me/api/portraits/lego/2.jpg',
    imgAlt:'대체 텍스트입니다.',
  },
  {
    id: 2,
    name: 'Park',
    age: 12,
    job: 'student',
    imgSrc: 'https://randomuser.me/api/portraits/lego/3.jpg',
    imgAlt:'대체 텍스트입니다.',
  },
  {
    id: 3,
    name: 'Chio',
    age: 35,
    job: 'Racer',
    imgSrc: 'https://randomuser.me/api/portraits/lego/4.jpg',
    imgAlt:'대체 텍스트입니다.',
  }
];
/* 요소 순환 ---------------------------- */

// forEach
people.forEach(user => console.log(user.job));


// const first = document.querySelector('.first');
// const second = document.querySelector('.second');
// const third = document.querySelector('.third');

// first.addEventListener('click', () => {
//   console.log('first를 클릭하셨습니다.');
// })
// second.addEventListener('click', () => {
//   console.log('second를 클릭하셨습니다.');
// })
// third.addEventListener('click', () => {
//   console.log('third를 클릭하셨습니다.');
// })

const span = document.querySelectorAll('span');

span.forEach((tag) => {
  tag.addEventListener('click', function() {
    this.style.color = 'dodgerblue';
  })
})


/* 원형 파괴 ----------------------------- */

// push
// people.push('admin');

// pop
// people.pop()
// console.log(...people);

// unshift

// shift

// reverse
// people.reverse()
// console.log(people);

// splice
// people.splice(0, 2, '안녕', '잘가');
// console.log(people);

// sort
function compare({age:a}, {age:b}) {
  if(a > b) return 1; // 첫 번째 값이 두 번째 값보다 큰 경우
  if(a == b) return 0; // 두 값이 같은 경우
  if(a < b) return -1; // 첫 번째 값이 두 번째 값보다 작은 경우
}

people.sort(compare);
console.log(people);


/* 새로운 배열 반환 ------------------------ */

// concat
// slice
// toSorted
const toSorted = people.toSorted(compare);
console.log('toSorted : ', toSorted);

// toReversed
const toReversed = people.toReversed();
console.log('toReversed : ', toReversed);

// toSpliced
const toSpliced = people.toSpliced(0, 2);
console.log('toSpliced : ', toSpliced);

// map
// 이름만 담은 배열 반환
// const nameList = people.map((user) => {
//   return user.name
// })
const nameList = people.map(u => u.name);
console.log('nameList : ', nameList);

// 현재 나이에 +2 배열 반환
// const age = people.map((user) => {
//   return user.age + 2
// });
const age = people.map(u => u.age + 2);
console.log('age : ', age);

const cardTag = people.map(({name ,age, job, imgSrc, imgAlt}) => {
  let template = `
    <li class="userCard">
      <div class="imageField">
        <img src="${imgSrc}.jpg" alt="${imgAlt}" />
      </div>
      <ul class="contents">
        <li> <span class="strong">이름</span> : ${name}</li>
        <li> <span class="strong">나이</span> : ${age}</li>
        <li> <span class="strong">직업</span> : ${job}</li>
      </ul>
    </li>
  `
  return template;
})

const ul = document.querySelector('ul')

// console.log('nameTag : ', nameTag);

// nameTag.forEach((tag) => {
//   document.body.insertAdjacentHTML('beforeend', tag)
// })
cardTag.forEach(tag => ul.insertAdjacentHTML('beforeend', tag));


/* 요소 포함 여부 확인 ---------------------- */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 ------------------------------ */

// find >> 반환값 한 개 >> 반환값마다 자료형 다름
const findKim = people.find((item) => {
  return item.name === 'Kim'
})
console.log('findKim : ', findKim);

// findIndex

/* 요소 걸러내기 --------------------------- */

// filter >> 반환값 여러 개 >> 배열 반환
const filter = people.filter((item) => {
  return item.age > 30;
})
console.log('filter : ', filter);

/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce
// const reduce = people.reduce((acc, cur) => {
//   return acc + cur.age;
// }, 0)
const reduce = people.reduce((acc, cur) => acc + cur.age, 0)
console.log('reduce : ', reduce);

const template = people.reduce((acc, cur) => {
  return acc + `<li class="userCard"> ${cur.name} : ${cur.age} </li>`
}, '')
console.log('template : ', template);

ul.insertAdjacentHTML('beforeend', template);


// reduceRight

/* string ←→ array 변환 ------------------ */

const str = 'Lee Kim Park Choi'

// split : 문자 -> 배열
const stringToArray = str.split(' ');
console.log(stringToArray);

// join : 배열 -> 문자
const arrayToString = stringToArray.join(' ');
console.log(arrayToString);



const products = [
  {name: '냉동 만두', price: 10000, brand: '비비고'},
  {name: '냉동 피자', price: 15000, brand: '오뚜기'},
  {name: '냉동 치킨 너겟', price: 12000, brand: '하림'},
  {name: '냉동 감자튀김', price: 8000, brand: '맥케인'},
  {name: '냉동 새우', price: 18000, brand: '곰곰'}
];

// forEach 함수 만들어보기
const forEach = (f, i) => {
  for(const a of i) f(a)
}

forEach((item) => {
  console.log(item)
}, [1, 2, 3]);


// map 함수 만들어보기
const map = (f, i) => {
  let result = [];

  for(const a of i) {
    result.push(f(a));
  }
  return result;
}

console.log(map((n) => n + 2, [1, 2, 3]));


// filter 함수 만들어보기
const _filter = (f, i) => {
  let result = [];

  for(const a of i) {
    if(f(a)) result.push(a);
  }

  return result;
}

console.log(_filter(n => n > 3, [1, 2, 3, 4, 5]));


// reduce 함수 만들어보기
const _reduce = (f, acc, i) => {

  if(!i){
    i = acc;
    acc = i.shift();
    // i = acc[Symbol.iterator]();
    // acc = i.next().value;
  }

  for(const a of i) {
    acc = f(acc, a);
  }

  return acc;
}

const add = (a, b) => a + b;

console.log(_reduce(add, [1, 2, 3]));

console.log(_reduce((t, p) => t + p.price, 0, products));

console.log(
  _reduce(
    add,
    map(p => p.price, _filter(p => p.price < 10000, products)),
  )
);