const hello = "Hello World!";
// the scenario changes here, even without typing the variable,
// typescript detects the type by a feature called Type Inference

// the calling is underlined in red and hovering, you'll see

// This expression is not callable.
// Type 'String' has no call signatures.
// console.log(hello());


// the same applies for unexisting objects attributes or methods
const user = {
  name: 'Gisela',
  gender: 'f'
}

// Property 'age' does not exist on type '{ name: string; gender: string; }'.
// age... mom, no pun intended
console.log(user.age);
