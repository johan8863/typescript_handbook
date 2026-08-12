const hello = "Hello World!";
// the scenario changes here, even without typing the variable,
// typescript detects the type by a feature called Type Inference

// the calling is underlined in red and hovering, you'll see

// This expression is not callable.
// Type 'String' has no call signatures.
console.log(hello());
