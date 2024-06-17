/* -------------------- */
/* Array Type           */
/* -------------------- */

// 객체(Object) : 키(key)를 사용해 식별할 수 있는 값을 담은 집합 - `키:값의 집합`
// 배열(Array) : 순서(index)가 있는 집합 - `값의 집합`

// ※ 배열은 특별한 종류의 객체로 대괄호를 사용해 요소에 접근하는 방식은 객체 문법을 사용. 
//   배열은 키(key)가 숫자(index)라는 점이 다름. 즉, 본질은 객체.
//   순서에 따른 제어가 가능하도록 다양한 메서드와 length 프로퍼티를 언어에서 제공.


// 배열 선언
let arr = 'A, B, C, D, E, F, G, H'.split(',');
console.log(arr);

// 배열 요소의 총 갯수
console.log('length : ', arr.length);
// console.log(arr.length = 0); // 배열 비우기

// 배열 요소 변경
arr[0] = '가';
console.log(arr);

// 배열 요소 추가
let unshift = arr.unshift('0');
console.log(arr);

let push = arr.push('I');
console.log('push : ', push);
console.log(arr);


// 배열 요소 제거
let shift = arr.shift();
console.log('shift : ', shift);

let pop = arr.pop();
console.log('pop : ', pop);


// 큐(queue) vs. 스택(stack)
// 큐 FIFO (먼저 들어온 것이 먼저 나간다) ← queue ←
// 스택 LIFO (나중에 들어온 것이 먼저 나간다) ↓ stack ↑


// 배열 요소 순환(loop)
// for 문, for ~ of문
for(let i=0, l=arr.length; i < l; i++) {
  console.log(arr[i]);
}

for(const item of arr) {
  console.log(item);
}

const iter = arr[Symbol.iterator]();
console.log(iter);

for(const item of iter) {
  console.log(item);
}
for(const item of iter) { // iterator 객체는 한번 순환을 하면 요소가 사라져 다시 사용할 수 없다
  console.log(item);
}


// 배열 복사
let copiedArray = [...arr];
// let copiedArray = arr.slice();
// let copiedArray = Array.from(arr);
console.log('copiedArray : ', copiedArray);


// 다차원 배열
// 행렬을 저장하는 용도

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// 행렬의 정중앙에 위치한 요소를 찾으려면?
console.log(matrix[1][1]);