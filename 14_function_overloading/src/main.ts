/* 
  함수 오버로딩 (Function Overloading)
  함수 오버로딩이란 같은 이름에 매개변수만 다른 여러 함수를 선언하는 것
*/

function addString(x: string, y: string): string {
  console.log(x, y);
  return x + y;
}

function addNumber(x: number, y: number): number {
  console.log(x, y);
  return x + y;
}

addString('Hello', 'World');
addNumber(12, 34);
// addString('Hello', 34); // - Error!
// addNumber(12, 'World'); // - Error!

// 서로 로직은 동일한데, 타입만 다르다.
// 굳이 2개의 함수로 관리해야 하는가?
// TS의 오버로딩 기능을 활용해보자.

function add(x: string, y: string): string; // <-- 오버로드 구현부
function add(x: number, y: number): number; // <-- 오버로드 구현부
function add(x: any, y: any): any {
  // <--------- 오버로드 선언부
  console.log(x, y);
  return x + y;
}

add('Hello', 'World');
add(12, 34);
// add('Hello', 34); // - Error! 일치하는 오버로드가 없습니다.
// add(12, 'World'); // - Error! 일치하는 오버로드가 없습니다.

/* 
  주의사항
  1) 유니온 타입으로 만들면 되지 않나요? (x: string | number, ...)
  - x + y를 할 때 두 타입이 일치하는 지 알 수 없기 때문에
  의도한 것과 달라짐. 오버로드를 사용해야 함.
  2) 오버로드 구현부는 항상 선언부 위에 위치해야 함
  즉, 위 예제와 같은 형태로만 존재할 수 있음.
*/

// 인터페이스로 사용하기

interface UserBase {
  name: string;
  age: number;
}
interface User extends UserBase {
  // updateInfo 함수에 오버로드된 시그니처 정의
  updateInfo(newUser: UserBase): User; // 단일 매개변수로 받는 방법
  updateInfo(name: string, age: number): User; // 개별로 받는 방법
}
const user: User = {
  name: 'Dongho',
  age: 27,
  updateInfo: function (nameOfUser: UserBase | string, age?: number) {
    if (typeof nameOfUser === 'string' && age !== undefined) {
      this.name = nameOfUser;
      this.age = age;
    } else if (typeof nameOfUser === 'object') {
      this.name = nameOfUser.name;
      this.age = nameOfUser.age;
    }
    return this;
  },
};

// 1) UserBase 타입의 객체 데이터가 들어갈 때
console.log(user.updateInfo({ name: 'Neo', age: 22 }));
// {name: 'Neo', age: 22, updateInfo: ƒ}

// 2) string 데이터(와 number 데이터)가 들어갈 때
console.log(user.updateInfo('Leon', 51));
// {name: 'Leon', age: 51, updateInfo: ƒ}
