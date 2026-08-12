// Defining a Union Type
const printId = (id: number | string): void => {
  // to work with union types, code must be narrowed
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
};

printId(88);

printId("g12c14r63");

const welcomePeople = (x: Array<string> | string) => {
  if (Array.isArray(x)) {
    console.log("Hello," + x.join(" and "));
  } else {
    console.log("Welcome lone traveler:", x);
  }
};

welcomePeople(["Gisela", "Antonio", "Johan"]);
welcomePeople("John Doe");
