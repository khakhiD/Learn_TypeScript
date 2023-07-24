/* Void 타입
  값을 반환하지 않는 함수의 반환 타입
*/

const hello: (msg: string) => void = (msg) => {
  console.log(`Hello ${msg}`);
};

hello('World!');

// return 키워드를 사용하지 않으면, 반환 값은 void이어야 한다.

// ✨ 명시적으로 return undefined를 하는 경우에는
// void와 undefined 타입을 반환 값의 타입으로 허용한다.

// --------------------------------------------------------

// Tuple(튜플) 타입
// 고정된 길이(length)의 배열 타입

const tup: [number, number] = [4, 5];
// tup[2] = 6; // [4, 5, 6] - Error!
// tup[3] = 7; // [4, 5, 6, 7] - Error!

// Tuple(튜플) 타입2
// [id, name, isValid]
const userA: [number, string, boolean] = [1, 'Dongho', true];
const userB: [number, string, boolean] = [2, 'Khakid', false];
// const userC: [number, string, boolean] = [3, 'Evan', true, 'evan@gamil.com']

// Tuple(튜플) 타입3
// 주의사항
const tup2: [number, number] = [4, 5];
// tup[2] = 6 // 이건 안되는데,
tup2.push(6); // [4, 5, 6] 이건 됨; 의도하지 않게 length가 바뀐다.
tup2.splice(2, 0, 6); // [4, 5, 6] 이것도 된다. length가 바뀐다!

const user: [number, string, boolean] = [1, 'Dongho', true];
user.push('thesecon@gmail.com'); // push, splice 등에서 튜플 길이가 바뀌어 버린다는 것.

// --------------------------------------------------------

/* Never 타입
  어떤 것도 할당할 수 없는 타입,
  혹은 정상적으로 종료되지 않는 함수의 반환 타입
*/

const nev: never[] = []; // 배열인지 튜플인지 알 수 없다.
// nev.push(6) 값을 할당할 수 없다.
// 그러니 꼭 배열 데이터를 만들 때에는 값의 타입을 지정해주는 것이 좋다.

// Never 타입2
const myError: (m: string) => never = (msg) => {
  throw `에러! - ${msg}`;
};
try {
  myError('Never 타입...'); // '에러! - Never 타입...'
} catch (err) {
  console.error(err);
}

// --------------------------------------------------------

/* Any 타입
  어떤 것도 할당할 수 있는 타입.
*/

let anything: any = 'Hello';
anything = 123;
anything = { a: 'A' };
anything = [1, 2, 3];

// 마지막으로 배열 데이터를 넣어주었지만,
// any 타입이라면 어떤 타입의 변수에도 할당이 가능하다.
const a: string = anything;
const b: number = anything;
const c: boolean = anything;

// 결국 JS를 쓰는 것이므로 좋은 방식이 아니고, 필요하지 않다면 지양할 것

// --------------------------------------------------------

/* Unknown 타입
  어떤 것도 할당할 수 있지만, 정확히 무엇인지 알 수 없는 타입.
  ✨ 다른 타입에는 할당할 수 없다. 정확히 무엇인지 알 수 없으니까.
 */

let anything2: unknown = 'Hello';
anything2 = 123;
anything2 = { a: 'A' };
anything2 = [1, 2, 3];

// const a2: string = anything2; // 할당 불가!
// const b2: number = anything2;
// const c2: boolean = anything2;

// any 대신 unknown을 주로 사용한다.

// 타입 가드를 사용해서 할당을 시킨다.
if (typeof anything2 === 'string') {
  const a2: string = anything2;
}

// --------------------------------------------------------

/*
  Any vs Unkown
*/

let any: any = 'hello';
console.log(any.toUpperCase()); // OK!
any = 123;
console.log(any.toUpperCase()); // OK! - 런타임 에러 발생!

let unk: unknown = 'hello';
// console.log(unk.toUpperCase()) // Error!

// Type Guard로 엄격하게 사용해야 한다.
if (typeof unk === 'string') {
  console.log(unk.toUpperCase()); // OK!
}

unk = 123;
// console.log(unk.toUpperCase()) // Error!
if (typeof unk === 'number') {
  // console.log(unk.toUpperCase()) // Error!
}

/*
  any라는 타입을 꼭 써야할 상황이 아니라면 사용을 지양하고,
  코드가 조금 늘어나더라도 unknown을 사용하자.
*/

// --------------------------------------------------------

/*
  Union(유니언) 타입
  2개 이상의 타입이 허용되는 타입
 */

let uni: string | number | number[];
uni = 'Hello';
uni = 123;
// uni = false
// uni = null
uni = [1, 2, 3];

// --------------------------------------------------------

/* 
  Intersection(인터섹션) 타입
  2개 이상의 타입이 '병합'된 타입
*/

// 타입을 커스텀해주는 타입 'type'
type UserA = {
  name: string;
  age: number;
};
type UserB = {
  isValid: boolean;
};

// const user_A: UserA = {
//   name: 'A', age: 12, isValid: true // Error!
// }

// const user_B: UserB = {
//   name: 'B', age: 85, isValid: false // Error!
// }

const user_C: UserA & UserB = {
  name: 'C',
  age: 40,
  isValid: false, // 두 타입 모두를 가져야 한다.
};

// 인터섹션 타입을 사용하지 않으려면 새로 타입을 만들어줘야 한다.
// 근데 이건 조금 낭비니까, 기존의 타입을 재활용하는 방법이다.
