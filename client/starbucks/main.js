const aList = document.querySelectorAll('nav a');
const depthList = document.querySelectorAll('.depth');
const header = document.querySelector('#header');

const h = t => t.style.height = 0

// 매개 변수가 한 개면
// depthList.forEach((item) => {
//   console.log(item)
// })
// 아래처럼 쓸 수 있다
// depthList.forEach(console.log);

aList.forEach((a) => {
  a.addEventListener('mouseenter', () => {
    const target = a.lastElementChild;

    // 모든 depth의 높이를 0
    depthList.forEach(h);

    target.style.height = '100px';
  })
})

header.addEventListener('mouseleave', () => depthList.forEach(h));