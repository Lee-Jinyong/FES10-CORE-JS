/* ---------------------------------------------------------------------- */
/* Iterable Object                                                        */
/* ---------------------------------------------------------------------- */

// 배열을 일반화 한 객체
// for-of 문을 사용할 수 있는 객체
// Symbol.Iterator 메서드가 필히 구현되어야 함
// Symbol.Iterator 메서드는 이터레이터 객체를 반환하며
// 이터레이터 객체는 next() 메서드를 가짐 ({ done: Boolean, value: any } 타입 반환)

const arr = '1 2 3 4 5 6'.split(' ');

const iter = arr[Symbol.iterator]();

// for(const a of iter) {
//   console.log(a);
// }

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());


const range = {
  from: 1,
  to: 5,
  length: 5,
  [Symbol.iterator]() {
    let current = this.from;
    let last = this.to;

    return {
      next() {
        if(current <= last){
          return {value: current++, done: false};
        } else {
          return {done: true};
        }
      }
    }
  }
}

const a = range[Symbol.iterator]();

console.log(a.next());
console.log(a.next());
console.log(a.next());
console.log(a.next());
console.log(a.next());
console.log(a.next());


// 제너레이터 함수
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const gene = gen();
console.log(gene.next());
console.log(gene.next());
console.log(gene.next());
console.log(gene.next());

const customIter = {
  *[Symbol.iterator](){
    yield 1;
    yield 2;
    yield 3;
  }
}

for(const a of customIter) {
  console.log(a);
}

// 유사배열 vs. 이터러블
// - 유사배열 : 인덱스 키와 length 속성을 가진 객체
// - 이터러블 : Symbol.Iterator 메서드를 가지는 객체

function* idGenerator() {
  // let id = 1;
  while(true) {
    // yield ++id;
    yield `user-${crypto.randomUUID()}`; // 랜덤한 유저 ID 생성
  }
}

const id = idGenerator();
console.log(id.next());
console.log(id.next());
console.log(id.next());
console.log(id.next());
console.log(id.next());




// 유사배열, 이터러블 배열화