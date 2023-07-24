/*
  타입 단언 (Assertion)

  '단언'이란, 주저하지 아니하고 딱 잘라 말함.
  as, ! (Non-null 단언 연산자)

  => 개발자가 TS에게 단언하는 것
*/

// 1)
const btn = document.querySelector('button');
// btn.classList.add('btn') // - Error! null일 수 있다.
(btn as HTMLButtonElement).classList.add('btn');
(btn as HTMLButtonElement).id = 'abc';

// 선언 시에 단언하기 (이후 null일 것을 가정하지 않음)
const btn2 = document.querySelector('button') as HTMLButtonElement;
btn2.id = 'abc';
btn2.classList.add('btn');

// 선언 시에 단언하기2 (non-null 연산자)
// null이 아니라는 것만 단언하고 타입은 알 수 없다.
const btn3 = document.querySelector('button')!;
btn3.classList.add('btn');
btn3.id = 'abc';

// 2)
function toTwoDecimals(val: number | string, isNum: boolean) {
  // 여기서는 non-null 연산자를 사용할 수 없다.
  if (isNum) {
    // val.toFixed(2) // - Error!
    (val as number).toFixed(2);
  } else {
    // val.slice(0, 2) // - Error!
    (val as string).slice(0, 2);
  }
}
toTwoDecimals(3.141592, true);
toTwoDecimals('Hello world!', false);

// 3)
const json = '{ "name": "Dongho", "age": 27 }';
const user = JSON.parse(json);
console.log(user.email); // - OK! 그런데 email 속성이 없음!

// TS가 문자 데이터 내부 구조까지 알 수는 없다.
// TS에게 내부 타입 구조를 알려주어야 한다.

const user2 = JSON.parse(json) as { name: string; age: number };
// console.log(user2.email) // - Error!

// 4) 할당 단언
let num: number;
// console.log(num) // - Error! 값이 할당되기 전에 사용됨

let num2!: number;
console.log(num2); // - OK! 초기화가 되어졌다고 TS가 판단함
