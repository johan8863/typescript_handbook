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
// console.log(user.age);

// legitimate bugs
const announcement = "Hello World!"

// How quickly can you spot the typos?
// announcement.toLocaleLowercase();
// announcement.toLocalLowerCase();

console.log(announcement.toLocaleLowerCase());

// logic errors

const value = Math.random() > 0.5 ? "a" : "b"

if (value !== "a") {
  console.log("b")
} else if (value === "b") { // This comparison appears to be unintentional because the types '"a"' and '"b"' have no overlap.
  // unreachable
  console.log('whatever');
}

