/* 
  타입스크립트 제네릭(Generic)
  - 타입을 매개변수화하여 코드의 재사용성과 유연성을 높이는 기능
  - 함수나 클래스를 여러 종류의 타입에서 동작할 수 있도록 만들 수 있다
  - 타입에 대한 추상화를 가능하게 하여, 하나의 함수 또는 클래스가 다양한
  타입을 다룰 수 있도록 한다.

  - 함수 제네릭, 클래스 제네릭, 인터페이스 제네릭
*/

// 예제1
function toObj(a: string, b: string): { a: string; b: string } {
  // 굳이 반환타입 명시
  return { a, b };
}

toObj('A', 'B');
// toObj(1, 2) // - Error!
// toObj(true, false) // - Error!

// 함수 오버로딩으로 해결할 수 있긴 하다.
function toObj2(a: string, b: string): { a: string; b: string };
function toObj2(a: number, b: number): { a: number; b: number };
function toObj2(a: boolean, b: boolean): { a: boolean; b: boolean };
function toObj2(
  a: string | number | boolean,
  b: string | number | boolean
): { a: string | number | boolean; b: string | number | boolean } {
  return { a, b };
}

toObj2('A', 'B');
toObj2(1, 2);
// toObj2(true, false) // - Error!

//------------------------------------------------------------------
//코드가 너무 길다... 제네릭 문법을 사용해보자.
// T는 Type의 준말인데, 타입 변수의 이름의 컨벤션이다.
function toObjGeneric<T extends string | number | boolean>(
  a: T,
  b: T
): { a: T; b: T } {
  return { a, b };
}

// 호출
// 호출 시 타입 추론을 통해 자동으로 타입이 지정되는 방법
toObjGeneric('A', 'B');
toObjGeneric(1, 2);
// 호출 시 타입을 명시적으로 지정하는 방법
toObjGeneric<boolean>(true, false);

// 다른 타입이 들어가도 괜찮다?! 의도와 다르게 동작한다.
// <T>에 extends를 넣어서 제약조건을 걸어준다.
// toObjGeneric(null, null) // - Error! string, number, boolean이 아님

//------------------------------------------------------------------
// 인터페이스 제네릭
interface ToObj<T> {
  a: T;
  b: T;
}

// 제네릭 문법은 타입을 인수처럼 넣어주거나 매개변수처럼 받을 수 있다.
function toObjGeneric2<T extends string | number | boolean>(
  a: T,
  b: T
): ToObj<T> {
  return { a, b };
}
