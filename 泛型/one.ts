function ide<T>(arg: T): T {
    return arg;
}
interface Named{
    name: string;
    age: number;
}
let x : Named;
let y = {name: 'Arrr'};
x = y;