// Parameter Type Annotations
const greet = (name: string) => console.log(`Hello ${name}`);

// When a parameter has a type annotation, arguments to that function will be checked:
greet(38);

// Even if you don’t have type annotations on your parameters, TypeScript will still
// check that you passed the right number of arguments.
greet("Antonio", new Date());

// Return Type Annotations
const favoriteNumber = (): number => 88;

// Functions Which Return Promises
const favoriteNumberPromise = async (): Promise<number> => 63;
favoriteNumberPromise().then((number) => console.log(number));

// Anonymous Functions aren't typed
const names: Array<string> = ["Gisela", "Antonio", "Mayol"];

names.forEach((name) => console.log(name));
