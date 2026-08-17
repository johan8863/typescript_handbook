// Call Signatures
type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};

const doSomething = (fn: DescribableFunction) =>
  console.log(`${fn.description} returned ${fn(6)}`);

const greaterThanThree = (someArg: number) => someArg > 3;
greaterThanThree.description =
  "Returns true if the argument y greater than 3, false otherwise.";

doSomething(greaterThanThree);
