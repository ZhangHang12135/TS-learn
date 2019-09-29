interface Point{
    readonly x: number;
    readonly y: number;
}

let p1:Point = {x: 10, y: 10};

let a: number[] = [1,2,3];
let ro: ReadonlyArray<number> = a;
a.push(1);
// ro[12] = 1; //Error
console.log(a,ro);