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

// protected
// protected members are only visible to subclasses of the class they’re declared in.
// IMPORTANT!, only within the class no through instances
class Greeter {
  public greet(): void {
    console.log(`Hello ${this.getName()}`);
  }

  protected getName(): string {
    return "hi!";
  }
}

class SpecialGreeter extends Greeter {
  public howdy(): void {
    console.log(`Howdy ${this.getName()}`);
  }
}

const sg = new SpecialGreeter();
sg.howdy();
sg.getName(); // error
