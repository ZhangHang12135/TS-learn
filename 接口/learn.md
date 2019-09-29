### 接口
TypeScript的核心原则之一是对值所具有的结构进行类型检查。 它有时被称做“鸭式辨型法”或“结构性子类型化”。 在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。

#### interface
就是一个object,自定义的拿种
#### 可选属性
就是属性加一个`？`
#### 只读属性
个人感觉const的升级版
```ts
interface Point{
    readonly x: number;
    readonly y: number;
}

let p1:Point = {x: 10, y: 10};
```
```ts
// 只读数组 去掉了所有可变数组方法，就push啊之类的吧
// 但是可以通过改变a,来间接改变ro
let a: number[] = [1,2,3];
let ro: ReadonlyArray<number> = a;
a.push(1);
ro[12] = 1; //Error
```

#### 额外的属性检测
其实在写第一个的时候，如果你错误的把传入的参数设置为colour,他是会报错的，在ts中，
我到认为没必要去绕过检测，你写错了，改过来就好了。。。ts的目标不就是为了强制类型吗，可以避免代码上线之后的许多bug

#### 函数类型
使用接口描述函数类型
```ts
interface SearchFunc {
    (source: string, substring: string): boolean;
}
// 其实还是一样的道理，跟对象接口，只是一个类型限定罢了
let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
}
```