class Box<T> {
  contents: T;
  /**
   * Generic class Box
   */
  constructor(value: T) {
    this.contents = value;
  }
}

const box = new Box("Hello Typescript!");
