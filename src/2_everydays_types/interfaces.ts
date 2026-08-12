// An interface declaration is another way to name an object type
interface Point {
  x: number;
  y: number;
}

const coordinates = (point: Point): void => {
  console.log(`Coordinate's x value is ${point.x}`);
  console.log(`Coordinate's y value is ${point.y}`);
};

coordinates({ x: 3, y: 4 });
