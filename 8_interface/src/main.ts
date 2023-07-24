/* 
  인터페이스 (Interface)
  개체 (객체, 배열, 함수, 클래스)를 정의하는 타입
  인터페이스와 타입 별칭은 서로 호환되며 어떤 것을 사용해도 무관하다.
  개체를 정의할 때에는 인터페이스를 사용하는 것을 권장한다.

  // ?, readonly 키워드
*/

type UserT = {
  name: string;
  readonly age: number;
  isValid?: boolean; // 타입 별칭에서도 ?를 사용할 수 있다.
};

interface UserI {
  name: string;
  age: number;
  isValid?: boolean; // ? - 필수가 아닌 Optioanl 속성이 된다.
}

/* 
  문법적으로 type과 interface는 키워드부터 다르며,  
  인터페이스는 할당 연산자(=)를 사용하지 않는다.
  세미콜론을 사용한다면, interface 뒤에는 세미콜론도 붙지 않는다.
  타입 별칭과 인터페이스 내부의 속성 사이에는 쉼표를 넣지 않아도 구분한다.
  (쉼표를 넣어도 상관 없다.)
 */

// 1)
const user: UserI = {
  // UserI여도 에러가 나지 않음
  // isValid가 없어도 에러가 나지 않음
  name: 'Dongho',
  age: 27,
  isValid: false,
};

// 2)

const userR: UserT = {
  name: 'Dongho',
  age: 27,
  isValid: false,
};

user.age = 22; // 이 할당이 가능하지 않도록 만들고 싶다면?
// readonly를 사용하여 읽기 전용 속성으로 만들자. (UserT 참고)
// userR.age = 22; // - Error! 읽기 전용 속성
