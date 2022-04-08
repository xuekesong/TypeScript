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