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
    for(let j = 0; j < 10; j++) {
        console.log(j);
    }
    // console.log(j);
}

//CONST
// const me = 1;
// me = 2; //cannot reinitialize

//Default
export function add(x, y = 0) {
    return x + y;
}

//Rest
export function userFriends(user, ...friends) {
    console.log(user + ' has ' + friends.length + ' friends');
}

//Spread
export function userTopFriends(firstFriend, secondFriend,
    thirdFriend, fourthFriend) {
    console.log(firstFriend);
    console.log(secondFriend);
    console.log(thirdFriend + '\n' + fourthFriend);
}

    