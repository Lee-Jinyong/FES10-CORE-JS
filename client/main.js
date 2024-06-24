// 1. input value 값 가져오기
//    - input 선택하기
//    - input에게 input 이벤트를 걸어준다.
//    - input.value 값을 가져온다.

// 2. 숫자 더하기
//     - 숫자 형변환


const first = getNode('#firstNumber');
const second = getNode('#secondNumber')
const result = getNode('.result')

function handleInput() {
  const firstValue = +first.value;
  // const firstValue = Number(first.value);
  const secondValue = +second.value;
  // const secondValue = Number(second.value);
  const total = firstValue + secondValue;

  console.log(total);

  result.textContent = '';

  insertLast(result, total);
}

first.addEventListener('input', handleInput);
second.addEventListener('input', handleInput);