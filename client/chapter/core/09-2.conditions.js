/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자 &&
let AandB = a && b;
console.log('AandB :', AandB);

//논리곱 할당 연산자 Logical AND Assignment
// a &&= b;

// 논리합(또는) 연산자 ||
let AorB = a || b;
console.log('AorB :', AorB);

//논리합 할당 연산자 Logical OR Assignment
// a ||= b;

// 부정 연산자
let reverseValue = !value;
console.log('reverseValue :', reverseValue);

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && {thisIsFalsy:false};
console.log('whichFalsy :', whichFalsy);

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2, 3].length || {thisIsFalsy:true};
console.log('whichTruthy :', whichTruthy);

// 로그인 예제 - 내 코드
function login_mine() {
  let userName = prompt('Who\'s there?');

  if(userName === null) {
    console.log('Canceled');
  } else if (userName.toUpperCase() === 'ADMIN') {
    let password = prompt('Password?');

    if(password === null) {
      console.log('Canceled');
    } else if(password.toUpperCase() === 'THEMASTER') {
      console.log('Welcome');
    } else {
      console.log('Wrong password');
    }
  } else {
    console.log('I don\'t know you');
  }
}
// login_mine();

//로그인 예제 - 옵셔널 체이닝을 활용한 방법
function login() {
  let userName = prompt('누구세요?');

  if(userName?.toLowerCase() === 'admin') {
    let password = prompt('비밀번호는?');

    if(password?.toLowerCase() === 'themaster') {
      console.log('환영합니다!');
    } else if (password === null) {
      console.log('취소!');
    } else {
      console.log('비밀번호를 잘못 입력하셨습니다.');
    }
  } else if(userName === null || userName?.replace(/\s*/g,'') === '') {
    console.log('취소!');
  } else {
    console.log('실패!');
  }
}
// login();

//로그인 예제 - return을 사용해 제어하는 방법
function login() {
  let userName = prompt('누구세요?');

  // userName이 null, undifined => 아래 코드 실행 안함

  if(userName === null || undefined) return;

  if(userName?.toLowerCase() === 'admin') {
    let password = prompt('비밀번호는?');

    if(password?.toLowerCase() === 'themaster') {
      console.log('환영합니다!');
    } else if (password === null) {
      console.log('취소!');
    } else {
      console.log('비밀번호를 잘못 입력하셨습니다.');
      login();
    }
  } else if(userName === null || userName?.replace(/\s*/g,'') === '') {
    console.log('취소!');
  } else {
    console.log('실패!');
  }
}
// login();