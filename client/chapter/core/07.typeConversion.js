/* --------------------- */
/* Type Conversion       */
/* --------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2024;

console.log(String(YEAR));
console.log(typeof String(YEAR));
console.log(YEAR + '');
console.log(typeof(YEAR + ''));

// undefined, null
let friends;

console.log(String(friends));
console.log(typeof String(friends));
console.log(friends + '');
console.log(typeof(friends + ''));

let days = null;

console.log(String(days));
console.log(typeof String(days));
console.log(days + '');
console.log(typeof(days + ''));

// boolean
let isClicked = true;

console.log(String(isClicked));
console.log(typeof String(isClicked));
console.log(isClicked + '');
console.log(typeof(isClicked + ''));


/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined
let friend;

console.log(Number(friend));
console.log(typeof(Number(friend)));
console.log(friend * 1);
console.log(friend / 1);
console.log(+friend);
console.log(typeof(Number(friend * 1)));
console.log(typeof(Number(friend / 1)));
console.log(typeof(Number(+friend)));

// null
let money = null;

console.log(Number(money));
console.log(typeof(Number(money)));
console.log(money * 1);
console.log(money / 1);
console.log(+money);
console.log(typeof(Number(money * 1)));
console.log(typeof(Number(money / 1)));
console.log(typeof(Number(+money)));

// boolean
// true = 1, false = 0
let isMarried = true;

console.log(Number(isMarried));
console.log(typeof(Number(isMarried)));
console.log(isMarried * 1);
console.log(isMarried / 1);
console.log(+isMarried);
console.log(typeof(Number(isMarried * 1)));
console.log(typeof(Number(isMarried / 1)));
console.log(typeof(Number(+isMarried)));

// string
let num = '100';

console.log(Number(num));
console.log(typeof(Number(num)));
console.log(num * 1);
console.log(num / 1);
console.log(+num);
console.log(typeof(Number(num * 1)));
console.log(typeof(Number(num / 1)));
console.log(typeof(Number(+num)));

// numeric string
const width = '120.5px';

console.log(parseInt(width, 10));
console.log(parseFloat(width, 10));

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들 

console.log(Boolean(friend));
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(NaN));
console.log(Boolean(' '));
console.log(Boolean('0'));
