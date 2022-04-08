enum Color {
  red,
  green,
  blue
};
console.log('Color: ');
console.log(Color.blue); // 索引2
console.log(Color.red); // 0

enum Color1 {
  red = 5,
  green,
  blue
};
console.log('Color1: ');
console.log(Color1.blue); // 索引7
console.log(Color1.red); // 5

enum Color2 {
  red = "red",
  green = "green",
  blue = "blue"
};
console.log('Color2: ');
console.log(Color2.blue); // blue
console.log(Color2.red); //red