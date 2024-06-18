/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName
// - querySelector
// - querySelectorAll
// - closest


// 노드 선택 함수 >> lib에 넣음
// function getNode(node, context=document) {

//   // if(isString(context)) context = document.querySelector(context);

//   // context가 documnet가 아니라면 querySelector를 실행하기
//   if(context.nodeType !== 9) context = document.querySelector(context);
//   return context.querySelector(node);
// }


// function getNodes(node, context=document) {
//   if(context.nodeType !== 9) context = document.querySelector(context);
//   return context.querySelectorAll(node);
// }


console.log(getNode('.list', '#visual-section'));
console.log(getNodes('.list'));

// 1. id가  visual-section인 section 태그 요소
// const section = document.getElementById('visual-section');
const section = document.querySelector('#visual-section');
console.log(section);

// 2. class가 list인 ul 태그 요소
const list = section.querySelector('.list');
console.log(list);

// 3. list 요소 안에 about li 태그 요소
const about = list.querySelector('li:nth-child(2)');
console.log(about);

// 3-1. list 요소 안에 about 텍스트를 가진 li 태그 요소
// let aboutLi = [...list.children].find((li) => {
//   return li.textContent === 'about';
// })
let aboutLi = [...list.children].find(li => li.textContent === 'about');
console.log(aboutLi);

// 4. name 속성이 search-box인 form 태그 요소
const form = document.querySelector('form[name="search-box"]');
console.log(form);

// 5. form 요소 안에 있는 모든 자식 요소
const children = form.children;
// const children = form.querySelectorAll('*');
console.log(children);

// 6. form 요소 안에 있는 input 태그 요소
const input = form.lastElementChild;
// const input = children[1];
// const input = children[children.length = 1];
console.log(input);


/* 문서 대상 확인 */
// - matches
// - contains