/* normal function */
// function earth(){

//   let water = true;
//   let gravity = 10;

//   return function(value){
//     gravity = value;

//     return [water,gravity]
//   }
// }

/* arrow function */
const earth = () => {

  let water = true;
  let gravity = 10;
  
  return  (value) => {
    gravity = value;

    return [water,gravity]
  }
}

const ufo = earth();

ufo(-10);


// HTML 버튼 제어
// normal function
// function handleClick() {
//   let isClicked = false;
  
//   function inner() {
//     if(!isClicked) {
//       document.body.style.background = 'orange'
//     } else {
//       document.body.style.background = 'white'
//     }
//     isClicked = !isClicked;
//   }
//   return inner;
// }

// button.addEventListener('click', handleClick());


// arrow function
const button = document.querySelector('button');

const handleClick = (() => {
  let isClicked = false;
  console.log('왜 눌러!');

  return () => {
    if(!isClicked) {
      document.body.style.background = 'green';
    } else {
      document.body.style.background = 'black';
    }
  
    isClicked = !isClicked;
  }
})();

button.addEventListener('click', handleClick);



function useState(init) {
  let value = init;

  function read() {
    return value;
  }

  function write(newValue) {
    value = newValue;
  }

  return [read, write];
}

// const result = useState(10);

// const getter = result[0];
// const setter = result[1];

// console.log(getter());
// setter(1000);
// console.log(getter());


//구조 분해 할당 사용하기
const [getNumber, setNumber] = useState(10);

console.log(getNumber());
setNumber(1000);
console.log(getNumber());