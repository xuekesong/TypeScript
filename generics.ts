// 写法一
// let lastInArray = <T>
// (arr : Array<T>) => {
//   return arr[arr.length - 1];
// }

// 写法二
let lastInArray = <T>(arr: T[]) => {
  return arr[arr.length - 1];
}
const l1 = lastInArray([1,2,3,4]);
const l2 = lastInArray(['a', 's']);

// 多泛型
let makeTuple = <T, Y>(x: T, y: Y) => [x, y];
const v1 = makeTuple(1, 'i');