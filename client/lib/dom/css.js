/* ---------------------------------- class --------------------------------- */

function addClass(node, ...className) {
  if(isString(node)) node = getNode(node);

  if(isArray(className)) {
    className.forEach( c => node.classList.add(c));
    return;
  }

  if(!isString(className)) throw new TypeError('addClass 함수의 두 번째 인수는 문자 타입 이어야 합니다.')

  node.classList.add(className);
}

// 클래스 삭제 함수
function removeClass(node, className) {
  if(isString(node)) node = getNode(node);

  if(!className) {
    node.className = '';
    return;
  }

  if(!isString(className)) throw new TypeError('removeClass 함수의 두 번째 인수는 문자 타입 이어야 합니다.')

  node.classList.remove(className);
}

// 클래스 토글 함수
function toggleClass(node, className) {
  if(isString(node)) node = getNode(node);

  if(!isString(className)) throw new TypeError('toggleClass 함수의 두 번째 인수는 문자 타입 이어야 합니다.')

  return node.classList.toggle(className);
}


/* ---------------------------------- style --------------------------------- */
// 스타일 가져오기 함수
function getStyle(node, prop) {
  if(isString(node)) node = getNode(node);

  if(!(prop in document.body.style)) {
    throw new SyntaxError('getStyle 함수의 두 번째 인수가 유효한 css 속성이 아닙니다.')
  }

  return getComputedStyle(node)[prop];
}

// 스타일 설정 함수
function setStyle(node, prop, value) {
  if(isString(node)) node = getNode(node);

  if(!(prop in document.body.style)) {
    throw new SyntaxError('setStyle 함수의 두 번째 인수가 유효한 css 속성이 아닙니다.')
  }

  if(!value) throw new ReferenceError('setStyle 함수의 세 번째 인수는 필수 입력값 입니다.')

  node.style[prop] = value;
}

// 통합 함수
const css = (node, prop, value) => !value ? getStyle(node, prop) : setStyle(node, prop, value);