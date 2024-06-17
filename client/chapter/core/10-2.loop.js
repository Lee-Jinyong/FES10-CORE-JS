/* -------------------- */
/* Do While Loop        */
/* -------------------- */

// let i = 0;

// do {
//   console.log(i);

//   if(i === 3) {
//     console.log('3번 입니다.')
//   }

//   i++;

// } while(i < 5)

// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
// - 사용자로부터 요청된 횟수가 0보다 작을 경우, 
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단

// let result = prompt('몇 번??');

// do {
//   console.log('최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.');

//   console.log(result);
  
//   if(result < 0) {
//     break;
//   }

//   result--;

// } while(result)

// do ~ while 문 (순환)
// - 위 do ~ while 문을 순방향으로 순환되도록 설정

// let count = 0;

// do {
//   console.log(count++);
// } while(result--)


// HTML에 접근해서 노드를 불러오기
// 선택한 노드의 다음 노드 선택하기

let first = document.querySelector('.first');

// console.log(first);

// do {
//   first = first.nextSibling;
// } while(first.nodeType !== 1)

// first의 다음 요소 선택 => .second

function next(node) {
  
  do {

    node = node.nextSibling;

  } while(node.nodeType !== 1)

  return node
}

const second = next(first);

// 선택한 노드의 이전 노드 선택하기

function prev(node) {
  
  do {

    node = node.previousSibling;

  } while(node.nodeType !== 1)

  return node
}

const previous = prev(second);

//클래스 이름을 통해 함수를 실행하기 - 다음 노드 선택

function nextNode(node) {
  
  if(typeof node === 'string') {
    node = document.querySelector(node);
  } // validation - 함수를 안정적이게 구동하기 위해 확인하는 과정

  do {

    node = node.nextSibling;

  } while(node.nodeType !== 1)

    return node;
}

const next_node = nextNode('.first');

//클래스 이름을 통해 함수를 실행하기 - 이전 노드 선택

function prevNode(node) {
  
  if(typeof node === 'string') {
    node = document.querySelector(node);
  } // validation - 함수를 안정적이게 구동하기 위해 확인하는 과정

  do {

    node = node.previousSibling;

  } while(node.nodeType !== 1)

    return node;
}

const prev_node = prevNode('.second');