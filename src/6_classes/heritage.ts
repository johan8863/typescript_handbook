// implements clauses

interface Pingable {
  ping(): void;
}

class Sonar implements Pingable {
  ping(): void {
    console.log("ping!");
  }
}

class Ball implements Pingable {
  pong(): void {
    console.log("pong..");
  }
}

// extends clauses

class Animal {
  move(): void {
    console.log("Moving along..");
  }
}

class Dog extends Animal {
  woof(times: number): void {
    for (let index = 0; index < times; index++) {
      console.log("Wookf!!");
    }
  }
}

const d = new Dog();

d.move();
d.woof(4);

// overriding methods
class Base {
  greet(): void {
    console.log("Hello World!");
  }
}

class Derived extends Base {
  greet(name?: string): void {
    if (name === undefined) {
      super.greet();
    } else {
      console.log(`Hello ${name.toUpperCase()}!!!`);
    }
  }
}

const drv = new Derived();
drv.greet();
drv.greet("Gisela");
