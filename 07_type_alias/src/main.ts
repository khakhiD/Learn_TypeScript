/*
  타입 별칭 (Alias)
  새로운 타입 조합을 생성(커스텀)
*/

// type의 이름은 파스칼케이스로 짓는 것이 컨벤션
type MyTypeName = string | number;
type MyArray = MyTypeName[]; // === 'string | number[]'

type UserA = {
  name: string;
  age: number;
};

type UserB = {
  isValid: boolean;
};

type UserX = UserA & UserB;

// 할당 해보기
const a: MyTypeName = 'A';
const b: MyArray = [1, 'A', 'B', 2, 3];
const userA: UserA = {
  name: 'Dongho',
  age: 27,
};
const userB: UserB = {
  isValid: false,
};
const userX: UserX = {
  name: 'Dongho',
  age: 27,
  isValid: true,
};
