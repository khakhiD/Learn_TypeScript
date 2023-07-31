/* 
  타입스크립트 제네릭 (Generic)
  조건부 타입 (Conditional Types)

  - 타입의 조건에 따른 다른 타입을 생성하는 기능
  - extends 키워드를 사용하여 타입 매배변수의 조건을 지정하고,
  조건에 따라 타입을 결정하는 방식으로 사용
  - 기본 문법: T extends U ? X : Y
    - `T`와 `U`는 타입 매개변수
    - `X`와 `Y`는 조건부 타입이 참과 거짓인 경우에 대한 결과 타입
    - `T`가 `U`를 확장하는 경우 `X`타입, 아닌 경우 `Y`타입
*/

type MyType<T> = T extends string | number ? boolean : never;
// T의 타입이 string이거나 number인 경우 boolean 타입이 되고,
// 아닌 경우 never 타입이 MyType의 타입이 된다.

const a: MyType<string> = true; // => MyType은 boolean이 된다.
const b: MyType<number> = true; // => MyType은 boolean이 된다.
// const c: MyType<null> = true; // => never가 되어야 한다.

// ------------------------------------------------------------
// 유틸리티 타입
type MyExclude<T, U> = T extends U ? never : T;
type MyUnion = string | number | boolean | null;

const e: MyExclude<MyUnion, boolean | null> = 123;

// Exclude 키워드
// const f: Exclude<MyUnion, boolean | null> = false;

// ------------------------------------------------------------
// 또 다른 예제
// keyof 키워드: key만 모아서 유니온 타입으로 만들어준다.
type IsPropertyType<T, U extends keyof T, V> = T[U] extends V ? true : false;

type Keys = keyof User; // 'name' | 'age'과 동일
interface User {
  name: string;
  age: number;
}

// User -> T, 'name' -> U, number -> V
const n: IsPropertyType<User, 'name', string> = true;
// 해석: T[U] ==> User['name']의 인덱싱에서 V(string)인가? => string이다.
// 때문에 true가 되어야 한다.

// ✨ 제네릭 문법 조건부 타입에서 infer 키워드 사용법을 알아보자. (다음 학습 내용)
