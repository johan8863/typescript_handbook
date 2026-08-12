const coordinates = (point: { x: number; y: number }): void => {
  console.log(`The coordinate's x value is ${point.x}`);
  console.log(`The coordinate's x value is ${point.y}`);
};

coordinates({ x: 3, y: 4 });

// Optional Properties
const personalData = (data: { first: string; last: string; age?: number }) => {
  console.log(`First name: ${data.first}`);
  console.log(`Last name: ${data.last}`);
  if (data.age) {
    console.log(`Last name: ${data.age}`);
  }
};

personalData({ first: "Gisela", last: "Castro" });
