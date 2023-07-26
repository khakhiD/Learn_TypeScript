/*
  인터페이스 확장 (Interface Extension)

  이미 정의된 인터페이스에 새로운 속성이나 메서드를
  추가하여 확장한 새로운 인터페이스를 정의하는 기능
 */

interface UserA {
  name: string;
  age: number;
}

interface UserB extends UserA {
  isValid: boolean;
}

const user: UserB = {
  name: 'Dongho',
  age: 27,
  isValid: true,
};

// --------------------------------------------

// 인터페이스는 중복 선언이 가능하다!
// 같은 이름의 인터페이스를 선언하면 덮어쓰는 것이 아니라
// 확장하여 인터페이스를 정의하게 된다.

interface User {
  name: string;
  age: number;
}

interface User {
  isValid: boolean;
}
const user2: User = {
  name: 'Dongho',
  age: 27,
  isValid: true,
};

// --------------------------------------------

// 중복 선언 시 주의사항
// ✨ 같은 속성을 정의할 때 타입이 다르면 안된다!

interface FullName {
  firstName: string;
  lastName: string;
}
interface FullName {
  middleName: string;
  // lastName: boolean // - Error!
}
const fullName: FullName = {
  firstName: 'Tomas',
  middleName: 'Sean',
  lastName: 'Connery',
};
