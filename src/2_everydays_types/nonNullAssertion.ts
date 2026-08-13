// TypeScript also has a special syntax for removing null and undefined
// from a type without doing any explicit checking. Writing ! after any
// expression is effectively a type assertion that the value isn’t null or undefined:

const receivesNullOrUndefined = (value?: number | null) =>
  console.log(value!.valueOf());

receivesNullOrUndefined(55); // no is on you to be sure you'll always provide the value
