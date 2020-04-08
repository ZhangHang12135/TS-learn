namespace Validation{
    export interface StringValidator {
        isAcceptable(s: string) : boolean;
    }
    let lettersRegexp = /^[A-za-z]+$/;
    let numbersRegexp = /^[0-9]+$/
    
    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(s: string) {
            return lettersRegexp.test(s);
        }
    }
    
    export class ZipCodeValidator implements StringValidator {
        isAcceptable(s: string){
            return s.length === 5 && numbersRegexp.test(s);
        }
    }
}



let strings = ['hello', '980916', '10699'];

let validators: { [s: string] : Validation.StringValidator; } = {};
validators['ZIP cod'] = new Validation.ZipCodeValidator();
validators['Letter only'] = new Validation.LettersOnlyValidator();

console.log(typeof validators['ZIP cod']);
for (let s of strings) {
    for(let name in validators){
        let isMatch = validators[name].isAcceptable(s);
        console.log(`'${ s }' ${ isMatch ? "matches" : "does not match" } '${ name }'.`);
    }
}