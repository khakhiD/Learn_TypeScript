/*
  타입 가드 (Guard)
  타입 추론이 가능한 특정 범위(scope) 안에서 타입을 보장
  typeof, instanceof, in
*/

// 1)
const btn = document.querySelector('button');
// btn이라는 변수가 null이 아닌 범위 내부에서 보장한다.
if (btn) {
  btn.classList.add('btn');
  btn.id = 'abc';
}

// instanceof를 사용해 확실하게 명시적으로 타입 가드 추가하기
if (btn instanceof HTMLButtonElement) {
  btn.classList.add('btn');
  btn.id = 'abc';
}

// 2)
function toTwoDecimals(val: number | string) {
  // typeof 키워드를 통해 타입 가드 추가하기
  if (typeof val === 'number') {
    val.toFixed(2);
  } else {
    val.slice(0, 2);
  }
}
toTwoDecimals(3.141592);
toTwoDecimals('Hello world!');

// 3) 타입 가드 함수, is 키워드
type UserA = { name: string; age: number };
type UserB = { id: string; email: string };

// 타입 가드 함수
// is 키워드 - 타입스크립트 문법
// 타입 가드가 목적인 함수에 user라는 변수가 UserA인지 확인하는 함수라는 것을 알려주는 것.

function isUserA(user: unknown): user is UserA {
  if (user && user.constructor === Object) {
    const u = user as UserA;
    return typeof u.name === 'string' && typeof u.age === 'number';
  }
  return false;
}

fetch('https//exam.site')
  .then((res) => res.json())
  .then((user: UserA | UserB) => {
    // console.log(user.name[0]) // UserB일 경우 name이 없다.
    // console.log(user.age - 10) // UserB일 경우 age가 없다.

    if (isUserA(user)) {
      console.log(user.name[0]);
      console.log(user.age - 10);
    }
  });

// 2)번에 타입 가드 함수 적용하기
function isNum(val: unknown): val is number {
  // val is number - val이 number인지 확인한다는 것을 명시
  return typeof val === 'number';
}

function toTwoDecimals2(val: number | string) {
  // typeof 키워드를 통해 타입 가드 추가하기
  if (isNum(val)) {
    val.toFixed(2);
  } else {
    val.slice(0, 2);
  }
}
toTwoDecimals2(3.141592);
toTwoDecimals2('Hello world!');
