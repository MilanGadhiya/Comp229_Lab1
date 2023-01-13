import { halfOf, multiplication, doSomething, flag, touch  } from "./lib.js";

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

