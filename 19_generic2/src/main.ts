/* 
  타입스크립트 제네릭(Generic)
  - 타입을 매개변수화하여 코드의 재사용성과 유연성을 높이는 기능
  - 함수나 클래스를 여러 종류의 타입에서 동작할 수 있도록 만들 수 있다
  - 타입에 대한 추상화를 가능하게 하여, 하나의 함수 또는 클래스가 다양한
  타입을 다룰 수 있도록 한다.

  - 함수 제네릭, 클래스 제네릭, 인터페이스 제네릭
*/

// T, U, V는 그저 컨벤션이다. 원하는대로 바꾸어도 무관.
// interface User<T, U, V> {
//   name: T,
//   age: U,
//   isValid: V
// }

// [T,U,V]는 배열 타입이 아니라 튜플 타입이라는 것 주의
type User<T, U, V> = { name: T; age: U; isValid: V } | [T, U, V];
type U = User<string, number, boolean>;

const dongho: U = {
  name: 'Dongho',
  age: 27,
  isValid: true,
};
const neo: U = {
  name: 'Neo',
  age: 22,
  isValid: false,
};
const amy: U = {
  name: 'Amy',
  age: 54,
  isValid: true,
};

// 아래의 배열 데이터도 포함하고 싶다. => 타입 별칭 사용하기
const evan: U = ['Evan', 77, false];
const lewis: U = ['Evan', 77, false];
const leon: U = ['Evan', 77, false];

// ------------------------------------------------------------
// 클래스 제네릭

class Basket<T extends string | number> {
  public items: T[]; // 추후 인스턴스를 생성할 때 넣어주는 타입
  constructor(...rest: T[]) {
    // 나머지 매개변수는 들어오는 인수를 배열 데이터로 받아줄 수 있다.
    this.items = rest;
  }
  putItem(item: T) {
    this.items.unshift(item); // 배열의 가장 첫 아이템으로 넣음
  }
  takeOutItems(count: number) {
    // 제거할 아이템을 배열로 반환
    return this.items.splice(0, count);
  }
}

// string을 타입으로 지정한 경우
const fruitsBasket = new Basket<string>('Apple', 'Banana', 'Cherry');
fruitsBasket.putItem('Orange'); // ['Orange', 'Apple', 'Banana', 'Cherry']
const fruits = fruitsBasket.takeOutItems(2); // ['Orange', 'Apple'] 반환
console.log(fruits); // ['Orange', 'Apple']
console.log(fruitsBasket.items); // ['Banana', 'Cherry']

// number를 타입으로 지정한 경우
const moneyBasket = new Basket<number>(100, 1000, 10000);
moneyBasket.putItem(50000); // [50000, 100, 1000, 10000]
const money = moneyBasket.takeOutItems(2); // [50000, 100] 반환
console.log(money); // [50000, 100]
console.log(moneyBasket.items); // [1000, 10000]

// ------------------------------------------------------------
// 🎉 제약조건 추가해보기
// <T extends string>
// 그랬더니 'putItem('Orange')'에 에러가 뜬다.
// => "'Orange'" 형식의 인수는 '"Apple" | "Banana" | "Cherry"' 형식의 매개 변수에 할당될 수 없습니다.
// 그 이유는?
// => new Basket('Apple', 'Banana', 'Cherry'); 에서 타입 체커는 타입 추론을 최대한 구체적으로 하게 된다.
// 세 문자를 제외하면 허용하지 않게 된다.
// 이럴 때는 명시적으로 타입을 작성해주면 된다.
// => new Basket<string>('Apple', 'Banana', 'Cherry');
