# 认识TypeScript
TypeScript是JavaScript的一个超集，强类型的定义。
强类型：
  - 规范我们的代码
  - 代码编译阶段就能及时发现错误
  - 在原生js的基础上加上了一层类型定义
注意：TypeScript无法在浏览器中运行，需要借助编译器将TS转为JS(命令：tsc ts文件名)

# 开发环境配置
- [官网地址](https://www.typescriptlang.org/)
- 安装node.js, node -v查看node版本，查看node是否安装成功，出现版本号说明安装成功
- 全局安装TypeScript编译器 npm install -g typescript, tsc -v查看TypeScript版本，出现版本号说明安装成功
- 代码编辑器，自己选择，我选择的是vscode，他支持TypeScript的语法，以后缀.ts结尾表示TypeScript的文件格式；文件名.ts
- 编译ts文件： tsc xxx.ts
- 执行Js文件：node xxx.js

# TypeScript工作流
- 初始化项目`npm init`
- 安装插件`npm install --save-dev lite-server`,lite-server用于开发环境的轻量级服务器。此服务器可以根据项目根目录下index.js文件自动部署在localhost:3000上，当编译完成后自动刷新页面。

# 定义变量/常量
- `var` 声明变量
- `let` 声明变量，解决var带来的作用域困难的问题
- `const` 声明常量

# ts基本类型
- `number` 数字类型，可以表示整数、浮点数以及正负数
  ```javascript
  let num : number = 1;
  ```
- `string` 字符串类型，可以用单引号、双引号以及反引号表示
  ```javascript
  let str : string = "imooc";
  ```
- `boolean` 布尔类型，有`true`和`false`两个值
  ```javascript
  let isTrue = true; // 会自动映射
  let b : boolean = false; // 手动映射
  ```
- `Array` 数组，用`[]`表示，数组中可以存放任意类型的数据
  ```javascript
  let list1 : number[] = [1, 2, 3, 4, 5];
  let list2 : Array<number> = [1, 2, 3, 4, 5];
  let list3 = [1, 2, 3, 4, 5];
  let list4 : any[] = [1, 2, true, "4", 5];
  ```
- `tuple` 元组，固定类型固定长度的数组
  ```javascript
  let p1 : [number, string] [1, "imooc"];
  ```
- `enum` 枚举类型，可以自定义，具体可看[enum.ts](./enum.ts)
  ```javascript
  enum Color {
    red = 5,
    green,
    blue
  };
  console.log(Color.blue); // 索引7
  console.log(Color.red); // 5
  ```
- `any` 任意类型，不知道是什么类型的时候就用any，定义类型之后还可以修改为任意类型，看代码[any.ts](./any.ts)
  ```javascript
  let randomValue : any = 666;
  randomValue = "string";
  ```
- `unknown` 未知类型，不保证类型但是能保证类型安全，看代码[unknown](./unknown.ts)
  ```javascript
  let randomValue : unknown = 666;
  ```
- `void` 不存在，函数没有返回值的时候为void类型
  ```javascript
  function fn() : void {};
  ```
- `undefined` 存在但是没有值
  ```javascript
  function fn() : undefined {
    return;
  }
  ```
- `never` 不能停止，例如一个函数永远执行不完
  ```javascript
  function fn() : never {
    throw {message};
  } // 抛出异常while循环
  ```
- `union` 联合类型, 看代码[union.ts](./union.ts)
  ```javascript
  let union : string | number = 6; // 定义多种类型
  let union1 : 0 | 1 | 2 = 0; // 固定取值类型
  ```
- `literal` 预定义(字面量)类型，看代码[literal.ts](./literal.ts)
  ```javascript
  let literal : 1 | '2' | true | [1,2,3] = 1;
  ```
- `type` 类型适配，通过TypeScript进行类型适配的过程就叫做类型断言，看代码[_type.ts](./_type.ts)
  ```javascript
  let message : any;
  message = "imooc";
  message.endsWith("c");
  console.log(message.endsWith("c")); // true
  ```
- `function` 函数，基本用法与es6一样，看代码[_function.ts](./_function.ts)
  ```javascript
  let log = (message : string) => console.log(message);
  log("imooc");
  ```
- `object` 对象类型, key of type键类型对。编辑器会自动匹配类型或者手动进行类型匹配，不能使用object来笼统定义{}，调用的时候会报错，object类型可以认为是any类型的一个子集
- `interface` 接口，高内聚低耦合。功能相关的事物放在一个集合中形成一个模块，模块之间应该是相互独立的，保持低耦合的状态。使用方式：给函数参数定义接口类型，看代码[interface.ts](./interface.ts)
  ```javascript
  interface Point {
    x: number,
    y: number
  };

  let drawPoint = (point : Point) => console.log({ x: point.x, y: point.y }); // { x: 23, y: 24 }
  drawPoint({ x: 23, y: 24 });
  ```
- `class` 类，使用class关键自定义的称之为类。可以使用implements关键字，通过类来实现某个接口interface，js中构造函数不能重载，一个类有且仅有一个constructor。如果实例化的时候不知道传入的值，可以使用?(可选项)或者赋值默认值，访问修饰符(public, private, protected)，在声明构造函数的同时顺便完成成员变量的声明以及初始化
  ```javascript
  interfacce xx{};
  class x implements xx{};
  ```
- `public` 访问修饰符，公有的(属性和方法默认是公有的)
- `private` 访问修饰符，私有的，私有变量一般以下划线开头表示，例如_x, set和get处理私有变量(编译器版本需要在es5以上) `tsc -t es5 xx.ts`
- `protected` 访问修饰符，保护的
- `module` 模块，一个文件可以理解为一个模块，与es6中的module相似，有两种导入导出方式。模块内的代码需要export导出，然后其他文件中使用import导入
- `Generics` 泛型，类型<> == 泛型，看代码[generics.ts](./generics.ts)
- `type guards` 类型守卫，也称作类型保护，就是一些表达式，他们在运行时检查以确保在某个作用域里的类型
  ```javascript
  type Square = {
    size: number
  }
  type Rectangle = {
    width: number;
    height: number;
  }
  ```