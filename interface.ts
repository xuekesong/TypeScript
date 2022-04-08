interface Point {
  x: number,
  y: number
};

let drawPoint = (point : Point) => console.log({ x: point.x, y: point.y }); // { x: 23, y: 24 }
drawPoint({ x: 23, y: 24 });