### 基础类型
这里的顺序我还是按照官方文档的来吧，懒得弄了，这些东西java也有，理解起来比较舒服
#### Boolean(同其他语言)
```ts
let isDone: boolean = false;
```
#### Number
```ts
let a: number = 6;
let b: number = 0xf00d; // 16进制
let c: number = 0b1010; // 2进制
let d: number = 0o744; // 8进制
```

#### String
```ts
let str: string = 'change world'
```
#### Array
注意啦，这里就有点不同
```ts
let arr: number[] = [1,2,3];
let list: Array<number> = [1,2,3]
```

#### Tuple 元组
我感觉就像js的数组,就是将不同的元素类型融合在一起，添加使用push,删除pop,数组的方法它都有
**有一点，赋值的时候，一定要更声明的类型对应，就相当于ES6的解构赋值**
这里官方文档上给出的越界操作会报错，我不知道是我vscode的代码检测还是ts3.6更新之后的原因，反正不要用下标去越界就好了
```ts
let x: [string, number, number[]];
x = ['2',2,[1,2]]
```

#### enum 枚举
跟c#的枚举很像(虽然我也不知道，长的啥样)，不过我到觉得和mock.js里面的自定义随机组数很像。比如一周七天，一年12个月之类的，可以这样用
```ts
enum Color {Red, Green, Blue}
let c: Color = Color.Green
```
转码之后是这个样子的
```js
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
// 互相映射 默认从0开始
```
因为有一个互信映射的原因，转码出来的对象的长度上其两倍，仅仅只是部分类数组对象

#### Any 任何
个人感觉，就是js的那个，只不过ts需要去声明
```ts
let notsure: any = 4;
notsure = 'aaa'
```

#### void 无返回
这个学过c应该都知道的
```ts
let name1 = '123' // 我这里用name,报命名冲突的错误，好像是在vscode的扩展里面的错
function setName(_name): void {
    name1  = _name
}
```

#### null undefined 
同js, 没啥用，官网说的
这两个是其它类型的子类型
#### never
表示那些 永远不存在的值
```ts
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}
```
never 应该可以算是最低级的类型的了

#### Object 一切皆对象，我赵日天接一切

#### 类型断言
其他语言的强制类型转换？
```ts
// <>语法
let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;
// as语法
let someValue: any = "this is a string";

let strLength: number = (someValue as string).length;
```
