/* 
  인터페이스 (Interface)
  클래스 - 생성(구문) 시그니처 (Construct Signature)

  인터페이스를 사용하여 함수 타입을 표현할 수 있으며,
  이를 위해서 호출 시그니처를 제공해야 한다.
*/

interface UserI {
  name: string;
  getName(): string;
  // class 뒤에 붙이지만 사실 class 자체의 속성이라기 보다,
  // 해당 클래스로 만든 인스턴스의 속성과 메서드라고 이해할 것
}

// ts 문법 - class x implements type
// 여기서 type은 User라는 클래스를 통해 만들어지는 인스턴스의 타입
class User implements UserI {
  public name;
  constructor(name: string) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}

const user = new User('Dongho');
user.getName(); // 'Dongho'

// 구문(생성) 시그니처(Construct signature)
interface UserC {
  new (n: string): UserI; // <-- 이 부분
}

function hello(userClass: UserC, msg: string) {
  const user = new userClass('Dongho');
  // userClass의 타입이 없거나 UserC가 아닌 경우에는 에러
  // - Error! : 'User' 형식에 구문 시그니처가 없습니다.
  return `Hello ${user.getName()}, ${msg}`;
}
hello(User, 'good morning!');

/*
  만약 자바스크립트의 class 문법에 익숙하지 않다면,
  자바스크립트의 class에 먼저 익숙해진 이후에
  이 부분을 다시 학습할 것을 권장
 */
