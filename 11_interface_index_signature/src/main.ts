/* 
  인터페이스 (Interface)
  인덱싱 가능 - 인덱스 시그니처 (Index Signature)
  인덱싱이 가능한 타입(배열, 유사배열, 객체)을 인터페이스로 정의하는 방법
  예제 인터페이스 내부는 인덱스 시그니처로 작성되었다.
  [`key값`: 타입]: `value타입`
*/

// --------------------------------------------------------------

// Array
interface Arr {
  [key: number]: string;
}
const arr: Arr = ['A', 'B', 'C'];
console.log(arr[1]); // 'B'

// Array-Like
interface ArrLike {
  [key: number]: string;
}
const arrLike: ArrLike = { 0: 'A', 1: 'B', 2: 'C' };
console.log(arrLike[1]); // 'B'

// Object
interface Obj {
  [key: string]: number;
}
const obj: Obj = { a: 123, b: 456, c: 789 };
console.log(obj['b']); // 'B' // 문자 데이터로도 인덱싱 가능
console.log(obj.b); // 'B'

// --------------------------------------------------------------

interface User {
  [key: string]: string | number;
  name: string;
  age: number;
}
const user: User = {
  name: 'Dongho',
  age: 27,
  email: 'kakkiid@gmail.com',
  city: '부산',
  zip: 12345,
  // isValid: true
  // `[문자]: 문자 | 숫자` 에 해당하지 않는 값이기 때문에 에러
};

// --------------------------------------------------------------

interface User2 {
  // 인덱스 시그니처
  [key: string]: string | number;
  name: string;
  age: number;
}
const user2: User2 = {
  name: 'Dongho',
  age: 27,
};
console.log(user2['age']); // 27

interface Payload {
  // Payload 타입의 인덱스 시그니처
  [key: string]: unknown;
}

function getValues(payload: Payload) {
  if (payload && payload.constructor === Object) {
    return Object.keys(payload).map((key) => payload[key]);
  }
}
getValues(user2); // ['Dongho', 27]

// --------------------------------------------------------------

// 타입 인덱싱

interface User3 {
  name: string;
  age: number;
}
// 동적인 속성 이름을 가진 객체의 타입을 정의하는 방법
// User['name']은 string 타입이고, User['age']는 number 타입이다.
const a: User['name'] = '123';
const b: User['age'] = 123;
