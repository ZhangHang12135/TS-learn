
// enum Color {Red, Green, Blue}
// let c: Color = Color.Green
// enum Week {Mon = 1, Tues = 2, Wed = 3, Thur = 4, Fri = 5, Sat = 6, Sun = 7}
// let notsure: any = 4;
// notsure = 'aaa'

// var name1: string = '123'
// function setName(_name: string): void {
//     name1  = _name
// }
// console.log(c);
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