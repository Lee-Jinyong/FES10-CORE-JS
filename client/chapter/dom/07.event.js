/* --------------------- */
/* Event Handling        */
/* --------------------- */


/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"
function handler() {
  console.log('클릭 이벤트 발생')
}


// 2. DOM 프로퍼티 : element.onclick = handler
const first = getNode('.first');

// first.onclick = handler;


// 3. 메서드 : element.addEventListener(event, handler[, phase])
function handleClick(event) {
  console.log(event);
  console.log(event.type);
  console.log(event.target);
  console.log(event.clientX);
  console.log(event.offsetX);
}


/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener


// first.addEventListener('click', handleClick);


const second = getNode('.second');

// second.addEventListener('click', () => {
//   first.removeEventListener('click', handleClick); // 동일 함수를 넣어야만 제거가 된다
// })


function bindEvent(node, type, handler) {
  if(isString(node)) node = getNode(node);
  node.addEventListener(type, handler);
  return () => node.removeEventListener(type, handler);
}

// const firstEventRemove = bindEvent('.first', 'click', handleClick);
// firstEventRemove();

// second.addEventListener('click', firstEventRemove)


const ground = getNode('.ground');
const ball = getNode('#ball');

function handleClickBall({offsetX:xPos, offsetY:yPos}) {
  // let xPos = e.offsetX;
  // let yPos = e.offsetY;
  // const {offsetX:xPos, offsetY:yPos} = e;

  // console.log(x, y);
  // console.log(ball.offsetWidth);
  // console.log(ball.offsetHeight);
  const w = ball.offsetWidth;
  const h = ball.offsetHeight;

  ball.style.transform = `translate(${xPos - (w / 2)}px, ${yPos - (h / 2)}px)`
}

// ground.addEventListener('click', handleClickBall);


function handleMove({offsetX:xPos, offsetY:yPos}) {
  // console.log(xPos, yPos)
  // const w = ball.offsetWidth;
  // const h = ball.offsetHeight;

  // ball.style.transform = `translate(${xPos - (w / 2)}px, ${yPos - (h / 2)}px)`
  let template = `
    <div class="emotion" style="top:${yPos - 16}px; left:${xPos - 16}px;">🙃</div>
  `

  insertLast(ground, template);
}

// ground.addEventListener('mousemove', handleMove);


/* -------------------- throttle(수도꼭지), debounce(공 튀김 방지) ------------------- */
// debounce
function debounce(callback, limit=500) {
  
  let timeout;
  
  return function(e) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback.call(this, e);
    }, limit);
  }
}

ground.addEventListener('mousemove', debounce(handleMove));


//throttle

function throttle(callback, limit=500){
  
  let waiting = false;

  return function(...args) {
    if(!waiting) {
      callback.apply(this, args);
      waiting = true;
      
      setTimeout(() => {
        waiting = false;
      }, limit)
    }
  }
}


ground.addEventListener('mousemove', throttle(handleMove));