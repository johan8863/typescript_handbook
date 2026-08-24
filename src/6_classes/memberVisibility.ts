// pubic
class Greet {
  // Because public is already the default visibility modifier,
  // you don’t ever need to write it on a class member, but might
  // choose to do so for style/readability reasons.
  public greet(): void {
    console.log("Hi!");
  }
}

const g = new Greet();
g.greet();
