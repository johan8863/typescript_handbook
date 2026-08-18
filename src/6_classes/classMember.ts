// class members

// smallest possible class
class Base {}

// Fields
class Point {
  // typescript will complain about fields not initialized
  x: number;
  y: number;
}

const point = new Point();
point.x = 4;
point.y = 4;

// console.log(`${point.x}, ${point.y}`);

// initialization, first approach
class Greet {
  name: string;

  /**
   * Greet class showing static initialization.
   */
  constructor() {
    this.name = "Hello!";
  }
}

// bypassing initialization with assertion operator
class OkGreeter {
  name!: string;
}

// readonly
class Greeter {
  // This prevents assignments to the field outside of the constructor
  readonly name: string = "Hello!";
  /**
   *
   */
  constructor(otherName: string) {
    if (otherName !== undefined) {
      this.name = otherName;
    }
  }

  err() {
    this.name = "not ok";
  }
}

// constructors
class PointConstructor {
  x: number;
  y: number;

  /**
   *
   */
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}

// super classes
class Person {
  private _name: string;
  private _age: number;

  /**
   *
   */
  constructor(name = "Someone", age = 0) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  set name(val) {
    this._name = val;
  }

  get age(): number {
    return this._age;
  }

  set age(v: number) {
    this._age = v;
  }
}

class Employee extends Person {
  salary: number;

  /**
   *
   */
  constructor(name = "Someone", age = 0, salary = 0.0) {
    super(name, age);
    this.salary = salary;
  }

  // methods
  presentation(): string {
    return `Name: ${this.name}, age: ${this.age}, salary: ${this.salary}`;
  }
}

const emp = new Employee("Gisela", 63, 4499.88);

console.log(emp.presentation());
