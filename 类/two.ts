/**
 * @description 公有成员变量 私有成员变量
 */

//  class Animal {
//      private name: string;
//      public constructor(theName: string){this.name = theName};
//      public move(distanceInMeters: number = 2) {
//          console.log(`${this.name} moved ${ distanceInMeters}m`);
//      }
//  }
//  new Animal('zhanghang').move();
class Animal {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

class Rhino extends Animal {
    constructor() { super("Rhino"); }
}

class Employee {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}
let animal = new Animal("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");

animal = rhino;
//animal = employee; // Error