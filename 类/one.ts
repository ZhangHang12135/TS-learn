// class Greeter {
//     greeting: string;
//     constructor(message: string) {
//         this.greeting = message;
//     }
//     greet(): string {
//         return 'hello, ' + this.greeting;
//     }
// }
// let greeter = new Greeter('world');

class Animal {
    move(distanceInMeters: number = 0) {
        console.log(`Animal moved ${distanceInMeters}m`);
    }
}

class Dog extends Animal {
    bark() {
        console.log('Woof!Woof!');
    }
}

const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();
// test222