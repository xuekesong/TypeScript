var log = function (message) { return console.log(message); };
log("imooc"); // imooc
// 使用?可以省略参数，不传值默认undefined
var log1 = function (message, code) { return console.log(message); };
log1("imooc"); // imooc
// 设置参数默认值
var log2 = function (message, code) {
    if (code === void 0) { code = 0; }
    return console.log(message);
};
log2("imooc"); // imooc
