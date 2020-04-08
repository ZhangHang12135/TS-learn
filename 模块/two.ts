import { StringValidator } from "./one";

export const numberRegexp = /^[0-9]+$/;

export class zipCodeValidator implements StringValidator {
    isAcceptable(s: string): boolean {
        return s.length === 5 && numberRegexp.test(s);
    }
    
}