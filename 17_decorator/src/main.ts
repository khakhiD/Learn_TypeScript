/* 
  클래스 데코레이터(Decorator)
  
  데코레이터는 클래스 자체를 수정하는 메타프로그래밍 형태로 사용되며,
  클래스와 클래스 멤버들에 추가적인 동작을 부여하거나, 클래스를 변경 또는 확장하는데
  사용된다. 클래스 전체를 수정하는 클래스 데코레이터와 클래스 데코레이터를 반환하는 함수로서,
  데코레이터를 매개변수화하고 더 많은 유연성을 제공하는 팩토리 데코레이터로 나뉜다.
  
  - 중요도는 높지 않지만 유용한 타입스크립트 기능
  - 클래스, 메서드, 속성에 어노테이션을 붙이거나 기능을 추가할 수 있다
  - 데코레이터는 하나의 함수라고 보면 된다
  - 클래스에 메타데이터를 추가하거나 의존성 주입 컨테이너를 만들거나 라우팅 등을 구현할 수 있다.
  - 주요 프레임워크와 라이브러리들을 보면 클래스 데코레이터를 사용해서
  기능을 추가하거나 확장성을 제공하는데 사용한다.
  - 주의할 점으로는 데코레이터는 적용된 순서대로 실행되고, 하위 클래스부터 상위 클래스의 순서로 실행된다.
  - 또한 데코레이터 함수는 클래스의 인스턴스 생성과는 관련 없이 클래스가 정의되는 시점에 실행된다.

  예시.
  클래스의 메서드가 호출될 때마다 로그를 남기는 기능을 추가하고 싶다면?
  - 메서드 데코레이터를 사용할 수 있다
*/

function deco(target: any) {
  console.log(target);
  return class {
    constructor(public a: any) {
      console.log(this.a);
    }
  };
}

// @deco
class User {
  constructor(public name: string) {}
  hello(msg: string) {
    return `Hello ${this.name}, ${msg}`;
  }
}

const dongho = new User('Dongho');
const neo = new User('Neo');
console.log(dongho);
console.log(neo);

// 데코레이터는 추후에 다시 학습할 것
