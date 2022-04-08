import { arrayBuffer } from "stream/consumers"

// 类型
// boolean
let isTrue: boolean = true;
console.log(isTrue);

// string
let stream: string = "i am string";
console.log(stream);

// number 数字类型
function add (num1:number, num2:number) {
  return num1 + num2;
}
console.log(add(2, 3));

// array 数组(Array)和元组(Tupple)
let list1: number[] = [1,2,3,4];
let list2: Array<number> = [1,2,3,4];
let list3 = [1,2,3,4];
let list4: any[] = [1, "2", true];
let list5: []

// 联合(Union)与文献(Literal)类型
let merge1 : string | number | boolean;
merge1 = 1;
function merge (num1 : number | string, num2 : number | string) {
  if (typeof num1 === 'string' || typeof num2 === 'string')
    return num1.toString() + num2.toString();
  else
    return num1 + num2;
}

let mergeNumber = merge(2, 5);
let mergeString = merge('hello', 'world');

console.log('merge: ' + mergeNumber, mergeString);

// 字面量类型(Literal)
let literal : 1 | '2' | true | [1,2,3];
literal = '2';
console.log('literal: ' + literal);

// 枚举类型
enum Color {
  red,
  green,
  blue
}

console.log(Color.red);

// any 和 unknown
let randomValue : any = 666;
randomValue = '222';
// randomValue(); // 运行时报错
console.log(randomValue);

let randomValue1 : unknown = 666;
randomValue1 = '222';
if (typeof randomValue1 === 'function') {
  randomValue1();
}
console.log(randomValue1);

// void undefined  never(执行完成不了，错误处理的时候使用)

// 类型适配(类型断言) type assertions
let message : any;
message = "abc";
// message.endsWith("c"); // any类型的值没有endsWith方法
let ddd = (<string>message).endsWith("c");
let ddd1 = (message as string).endsWith("c");
console.log(ddd);

// 函数类型
// ?: 表示该参数可选
let log = (message : string, code ?: number) => {
  console.log(message)
}
log("kkk", 555)

// interface
interface IPoint {
  x: number;
  y: number;
  drawPoint: () => void;
  getDistances: (p: IPoint) => number;
}

class Point implements IPoint {
  x: number;
  y: number;
  constructor (x?: number, y?: number) {
    this.x = x;
    this.y = y;
  }
  drawPoint = () => {
    console.log("x: ", this.x, " y: ", this.y);
  }
  getDistances = (p: IPoint) => {
    return Math.pow(p.x - this.x, 2) + Math.pow(p.y - this.y, 2);
  }
}

const point = new Point(2, 3); // ?参数可传可不传

// generics 泛型，可以不需要一直声明属性类型，根据填写的数据自动获取类型
let lastInArray = <T>(arr: T[]) => {
  return arr[arr.length - 1];
}

const l1 = lastInArray([1,2,3]);
const l2 = lastInArray(["a", "b", "c"]);
const l3 = lastInArray<string | number>(["a", "b", "c"]);

let makeTuple = <T, Y = number>(x: T, y: Y) => [x, y]; // 多个泛型

const v1 = makeTuple(1, "one");
const v2 = makeTuple<boolean, number>(true, 1);

// 断言
// javascript 中字符串不可修改，Immutable
// 第一，常量断言，可以用于断言任何一个类型
// 第二，他可以把对象中任何的原始类型成员变量都转换为readonly，只读属性
// 第三，甚至是数组这样的复杂数据类型，使用常量断言也同样可以完成只读类型的转换
const alex = {
  name: "阿莱克斯",
  job: "developer",
  arr: [1, 2, 3]
} as const; // 常量断言，const assertion

function layout(setting: {
  align: "left" | "center" | "right",
  padding: number
}) {
  console.log("Layout: ", setting);
}

const paramater = {
  align: "left" as const,
  padding: 0
}

layout(paramater);

// this 关键字, this关键字必须是函数的第一个参数
function double(this: { value: number }) {
  this.value = this.value * 2;
}

const vaild = {
  value: 10,
  double
};
vaild.double();
console.log(vaild.value);

// typeof
const center = {
  x: 0,
  y: 0,
  z: 0
};
type PointOf = typeof center; // 定义一个从center中指定类型给PointOf

// keyof操作符
type Person = {
  name: string;
  age: number;
  location: string;
};
const alexM: Person = {
  name: "alexM",
  age: 30,
  location: "Guangzhou"
};

type PersonKey = keyof Person;  // 获取Person中的所有参数, 等同于 "name" | "age" | "location"
function getValueByKey(obj: Person, key: PersonKey) {
  const value = obj[key];
  return value;
}
// 也可使用泛型
function setValueByKey<Obj, Key extends keyof Obj>(obj: Obj, key: Key) {
  const value = obj[key];
  return value;
}

const age = getValueByKey(alexM, "age"); // 30
// const email = getValueByKey(alexM, "email"); // 不存在的参数不可以获得

// readonly，映射修饰符 不可更改
type ReadonlyPoint = {
  readonly [key in keyof Point]: Point[key]
}
// ReadonlyPoint 等同于 Readonly
// 泛型
type Readonly<T> = {
  readonly [key in keyof T] : T[key]
}

// 映射修饰符
