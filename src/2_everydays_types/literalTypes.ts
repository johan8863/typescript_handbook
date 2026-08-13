// literal types are a value of a primitive type used as the type of certain data structure
interface Person {
  first: string;
  last: string;
  gender: "f" | "m"; // literal type
}

const gisela: Person = {
  first: "Gisela",
  last: "Castro",
  // if other value different from "f" or "m" is provided, typescript will complain
  // also, as soon as you start providing the value inside the double quotes,
  // you'll see the options defined above as the only available
  gender: "f",
};
