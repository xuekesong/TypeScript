let message : any;
message = "imooc";
message.endsWith("c");

console.log(message); // 'imooc'
console.log(message.endsWith("c")); // true

let ddd = (<string>message).endsWith("c");
console.log(ddd); // true

let ddd2 = (message as string).endsWith("c");
console.log(ddd2); // true

// message初始any类型，即使赋值为字符串，也是any类型，无法使用编辑器内置的联想功能，给出字符串相关的属性和方法提示信息。所以需要进行类型适配(<string>message)或者(message as string)