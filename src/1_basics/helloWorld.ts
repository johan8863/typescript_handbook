const greet = (person: string, date: Date): string =>
  `Hello ${person}, today is ${date.toDateString()}!`;

console.log(greet("Gisela", new Date()));

// on cases where the typescript checker can infer
// the type is better to leave it without typing
// for example at
let firstName = "Gisela"; //let firstName: string
