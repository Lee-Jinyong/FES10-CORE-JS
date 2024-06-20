/* -------------------- */
/* DOM Styling          */
/* -------------------- */


/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

const first = getNode('.first')

// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용
// first.className = 'hi'
// first.className = ''
console.log(first.className);

// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용
console.log(first.classList);

first.classList.add('hello');
console.log(first.classList);

first.classList.remove('hello');
first.classList.toggle('hello'); // Boolean
console.log(first.classList.contains('hello')); // Boolean


// 클래스 추가 함수
function addClass(node, ...className) {
  if(isString(node)) node = getNode(node);

  className.forEach((c) => {

    if(isObject(c)) c = Object.values(c);

    if(c.includes(',')) c = c.replaceAll(/\s*/g, '').split(',');

    if(isArray(c)) {
      c.forEach(c => node.classList.add(c));
    } else if(isString(c)) {
      node.classList.add(c);
    } else {
      throw new TypeError('addClass 함수의 두 번째 인수는 문자 타입 이어야 합니다.')
    }
  })

  // if(isArray(className)) {
  //   className.forEach( c => node.classList.add(c));
  //   return;
  // }

  // if(!isString(className)) throw new TypeError('addClass 함수의 두 번째 인수는 문자 타입 이어야 합니다.')

  // node.classList.add(className);
}

addClass('.first', 'bye');
addClass('.first', ['a', 'b', 'c']); // 현재 작동 안됌
addClass('.first', 'd', 'e', 'f');
addClass('.first', 'g, h, i');
addClass('.first', {j:'juice', k:'knife'});

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

removeClass('.first', 'bye');
// removeClass('.first'); // 클래스 전부 삭제


// 클래스 토글 함수
function toggleClass(node, className) {
  if(isString(node)) node = getNode(node);

  if(!isString(className)) throw new TypeError('toggleClass 함수의 두 번째 인수는 문자 타입 이어야 합니다.')

  return node.classList.toggle(className);
}

toggleClass('.first', 'hello')


/* 스타일 변경 방법 --------------------------------------------------------- */

// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장
first.style.background = 'dodgerblue';

first.style.cssText = `
color: white;
padding: 1rem;
border: 1px solid red;
` // 기존에 있던거 덮어씌움


/* 계산된 스타일 읽기 ------------------------------------------------------- */

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`
console.log(getComputedStyle(first)['font-size']);


// 스타일 가져오기 함수
function getStyle(node, prop) {
  if(isString(node)) node = getNode(node);

  if(!(prop in document.body.style)) {
    throw new SyntaxError('getStyle 함수의 두 번째 인수가 유효한 css 속성이 아닙니다.')
  }

  return getComputedStyle(node)[prop];
}

console.log(getStyle('.first', 'font-size')); // '32px'


// 스타일 설정 함수
function setStyle(node, prop, value) {
  if(isString(node)) node = getNode(node);

  if(!(prop in document.body.style)) {
    throw new SyntaxError('setStyle 함수의 두 번째 인수가 유효한 css 속성이 아닙니다.')
  }

  if(!value) throw new ReferenceError('setStyle 함수의 세 번째 인수는 필수 입력값 입니다.')

  node.style[prop] = value;
}

setStyle('.first', 'color', 'red');


const css = (node, prop, value) => !value ? getStyle(node, prop) : setStyle(node, prop, value);

css('.first', 'color');
css('.first', 'color', 'orange');