/* 
  추상 클래스 (Abstract Class)
  타입스크립트에서 제공하는 추상 클래스는 JS의 클래스와도 다르고,
  일반적인 클래스와도 다른 특별한 종류의 클래스다.
  추상 클래스는 다른 클래스들이 상속받아 사용하기 위해 설계된 클래스이며,
  직접 인스턴스를 생성할 수 없는 클래스다.

  - 클래스의 특정 구조를 '강제'하기 위해 많이 사용된다.
  - 이전에 인터페이스와 비슷한 기능을 하는데 어떤 점이 다른지 알아보자.
*/

//------------------------추상클래스------------------------
abstract class AnimalA {
  abstract sound: string; // abstract 키워드
  abstract speak(): string;
  getColor() {
    // 키워드를 빼고 실제 구현이 가능(인터페이스와 큰 차이)
    return this.color;
  }
  // 메서드 뿐 아니라 속성도 구현이 가능
  constructor(public color: string) {}
}
class Dog extends AnimalA {
  constructor(public sound: string, color: string) {
    super(color);
  }
  speak(): string {
    return this.sound;
  }
}

const dog = new Dog('멍멍!', 'white');
dog.speak(); // '멍멍!'
dog.getColor(); // 'white'

//------------------------인터페이스------------------------
interface AnimalI1 {
  sound: string;
  speak(): string;
}
interface AnimalI2 {
  color: string;
  getColor(): string;
}
class Cat implements AnimalI1, AnimalI2 {
  constructor(public sound: string, public color: string) {
    // super() // 비교를 위한 코드. 원래 필요없음.
  }
  speak() {
    return this.sound;
  }
  getColor() {
    return this.color;
  }
}

const cat = new Cat('야옹~', 'yellow');
cat.speak(); // '야옹~'
cat.getColor(); // 'yellow'

/*--------------------------------------------------------
왜 추상 클래스를 써야 하는가?
- 인터페이스는 객체의 속성이나 메서드를 선언만 하고 구현은 하지 않는다.
- 추상 클래스는 구조를 제공하는 동시에 구현을 할 수 있다.
- 속성도 구현이 가능하다. (constructor 함수를 포함해야 함)

추상 클래스는 단일 상속만 가능하다.
- 인터페이스는 AnimalI1, AnimalI2 이런 식으로 다중 상속이 가능하다.
- 이러한 특성으로 인해서 추상 클래스는 주로 공통된 기능을 가지는
클래스들의 기본 구조를 제공하는데 사용된다.
- 때문에 추상 클래스는 Is-A 관계, 인터페이스는 Has-A 관계라고도 부른다.

상황에 맞게 추상 클래스와 인터페이스를 사용하면 된다.
--------------------------------------------------------*/

// 추상 클래스와 인터페이스는 함께 상속이 가능하다.
abstract class CatA {
  abstract name: string;
}
class Cat2 extends CatA implements AnimalI1, AnimalI2 {
  constructor(public name: string, public sound: string, public color: string) {
    super(); // 이제 super 함수가 생성자 함수에 들어가야 한다.
  }
  speak() {
    return this.sound;
  }
  getColor() {
    return this.color;
  }
}
// ✨ 주의할 점은 extends가 impletments보다 먼저 와야 한다.
