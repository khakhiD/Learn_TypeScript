// 문자, 숫자, 불린 타입
let str: string = 'Hello World!';
let num: number = 123;
let boo: boolean = true;

str = 'Good morning';
num = 456;
boo = false;

// 객체 타입
const obj: { a: number } = { a: 0 }; // 초기값 넣어주기 (방법1)
obj.a = 123;
// obj.b = 456

// 배열 타입
// const arr: string[] = []; // 이 패턴이 더 많이 쓰인다.
const arr: Array<string> = []; // 위와 같은 의미의 다른 패턴
arr.push('123');

// 함수 타입
const hello: (a: string, b: number) => string = function (msg, xyz) {
  // ...
  return msg;
};

const hello2 = function (msg: string, xyz: number): string {
  // ...
  return msg;
};

function hello3(msg: string, xyz: number): string {
  return msg;
}

hello('World', 123);
hello2('World', 456);
hello3('World', 789);

// Enum(이넘) 타입
// 타입 + 값(데이터)의 집합으로 역방향 매핑(reverse mapping) 기능 제공

const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
console.log(week[0]); // 'Sun'
console.log(week[6]); // 'Sat'
console.log(week.findIndex((d) => d === 'Sun')); // 0
console.log(week.findIndex((d) => d === 'Sat')); // 6

enum Week {
  Sun,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
}
console.log(Week[0]); // 'Sun'
console.log(Week[6]); // 'Sat'
console.log(Week.Sun); // 0
console.log(Week.Sat); // 6

// enum 타입은 아래와 같은 JS 코드로 변환된다.
const EnumWeek = {
  0: 'Sun',
  1: 'Mon',
  2: 'Tue',
  3: 'Wed',
  4: 'Thu',
  5: 'Fri',
  6: 'Sat',
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
};
console.log(EnumWeek[0]); // 'Sun'
console.log(EnumWeek[6]); // 'Sat'
console.log(EnumWeek.Sun); // 0
console.log(EnumWeek.Sat); // 6

// Enum(이넘) 타입2
enum Colors {
  Red,
  Green = 4,
  Blue,
}
console.log(Colors.Red); // 0
console.log(Colors[0]); // 'Red'

// 인덱스 값을 변경해주었을 경우에는
console.log(Colors.Green); // 4
console.log(Colors.Blue); // 5

// 주의사항
enum Colors2 {
  Red = 'r',
  Green = 4,
  Blue = 7,
}
console.log(Colors2.Red);
console.log(Colors2[4]);
// console.log(Colors2.r); // 📌역방향 매핑을 하기 위해서는 값이 숫자여야 한다.

export {};
