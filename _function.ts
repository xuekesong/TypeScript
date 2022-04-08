let log = (message : string) => console.log(message);
log("imooc"); // imooc

// 使用?可以省略参数，不传值默认undefined
let log1 = (message: string, code? : number) => console.log(message);
log1("imooc"); // imooc

// 设置参数默认值
let log2 = (message : string, code : number = 0) => console.log(message);
log2("imooc"); // imooc

// 不管是可选参数还是默认参数，都必须在参数列表末尾，按照从后往前的顺序进行排列