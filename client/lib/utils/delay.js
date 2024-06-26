import { getNode } from '../dom/getNode.js';
import { insertLast } from '../dom/insert.js';
import { isNumber, isObject } from './type.js';
import { xhrPromise } from './xhr.js';

function delay(callback, timeout=1000) {
  setTimeout(callback, timeout);
}

const first = getNode('.first');
const second = getNode('.second');


// delay(() => {
//   first.style.top = '-100px';
//   second.style.top = '100px';
//   delay(() => {
//     first.style.transform = 'rotate(360deg)';
//     second.style.transform = 'rotate(-360deg)';
//     delay(() => {
//       first.style.top = '0px';
//       second.style.top = '0px';
//     }, 1000)
//   }, 1000)
// }, 1000)


const shouldRejected = false;

// const p = new Promise((resolve, reject) => {
//   if(!shouldRejected) {
//     resolve('성공!');
//   } else {
//     reject('실패');
//   }
// });

// console.log(p);


/* -------------------------------- [phase-1] ------------------------------- */

// function delayP(timeout=1000) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if(!shouldRejected) {
//         resolve('성공!');
//       } else {
//         reject('실패!');
//       }
//     }, timeout);
//   })
// }

// console.log(delayP()); // <Promise> 객체 반환

// delayP()
//   .then((res) => {
//     console.log(res);
//     first.style.top = '-100px';
//     second.style.top = '100px';
//     return delayP();
//   })
//   .then((res) => {
//     console.log(res);
//     first.style.transform = 'rotate(360deg)';
//     second.style.transform = 'rotate(-360deg)';
//     return delayP();
//   })
//   .then((res) => {
//     first.style.top = '0px';
//     second.style.top = '0px';
//     console.log(res);
//   })


/* -------------------------------- [phase-2] ------------------------------- */

const defaultOptions = {
  shouldRejected: true,
  data: '성공!',
  errorMessage: '알 수 없는 오류!',
  timeout: 1000,
}

function delayP(options) {
  
  let config = {...defaultOptions};

  if(isNumber(options)) {
    config.timeout = options;
  }

  if(isObject(options)) {
    config = {...defaultOptions, ...options};
  }

  // console.log(config);

  let {shouldRejected, data, errorMessage, timeout} = config;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(shouldRejected) {
        resolve(data);
      } else {
        reject({message: errorMessage});
      }
    }, timeout);
  })
}

// delayP({
//   shouldRejected: true,
//   data: '성공!',
//   errorMessage: '알 수 없는 오류!',
// });

delayP(1500);


/* -------------------------------------------------------------------------- */
/*                                async / await                               */
/* -------------------------------------------------------------------------- */

// async 함수는 무조건 Promise object를 반환한다.
// await 2가지 기능 수행
//       1. result 꺼내오기
//       2. 코드 실행 흐름 제어

async function delayA(data) {
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('성공');
  }, 2000)
})
  const result = await p;

  console.log(result);

  return
}

// delayA('지연')
// .then((res) => {
//   console.log(res)
// })

// const data = await delayA('지연');
// console.log(data);

// delayA();


async function 라면끓이기() {

  const a = await delayP({data: '물'});
  console.log(a);

  const b = await delayP({data: '스프'});
  console.log(b);
  

  const c = await delayP({data: '면'});
  console.log(c);
  

  const d = await delayP({data: '그릇'});
  console.log(d);
  

}

// 라면끓이기();


async function getData() {
  const data = await xhrPromise.get('https://pokeapi.co/api/v2/pokemon/15');
  console.log(data.sprites.other.showdown['front_default']);
  insertLast(document.body, `<img src="${data.sprites.other.showdown['front_default']}" alt="" />`)
}

getData();