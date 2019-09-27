// function getName(person: string){
//     return 'Hello' + person
// }
// let user = 'zhanghang'
// console.log(getName(user)); //包错

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user:Person = { firstName: "Jane", lastName: "User" };

console.log(greeter(user))
// class Student {
//     fullName: string;
//     constructor(public firstName: string, public middleInitial: string, public lastName: string) {
//         this.fullName = firstName + " " + middleInitial + " " + lastName;
//     }
// }

// interface Person {
//     firstName: string;
//     lastName: string;
// }

// function greeter(person : Person) {
//     return "Hello, " + person.firstName + " " + person.lastName;
// }

// let user = new Student("Jane", "M.", "User");

// console.log(greeter(user))
// document.body.innerHTML = greeter(user);