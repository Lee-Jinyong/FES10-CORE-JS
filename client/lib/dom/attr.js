// 속성 가져오기 함수
function getAttr(node, prop) {
  if(isString(node)) node = getNode(node);
  if(!isString(prop)) throw new TypeError('getAttr 함수의 두 번째 인수는 문자 타입 이어야 합니다.')
  return node.getAttribute(prop);
}

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

  if(!value) throw new ReferenceError('setAttr 함수의 세 번째 인수는 필수 입력값 입니다.')
  
    node.setAttribute(prop, value);
}

// getter, setter 합치기
const attr = (node, prop, value) => !value ? getAttr(node, prop) : setAttr(node, prop, value);