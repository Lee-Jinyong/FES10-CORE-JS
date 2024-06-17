/* ------------------------------ */
/* Browser Object Model           */
/* ------------------------------ */

/*
JavaScript가 작동하는 플랫폼은 호스트(host)라고 불립니다. 
호스트는 브라우저, 웹서버, 심지어는 커피 머신이 될 수도 있습니다. 

각 플랫폼은 해당 플랫폼에 특정되는 기능을 제공하는데, JavaScript 명세서에는 
이를 호스트 환경(host environment) 이라고 부릅니다.

호스트 환경은 JavaScript 코어에 더해 플랫폼에 특정되는 객체와 함수를 제공합니다. 
웹 브라우저는 웹 페이지를 제어하기 위한 수단을 제공하고, Node.js는 서버를 포함해 
애플리케이션 개발에 필요한 다양한 기능을 제공합니다.

브라우저 객체 모델(Browser Object Model, BOM)은 문서 이외의 모든 것을 
제어하기 위해 브라우저(호스트 환경)가 제공하는 추가 객체를 나타냅니다.
*/


/* Window 객체 ----------------------------------------------------------- */

const { alert, confirm, prompt, setTimeout, setInterval } = window;


/* Location 객체 --------------------------------------------------------- */
// http://localhost:5500/index.html?type=listing&page=2#title  >> 접속하고 아래 명령어 콘솔에서 확인

const { href, protocol, host, port, search, hash, replace, reload } = location; // 원래는 window.lacation

console.log(href);
console.log(protocol); // 통신규약
console.log(host); // protocoal을 제외한 주소
console.log(port); // 포트 넘버
console.log(search); // 해당 페이지의 쿼리문의 검색 파라미터
console.log(hash); // 주소 표시줄의 해쉬

// 위의 객체들은 페이지 전환을 할 때 자주 쓰인다


const urlParams = new URLSearchParams(location.search);

// for (const [key, value] of urlParams) {
//   console.log(`${key}:${value}`);
// }


/* Navigator 객체 -------------------------------------------------------- */

const { platform, userAgent, language, onLine, geolocation } = navigator;

console.log(navigator.platform);
console.log(navigator.userAgent); // 현재 사용 브라우저
console.log(navigator.language); // 현재 사용언어
console.log(navigator.onLine);


// 위치 정보 불러오는 함수 만들기 - 콜백함수
function getGeolocation(success, fail) {

  navigator.geolocation.getCurrentPosition((data) => {
    if(data) {
      const {latitude:lat,longitude:long} = data.coords;
      
      const geo = {
        lat,
        long
      }

      success(geo);
    } else {
      fail({message: '위치 서비스 동의가 필요합니다.'});
    }
  });
} // 위치 정보 콘솔에 찍기(위도, 경도)

getGeolocation(
  ({lat, long}) => {
  console.log(lat, long);
  },
  (e) => {
    console.log(e);
  }
);


// 위치 정보 불러오는 함수 만들기 - Promise
// function getGeolocation(){
  
//   return new Promise((resolve, reject) => {
//       navigator.geolocation.getCurrentPosition((data)=>{
  
//     if(data) {
//       const {latitude:lat,longitude:long} = data.coords;
//       const geo = { lat, long };
//       resolve(geo)
//     } else {
//       reject({message:'위치 서비스 동의 하세요'});
//     }
//     })
//   })
// }

// getGeolocation()
// .then(res => console.log(res))

// callback -> promise -> async await 순서로 이후 학습 예정

// navigator.mediaDevices.getUserMedia({video:true}) // 카메라 권한 요청


/* Screen 객체 ----------------------------------------------------------- */

const { width, height, availWidth, availHeight, orientation } = screen;

console.log(innerHeight);
console.log(innerWidth);


/* History 객체 ---------------------------------------------------------- */

const { back, forward, go, length, pushState, replaceState } = history;

// history.back(1) // 뒤로 가기
// history.forward(1) // 앞으로 가기