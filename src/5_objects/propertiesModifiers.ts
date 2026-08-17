// optional properties
// marking a property with ? makes it optional

interface Shape {
  shapeType: "circle" | "square";
}

interface PaintOptions {
  shape: Shape;
  posX?: number;
  posY?: number;
}

const shape: Shape = { shapeType: "circle" };
const paintShape = ({ shape, posX = 0, posY = 0 }: PaintOptions) => {
  console.log(`Shape type is: ${shape.shapeType}`);
  console.log(`Position x is: ${posX}`);
  console.log(`Position y is: ${posY}`);
};

paintShape({ shape });
paintShape({ shape, posX: 4 });
paintShape({ shape, posY: 8 });
paintShape({ shape, posX: 8, posY: 8 });

// readonly properties
interface SomeInterface {
  readonly prop: number;
}

const printSome = (someObject: SomeInterface) => {
  // it is possible to read the property
  console.log(someObject.prop);

  // but can't be modified
  someObject.prop = 63;
};

// the readonly modifier allows to update a property properties,
// but not the whole property at once
interface Home {
  readonly resident: {
    name: string;
    age: number;
  };
}

// allowed
const visitForBirthday = (home: Home) => {
  console.log(`Happy birthday ${home.resident.name}!`);
  home.resident.age++;
};

// forbidden
const updateResident = (home: Home) => {
  home.resident = {
    name: "John Doe",
    age: 65,
  };
};
