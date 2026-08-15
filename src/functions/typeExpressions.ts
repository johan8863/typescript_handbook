// Function Type Expressions

// The syntax (a: string) => void means “a function with one parameter, named a,
// of type string, that doesn’t have a return value”
const greeter = (fn: (a: string) => void) => fn("Hello Function");

const printToConsole = (s: string) => console.log(s);

greeter(printToConsole);
