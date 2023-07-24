/*
  타입 추론 (Inference)

  '추론'이란, 어떠한 판단을 근거로 삼아 다른 판단을 이끌어 낸다.
  1) 초기화된 변수
  2) 기본값이 지정된 매개변수
  3) 반환이 있는 함수
*/

// 1) 초기화된 변수
let a: string = 'Hello';
// a = 123 // - Error!
// a = true // - Error!

// 2) 기본값이 지정된 매개변수, 3) 반환이 있는 함수
// b는 주어진 기본 값의 타입으로 추론한다.
// b의 타입을 명시하지 않아도 된다.
function join(a: string, b = '') {
  // 문자열 + 문자열이므로 문자열 타입임을 추론이 가능하다.
  // 반환 타입을 명시하지 않아도 된다.
  return a + b;
}

join('Hello', 'World');
join('Good');

// const x: number = join('Hello', 'World') - Error!
