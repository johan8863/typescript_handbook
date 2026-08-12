// explicit way of typing variables
let firstName: string = "Gisela";
let age: number = 63; // again.. I know
let isGreat: boolean = true;

// allow inference
// Note taken from docs at https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
// For the most part you don’t need to explicitly learn the rules of inference.
// If you’re starting out, try using fewer type annotations than you think - you might be
// surprised how few you need for TypeScript to fully understand what’s going on.
let ifirstName = "Gisela";
let iage = 63; // again.. I know
let iisGreat = true;
