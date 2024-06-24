import data from './data/data.js';
import {getNode, getRandom, insertLast, clearContents} from './lib/index.js';

console.log(data)

// [phase-1]
// 1. 주접 떨기 버튼을 클릭하는 함수
//     - 주접 떨기 버튼 가져오기
//     - 이벤트 연결하기 addEventListener('click')
// 2. input 값 가져오기
//     - input.value
// 3. data 함수에서 주접 1개 꺼내기

const submit = getNode('#submit');
const nameField = getNode('#nameField');
const result = getNode('.result')

function handleSubmit(e) {
  e.preventDefault();

  const name = nameField.value;
  const list = data(name);
  const pick = list[getRandom(list.length)];

  console.log(pick);

  clearContents(result);
  insertLast(result, pick);
}

submit.addEventListener('click', handleSubmit);