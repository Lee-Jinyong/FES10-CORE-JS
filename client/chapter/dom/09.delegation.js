/* ------------------------ */
/* Event delegation         */
/* ------------------------ */

const nav = getNode('nav');

function handleClick(e) {
  // console.log(e.target);
  const target = e.target;
  const name = target.dataset.name;
  const li = target.closest('LI');

  /* 클래스를 사용한 위임 ---------------- */
  // if(target.matches('.about')) console.log('about!')

  // if(target.classList.contains('about')) console.log('about!')
  // if(target.classList.contains('home')) console.log('home!')
  // if(target.classList.contains('contact')) console.log('contact!')


  /* 속성을 사용한 위임 ------------------ */
  // console.log(target.getAttribute('data-name'));
  // console.log(target.dataset.name);
  // console.log(attr(target, 'data-name'));

  // if(name === 'about') console.log('about!')
  // if(name === 'home') console.log('home!')
  // if(name === 'contact') console.log('contact!')


  /* 노드를 사용한 위임 ------------------ */

  // console.log(target.textContent.includes('ABOUT')) // ul도 조회된다

  // 정확히 li만 조회
  if(!li) return;

  if(li.textContent.includes('ABOUT')) console.log('about!');
  if(li.textContent.includes('HOME')) console.log('home!');
  if(li.textContent.includes('CONTACT')) console.log('contact!');
}

nav.addEventListener('click', handleClick);