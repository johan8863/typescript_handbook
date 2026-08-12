const greet = (person: string, date: Date): string =>
  `Hello ${person}, today is ${date.toDateString()}!`;

console.log(greet("Gisela", new Date()));
