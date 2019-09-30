interface StringArray {
    [index: number]: string;
}

// let myArray: StringArray;
// myArray = ['bod', '231'];
// let str = myArray[3];
// console.log(typeof str);

// /* ---- */
// let myArray2 : Array<string>;
// myArray2 = ['123', '123']
/**
 * ----
 */
// class Animal {
//     name: string;
// }
// class Dog extends Animal {
//     breed: string;
// }

// // 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!
// interface NotOkay {
//     [x: number]: Animal;
//     [x: string]: Dog;
// }
// interface NumberDictionary{
//     [index: string]: number; //这个就相当于你使用arr['0'],会自动转变为arr[0]
//     length: number;
//     name: number;
// }
// let myNumber:NumberDictionary;
// myNumber = [1,2,3];
interface ReadonlyStringArray {
    readonly [index: number]: string;
}
let myArray: ReadonlyStringArray = ["Alice", "Bob"];
// myArray[2] = "Mallory"; // error!
