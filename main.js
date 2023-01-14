import { halfOf, multiplication, doSomething, flag, touch, iterateVar, iterateLet, add, userFriends, userTopFriends, parent } from "./lib.js";

console.log("Division");
console.log(halfOf(40));

console.log("Multiplication");
console.log(multiplication(5, 6));

console.log(doSomething('Milan'));

console.log(flag);
touch();
console.log(flag);

//class start
class Vehicle {
    constructor(wheels) {
    this.wheels = wheels;
    }
    toString() {
    return '(' + this.wheels + ' wheels)';
    }
}

class Car extends Vehicle {
    constructor(color) {
    super(4);
    this.color = color;
    }
    toString() {
    return super.toString() + ' car colored: ' + this.color;
    }
}

let car = new Car('red');
console.log(car.toString());
console.log(car instanceof Car);
console.log(car instanceof Vehicle);
//class end

//arrow function start
const author = {
    fullName: "Bob Alice",
    books: ['Ikea', 'Harry Potter', 'The Hobbit', 'Heidi', 'Lolita'],
    printBooks() {
    this.books.forEach(book => console.log(book + ' by ' + this.fullName));
    }
};

console.log(author.printBooks());
//arrow function end

console.log("--- var ---");
iterateVar();

console.log("--- let ---");
iterateLet();

console.log("--- Default ---");
console.log(add(2));
console.log(add(2, 3));

console.log("--- Rest ---");
userFriends('Milan', 'Shrush', 'Jhanvi', 'Isha');

console.log("--- Spread ---");
userTopFriends(...['Milan', 'Shrush', 'Jhanvi', 'Isha']);


// parent();
const childFN = parent();
childFN;
childFN();