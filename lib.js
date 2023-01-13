//division
export function halfOf(x) {
    return x / 2;
    }

//multiplication
export function multiplication(x, y) {
    return x * y;
    }

export function doSomething(name) {
    console.log('Hey ' + name + '... You did something!!!')
    };

export let flag = false;
export function touch() {
flag = true;
}

//VAR
export function iterateVar() {
    for(var i = 0; i < 10; i++) {
        console.log(i);
    }
    console.log(i);
}

//LET
export function iterateLet() {
    for(let i = 0; i < 10; i++) {
        console.log(i);
    }
    console.log(i);
}

//CONST
// const me = 1;
// me = 2; //cannot reinitialize


    