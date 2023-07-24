/* 
  인터페이스 (Interface)
  함수 - 호출 시그니처 (Call Signature)

  인터페이스를 사용하여 함수 타입을 표현할 수 있으며,
  이를 위해서 호출 시그니처를 제공해야 한다.
*/

interface User {
  name: string;
  age?: number;
}

// ✨ 타입 별칭으로 함수 타입을 정의하는 방법
type GetUserNameT = (u: User) => string;

// ✨ 호출 시그니처가 사용된 인터페이스로 함수 타입을 정의하는 방법
// 이는 더 이상 개체를 정의하는 것이 아니라 함수를 정의하는 타입이 된다.
interface GetUserNameI {
  (u: User): string; // 함수가 반환하는 타입
}

const user: User = {
  name: 'Dongho',
};

const getUserName: GetUserNameI = (user: User) => user.name;
const username = getUserName(user);
console.log(username); // Dongho
