var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
;
console.log('Color: ');
console.log(Color.blue); // 索引2
console.log(Color.red); // 0
var Color1;
(function (Color1) {
    Color1[Color1["red"] = 5] = "red";
    Color1[Color1["green"] = 6] = "green";
    Color1[Color1["blue"] = 7] = "blue";
})(Color1 || (Color1 = {}));
;
console.log('Color1: ');
console.log(Color1.blue); // 索引7
console.log(Color1.red); // 5
var Color2;
(function (Color2) {
    Color2["red"] = "red";
    Color2["green"] = "green";
    Color2["blue"] = "blue";
})(Color2 || (Color2 = {}));
;
console.log('Color2: ');
console.log(Color2.blue); // blue
console.log(Color2.red); //red
