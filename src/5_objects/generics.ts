interface Box<T> {
  contents: T;
}

interface Person {
  name: string;
  age: number;
  sex: "f" | "m";
}

const boxString: Box<string> = { contents: "Hello Generics!" };

const boxNumber: Box<number> = { contents: 3.14 };

const boxPerson: Box<Person> = {
  contents: {
    name: "Gisela",
    age: 63, // please don't
    sex: "f",
  },
};

// the Array type
const doSomething = (values: Array<string>) =>
  values.forEach((value) => console.log(value));

let hello: string[] = ["hello", "world", "!"];

doSomething(hello);
doSomething(new Array("hello", "generics", "!"));
