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
