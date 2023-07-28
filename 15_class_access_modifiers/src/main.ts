/* 
  타입스크립트 클래스
  클래스의 접근 제어자 (Access Modifiers) - JS 문법에는 없음
  - public (디폴트 값, 생략 가능): 공개
  - protected: 상속받은 자식 클래스에서는 접근 가능
  - private: 외부에서 접근 불가
*/

// main.js와 비교하면서 학습하기

class Animal {
  private name: string; // ~~~
  public readonly sound: string; // readonly 읽기 전용 속성
  constructor(name: string, sound: string) {
    this.name = name;
    this.sound = sound;
  }
  protected speak() {
    console.log(this.name);
    return this.sound;
  }
}

/* 파라미터 프로퍼티 (타입스크립트에서 제공)

class Animal {
  constructor(private name: string, public readonly sound: string) {}
  protected speak() {
    console.log(this.name);
    return this.sound;
  }
}

이렇게 속성을 줄여 쓸 수 있다.
클래스의 속성(멤버)의 타입과 접근 제어자를 앞에 붙여서 작성하면,
생성자의 파라미터를 클래스 속성으로 자동으로 변환해주는 기능이다.
따로 클래스 내부에 직접 속성을 선언하지 않아도 되어서 간결하다.
*/

class Dog extends Animal {
  public color: string; // <-- this.color 타입 지정
  private secret: string;
  constructor(name: string, sound: string, color: string) {
    super(name, sound);
    this.color = color;
    this.secret = 'secret';
    this.speak();
    // this.sound = '왈왈!' // - Error! 읽기 전용 속성
  }

  public getColor() {
    return this.color;
  }
  private getSecret() {
    return this.secret;
  }
}

const dog = new Dog('흰둥이', '멍멍!', 'white');
// dog.speak(); // - Error! protected 속성
dog.getColor(); // 'white'
// dog.getSecret(); // - Error! private 속성
// dog.name; // 자식 클래스 내부가 아닌 인스턴스에서는 접근 불가 (protected)
dog.sound; // '멍멍!'
dog.color; // 'white'
// dog.secret; // - Error! private 속성

/*
  static 메서드도 사용할 수 있다.
  주의 사항으로는 항상 접근 제어자 뒤에 붙여주어야 한다.

  readonly 속성은 초기화 코드 이후에 할당은 불가하다.
  이 키워드도 접근 제어자 뒤에 붙여주어야 한다.
*/
