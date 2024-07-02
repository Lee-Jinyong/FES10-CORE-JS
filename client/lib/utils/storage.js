import { isString } from "./type.js";

const {localStorage:storage} = window;

// const data = JSON.parse(localStorage.getItem('user'));
// console.log(data);

// localStorage.setItem('user', JSON.stringify(user));

export function setStorage(key, value) {

  return new Promise((resolve, reject) => {
    if(isString(key)) {
      storage.setItem(key, JSON.stringify(value));
      resolve()
    } else {
      reject({message: 'key는 문자 타입 이어야 합니다.'})
    }
  })
} 

// setStorage('user', user);


export function getStorage(key) {
  return new Promise((resolve, reject) => {
    if(isString(key)) {
      resolve(JSON.parse(storage.getItem(key)));
    } else {
      reject({message: 'key는 문자 타입 이어야 합니다.'});
    }
  })
}

// const data = await getStorage('user');
// console.log(data);

// const data = getStorage('user').then((res) => {
//   console.log(res);
// })


export function deleteStorage(key){
  return new Promise((resolve, reject) => {
    !key ? storage.clear() : storage.removeItem(key);
    resolve();
  })
}

// deleteStorage('user') // starage.removeItem('user')
// deleteStorage() // starage.clear()