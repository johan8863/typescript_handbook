// anonimous types

const greetAnonimous = (person: { name: string; age: number }) =>
  console.log(`Hello ${person.name}`);

// interfaces
interface PersonInterface {
  name: string;
  age: number;
}

const greetInterface = (person: PersonInterface) =>
  console.log(`Hello ${person.name}`);

// types alias
type PersonType = {
  name: string;
  age: number;
};

const greetTypeAlias = (person: PersonType) =>
  console.log(`Hello ${person.name}`);
