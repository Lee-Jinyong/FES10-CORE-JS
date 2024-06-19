/* ------------------------------------ */
/* HTML Attributes vs. DOM Properties   */
/* ------------------------------------ */


/* HTML 속성 ------------------------------------------------------------- */

// 브라우저는 HTML 태그를 해석해 DOM 객체를 만들 때 HTML 표준 속성을 인식하고, 
// 이 표준 속성을 사용해 DOM 프로퍼티를 생성합니다. 표준 속성이 아닌 경우, 
// 이에 매핑하는 DOM 프로퍼티가 생성되지 않습니다.
// HTML 속성 값은 항상 문자열입니다.


/* DOM 프로퍼티 ----------------------------------------------------------- */

// DOM 노드(DOM node)는 JavaScript 객체입니다.
// DOM 프로퍼티와 메서드는 일반 JavaScript 객체처럼 행동하므로 아래와 같은 특징을 보입니다.
// - 어떤 값이든 가질 수 있습니다.
// - 대·소문자를 구분하므로 `elem.nodeType`이 아닌, `elem.NoDeTyPe`는 동작하지 않습니다.
// - DOM 프로퍼티는 HTML 속성과 달리 값이 항상 문자열이 아닙니다.


/* DOM 프로퍼티 검토 ------------------------------------------------------- */

// - elementNode.hasAttribute(name) – 속성 존재 여부 확인
const first = getNode('.first');

console.log(first.hasAttribute('class'));
console.log(first.hasAttribute('id'));

// - elementNode.getAttribute(name) – 속성값을 가져옴
console.log(first.getAttribute('class'));
console.log(first.getAttribute('sayHi'));
console.log(first.getAttribute('data-value'));

// - elementNode.setAttribute(name, value) – 속성값을 변경함
first.setAttribute('id', 'tiger');
console.log(first.getAttribute('id'));

// - elementNode.removeAttribute(name) – 속성값을 지움
first.removeAttribute('id');
console.log(first.hasAttribute('id'));

// - elementNode.attributes – 열거 가능한(iterable) 속성 집합을 반환함
console.log(first.attributes);


/* 비표준 속성, 프로퍼티 설정 ------------------------------------------------- */

// data-* 속성은 커스텀 데이터를 안전하고 유효하게 전달해줍니다.
// data-* 속성을 사용하면 읽기 쉽고, 수정도 손쉽습니다.

// - elementNode.dataset

first.dataset.name = 'user' // data-name="user" 으로 HTML 속성 생성
console.log(first.dataset.name);
console.log(first.dataset);

console.log(first.getAttribute('data-name'));


// 속성 가져오기 함수
function getAttr(node, prop) {
  if(isString(node)) node = getNode(node);

  if(!isString(prop)) throw new TypeError('getAttr 함수의 두 번째 인수는 문자 타입 이어야 합니다.')

  return node.getAttribute(prop);
}

console.log(getAttr('.first', 'sayHi'));


// 속성 설정하기 함수
function setAttr(node, prop, value) {
  if(isString(node)) node = getNode(node);

  if(!isString(prop)) {
    throw new TypeError('setAttr 함수의 두 번째 인수는 문자 타입 이어야 합니다.')
  }

  if(value === '') {
    node.removeAttribute(prop);
    return;
  }

  // prop에 data가 있으면 dataset으로 넣기 >> 미니 과제
  if(prop.startsWith('data')) {
    prop = prop.slice(5);
    node.dataset[prop] = value;
    return;
  }

  if(!value) throw new ReferenceError('setAttr 함수의 세 번째 인수는 필수 입력값 입니다.')

  node.setAttribute(prop, value);
}

setAttr('.second', 'id', 'bye');
console.log(getAttr('.second', 'id'));

// setAttr('.second', 'class', ''); // 속성 삭제

setAttr('.second', 'data-name', 'tiger'); // 미니 과제

const second = getNode('.second');
console.log(console.log(second.dataset.name));


// getter와 setter 함께 사용할 수 있는 함수
// function attr(node, prop, value) {
//   if(!value){
//     return getAttr(node,prop);
//   } else {
//     setAttr(node, prop, value);
//   }
// }

const attr = (node, prop, value) => !value ? getAttr(node, prop) : setAttr(node, prop, value);

console.log(attr('.first', 'class'));
attr('.first', 'sayHi', 'hello');
console.log(attr('.first', 'sayHi'));