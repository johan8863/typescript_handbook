// simple extending
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  salary: number;
}

interface Athlete {
  routine: string;
}

// multiple
interface IronMan extends Employee, Athlete {
  goal: string;
}
