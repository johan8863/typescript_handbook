// Classes may have static members. These members aren’t associated
// with a particular instance of the class. They can be accessed through
// the class constructor object itself:
class MyClass {
  public static x = 0;
  public static printX(): void {
    console.log(MyClass.x);
  }
}

console.log(MyClass.x);
MyClass.printX();

// static blocks
// static blocks of code allow to write initialization code
// while accessing a class methods and properties
class Foo {
  // the hash(#) symbol is a shortcut for the private visibility
  // and adds runtime execution
  static #count = 0;

  get coutnt() {
    return Foo.#count;
  }

  static increaseCriteria = (criteria: number): boolean => criteria > 4;

  static {
    const increase = Foo.increaseCriteria(6)
      ? Foo.#count++
      : (Foo.#count = Foo.#count);
  }
}
