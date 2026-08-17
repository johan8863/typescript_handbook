// Generic Functions
const firstElement = <T>(arr: T[]): T | undefined => arr[0];

// type inferred
const s = firstElement(["a", "b"]);

// explicit type
const n = firstElement<number>([1, 2]);

// more than one generic type
const maps = <Input, OutPut>(
  input: Input[],
  fn: (arg: Input) => OutPut,
): OutPut[] => input.map(fn);

// constraints
const longest = <T extends { length: number }>(first: T, second: T) =>
  first.length > second.length ? first : second;
