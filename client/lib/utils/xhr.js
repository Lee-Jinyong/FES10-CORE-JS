const ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

const user = {
  name : 'tiger',
  age : 40,
  gender : 'male',
}

// [readyState]
// 0 : uninitialized
// 1 : loading
// 2 : loaded
// 3 : interactive
// 4 : complete => 성공 의미X, 통신이 끝남O


/* -------------------------------------------- */
/*               xhr callback 방식               */
/* -------------------------------------------- */

function xhr({
  method = 'GET',
  url = '',
  body = null,
  onSuccess = null,
  onFail = null,
  headers = {
    'Content-Type' : 'application/json',
    'Access-Control-Allow-Origin' : '*'
  }
}) {

  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  Object.entries(headers).forEach(([key,value])=>{
    xhr.setRequestHeader(key,value)
  })

  xhr.addEventListener('readystatechange', () => {
    const {readyState, status, response} = xhr;
    // xhr.response => readyState가 4일 때 값을 불러오기 하면 정상적으로 불러옴
    if(readyState === 4) {
      if(status >= 200 && status < 400) {
        console.log(JSON.parse(response));
        onSuccess(JSON.parse(response));
      } else {
        onFail('실패!')
      }
    }
  })

  xhr.send(JSON.stringify(body));
}

// xhr('POST', ENDPOINT, user,
//   data => console.log(data),
//   err => console.log(err));

// xhr('GET', ENDPOINT, user,
//   data => console.log(data),
//   err => console.log(err));

// xhr({
//   method: 'POST',
//   url: ENDPOINT,
//   body: user,
//   onSuccess(data){console.log(data)},
//   onFail(data){console.log(data)},
// })

//함수의 메소드
xhr.post = (url, body, onSuccess, onFail) =>{
  if(!body) throw new Error('body를 넣어줘야 합니다')
  xhr({ 
    method:'POST',
    body,
    url, 
    onSuccess, 
    onFail
  })
}

xhr.put = (url, body, onSuccess, onFail) =>{
  xhr({ 
    method:'PUT',
    body,
    url, 
    onSuccess, 
    onFail
  })
}

xhr.delete = (url, onSuccess, onFail) =>{
  xhr({ 
    method:'DELETE',
    url, 
    onSuccess, 
    onFail
  })
}

//사용
// xhr.post(
//   ENDPOINT,
//   user,
//   (data) => {
//     console.log(data);
//   },
//   (err) => {
//     console.log(err);
//   }
// )


/* -------------------------------------------------------------------------- */
/*                               xhr Promise 방식                             */
/* -------------------------------------------------------------------------- */

const defaultOptions = {
  method:'GET',
  url: '',
  body: null,
  errorMessage:'서버와의 통신이 원활하지 않습니다.',
  headers:{
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin': '*'
  }
}

export function xhrPromise(options) {

  const {method, url, body, headers, errorMessage} = {
    ...defaultOptions,
    ...options,
    headers:{
      ...defaultOptions.headers,
      ...options.headers
    }
  };

  // const {method, url, body, headers, errorMessage} = config;

  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value);
  })

  xhr.send(JSON.stringify(body));

  return new Promise((resolve, reject) => {
    
    xhr.addEventListener('readystatechange', ()=>{
      if(xhr.readyState === 4) {
        if(xhr.status >= 200 && xhr.status < 400) {
          // 성공
          resolve(JSON.parse(xhr.response));
        } else{
          // 실패
          reject({message: errorMessage});
        }
      }
    })
  })
}

// xhrPromise('GET', ENDPOINT, {name: 'tiger'})
// .then((res) => {
//   console.log(res)
// })

// xhrPromise({url: ENDPOINT})
// .then((res)=>{
//   console.log( res );
// })

//함수의 메서드
// xhrPromise.get = (url) => {
//   return xhrPromise({url});
// }

// xhrPromise.post = (url, body) => {
//   return xhrPromise({
//     url,
//     body,
//     method: 'POST'
//   })
// }

// xhrPromise.put = (url, body) => {
//   return xhrPromise({
//     url,
//     body,
//     method: 'PUT'
//   })
// }

// xhrPromise.post = (url) => {
//   return xhrPromise({
//     url,
//     method: 'DELETE'
//   })
// }

//함수의 메서드 줄여쓰기
xhrPromise.get = (url) => xhrPromise({url})
xhrPromise.post = (url,body) => xhrPromise({url, body, method:'POST'})
xhrPromise.put = (url,body) => xhrPromise({url, body, method:'PUT'})
xhrPromise.delete = url => xhrPromise({url, method:'DELETE'})


xhrPromise.get(ENDPOINT)
.then()