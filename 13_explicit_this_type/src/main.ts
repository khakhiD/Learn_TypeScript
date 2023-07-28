/*
  함수의 명시적 this 타입
  (Explicit this)

  함수가 어떤 객체 내부에서 호출되었을 때 그 함수 내부에서 사용되는
  `this`의 타입을 명시적으로 지정하는 기능

  기존 JS는 함수가 어떤 객체에 바인딩되는지에 따라 `this`값이 동적으로
  결정되기 때문에 `this`의 타입을 추론하는 것이 어렵다.
  TS에서는 이러한 상황에서도 `this`의 타입을 정적으로 추론하기 위해서
  명시적으로 `this` 타입을 지정할 수 있다.
 */

interface User {
  // 1) interface 하나를 만든다.
  name: string;
}

function greet(this: User, msg: string) {
  // 2) this의 타입으로 넣어준다.
  return `Hello ${this.name}, ${msg}`;
}

const dongho = {
  name: 'Dongho',
  greet(msg: string) {
    return `Hello ${this.name}, ${msg}`;
  },
};
dongho.greet('Good morning!'); // 'Hello Dongho, Good morning!'

/* 
  JS 문법 TIP
  dongho 객체 내부의 greet() 함수는 화살표 함수가 아니다.
  일반 함수다. 메서드는 function 키워드를 생략할 수 있다.
  🔗 일반 함수에서의 this는 호출되는 위치에서 정의가 된다.
*/

// 위 dongho 객체는 아래와 같이 수정할 수 있다.
const dongho2 = {
  name: 'Dongho',
  greet,
};
dongho2.greet('Good morning!'); // 'Hello Dongho, Good morning!'

// 아래 예를 보자.
const neo = {
  name: 'Neo',
};
greet.call(neo, 'Have a nice day!');

/* 
  결론:
  내부에서 사용하는 this는 매개 변수의 첫 번째 매개변수 자리에
  this라는 이름으로 타입을 지정해주는 것이 가능하다.
*/
