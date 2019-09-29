// function printLabel(labelledObj: {label: string}){
//     console.log(labelledObj.label);    
// }
// let myObj = { size: 10, label: 'Size 10 object'};
// printLabel(myObj);

// interface labelledValue {
//     label: string;
// }
// function printLabel(labelledObj: labelledValue){
//     console.log(labelledObj.label)
// }
// let myObj = {size: 10, label: "Size 10 Object"};
// printLabel(myObj);
interface SquareConfig{
    color: string;
    width?: number;
}
function createSquare(config: SquareConfig): {color: string; area: number}{
    let newSquare = {color: 'white', area: 100};
    if(config.color){
        newSquare.color = config.color;
    }
    if(config.width){
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySqare = createSquare({color: '222',op:2} as SquareConfig);
console.log(mySqare);