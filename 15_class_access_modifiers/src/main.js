class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
}

class Dog extends Animal {
  constructor(name, sound, color) {
    super(name, sound);
    this.color = color;
  }

  speak() {
    return this.sound;
  }
  getColor() {
    return this.color;
  }
}

const dog = new Dog('흰둥이', '멍멍!', 'white');
dog.speak(); // '멍멍!'
dog.getColor(); // 'white'
dog.name; // '흰둥이'
dog.sound; // '멍멍!'
dog.color; // 'white'
