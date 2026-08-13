// as mentioned in unions, to work with more that one primitive data type
// code must be narrowed, that means, a logic for type cases must be included
const padLeft = (padding: number | string, input: string): string => {
  // to the conditional checking if/else with typeof that
  // is needed to narrow the code down is called 'type guards'
  if (typeof padding === "number") {
    return " ".repeat(padding) + input;
  }
  return padding + input;
};

// typeof type guards
// "string"
// "number"
// "boolean"
// "bigint"
// "symbol"
// "undefined"
// "object"
// "function"
