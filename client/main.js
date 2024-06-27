/* global gsap */

import {
  tiger,
  delayP,
  getNode,
  changeColor,
  clearContents,
  renderSpinner,
  renderUserCard,
  renderEmptyCard,
} from './lib/index.js'

// const ENDPOINT = 'https://jsonplaceholder.typicode.com/users';
const ENDPOINT = 'http://localhost:3000/users';


// 1. user 데이터 fetch
//    - tiger.get

// 2. fetch 데이터의 유저 이름만 콘솔 출력
//    - 데이터 유형 파악  ex) 객체, 배열, 숫자, 문자
//    - 적당한 메서드 사용하기

// 3. 유저 이름 화면에 렌더링


const userCardInner = getNode('.user-card-inner');

async function renderUserList() {

  // 로딩 스피너 렌더링
  renderSpinner(userCardInner);

  // await delayP(2000);

  try {

    gsap.to('.loadingSpinner', {
      opacity: 0,
      onComplete() {
        // console.log(this)
        this._targets[0].remove()
      }
    })

    const response = await tiger.get(ENDPOINT)

    const data = response.data;

    data.forEach(user => renderUserCard(userCardInner, user))

    changeColor('.user-card');

    gsap.from('.user-card', {
      x: 100,
      opacity: 0,
      stagger: {
        amount: 1,
        // from: 'center',
      },
    })
  }
  catch {
    console.log('에러가 발생했습니다!');
    renderEmptyCard(userCardInner);
    gsap.from('.empty-user-card', {
      opacity: 0,
    })
  }

  
}

renderUserList();


// 삭제
function handleDeleteCard(e) {
  const button = e.target.closest('button');

  if(!button) return;

  const article = button.closest('article');

  const index = article.dataset.index.slice(5);

  console.log(index);

  tiger.delete(`${ENDPOINT}/${index}`)
  .then(() => {
    //요청 보내고 렌더링하기
    clearContents(userCardInner);
    renderUserList();
  })
}

userCardInner.addEventListener('click', handleDeleteCard);


// 삽입
const createButton = getNode('.create');
const cancelButton = getNode('.cancel');
const doneButton = getNode('.done');

function handleCreate() {
  gsap.to('.pop', {autoAlpha: 1});
}

function handleCancel(e) {
  e.stopPropagation(); // 버블링 방지
  gsap.to('.pop', {autoAlpha: 0});
}

function handleDone(e) {
  e.preventDefault();

  const name = getNode('#nameField').value;
  const email = getNode('#emailField').value;
  const website = getNode('#siteField').value;

  console.log(name, email, website);

  const obj = {
    name,
    email,
    website,
  }

  tiger.post(ENDPOINT, {name, email, website})
  .then(() => {
    // 1. 팝업 닫기
    gsap.to('.pop', {autoAlpha: 0});
    // 2. 카드 컨텐츠 비우기
    clearContents(userCardInner);
    // 3. 유저 카드 렌더링 하기
    renderUserList();
  })
}

createButton.addEventListener('click', handleCreate);
cancelButton.addEventListener('click', handleCancel);
doneButton.addEventListener('click', handleDone);