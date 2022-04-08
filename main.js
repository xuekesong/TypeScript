"use strict";
exports.__esModule = true;
// 类型
// boolean
var isTrue = true;
console.log(isTrue);
// string
var stream = "i am string";
console.log(stream);
// number 数字类型
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(2, 3));
// array 数组(Array)和元组(Tupple)
var list1 = [1, 2, 3, 4];
var list2 = [1, 2, 3, 4];
var list3 = [1, 2, 3, 4];
var list4 = [1, "2", true];
var list5;
// 联合(Union)与文献(Literal)类型
var merge1;
merge1 = 1;
function merge(num1, num2) {
    if (typeof num1 === 'string' || typeof num2 === 'string')
        return num1.toString() + num2.toString();
    else
        return num1 + num2;
}
var mergeNumber = merge(2, 5);
var mergeString = merge('hello', 'world');
console.log('merge: ' + mergeNumber, mergeString);
// 字面量类型(Literal)
var literal;
literal = '2';
console.log('literal: ' + literal);
// 枚举类型
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
console.log(Color.red);
// any 和 unknown
var randomValue = 666;
randomValue = '222';
// randomValue(); // 运行时报错
console.log(randomValue);
var randomValue1 = 666;
randomValue1 = '222';
if (typeof randomValue1 === 'function') {
    randomValue1();
}
console.log(randomValue1);
// void undefined  never(执行完成不了，错误处理的时候使用)
// 类型适配(类型断言) type assertions
var message;
message = "abc";
// message.endsWith("c"); // any类型的值没有endsWith方法
var ddd = message.endsWith("c");
var ddd1 = message.endsWith("c");
console.log(ddd);
// 函数类型
// ?: 表示该参数可选
var log = function (message, code) {
    console.log(message);
};
log("kkk", 555);
var Point = /** @class */ (function () {
    function Point(x, y) {
        var _this = this;
        this.drawPoint = function () {
            console.log("x: ", _this.x, " y: ", _this.y);
        };
        this.getDistances = function (p) {
            return Math.pow(p.x - _this.x, 2) + Math.pow(p.y - _this.y, 2);
        };
        this.x = x;
        this.y = y;
    }
    return Point;
}());
var point = new Point(2, 3); // ?参数可传可不传
// generics 泛型，可以不需要一直声明属性类型，根据填写的数据自动获取类型
var lastInArray = function (arr) {
    return arr[arr.length - 1];
};
var l1 = lastInArray([1, 2, 3]);
var l2 = lastInArray(["a", "b", "c"]);
var l3 = lastInArray(["a", "b", "c"]);
var makeTuple = function (x, y) { return [x, y]; }; // 多个泛型
var v1 = makeTuple(1, "one");
var v2 = makeTuple(true, 1);
// 断言
// javascript 中字符串不可修改，Immutable
// 第一，常量断言，可以用于断言任何一个类型
// 第二，他可以把对象中任何的原始类型成员变量都转换为readonly，只读属性
// 第三，甚至是数组这样的复杂数据类型，使用常量断言也同样可以完成只读类型的转换
var alex = {
    name: "阿莱克斯",
    job: "developer",
    arr: [1, 2, 3]
}; // 常量断言，const assertion
function layout(setting) {
    console.log("Layout: ", setting);
}
var paramater = {
    align: "left",
    padding: 0
};
layout(paramater);
// this 关键字
function double() {
    this.value = this.value * 2;
}
var vaild = {
    vaue: 10,
    double: double
};
vaild.double();
console.log(vaild.vaue);
