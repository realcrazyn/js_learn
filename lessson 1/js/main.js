'use strict';


var number = 5;
var string = 'Hello';
var sym = Symbol();
var boolearn = true;
null;
undefined;
var obj = {};
console.log(4/0);
console.log('srting'*9);
let somthing;
console.log(somthing);

let person = {
    name: 'John',
    age: 25,
    isMarried: false
}

console.log(person['name']);

let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];

console.log(arr[0])

//alert('Hello World!');
// let answer = confirm('Are you here?');

// console.log(answer);

//let answer = +prompt('Are you 18 years old?', 'Yes');

// console.log(answer);
// console.log(typeof(answer));

// console.log("arr " + '- obj')
// console.log(4 + +' - obj')

let incr =10,
    decr = 10;


    console.log(incr++);
    console.log(decr--);
    console.log(5%2);
    console.log('2' === 2);

    let isChecked = false,
        isClose = false;

        console.log(isChecked || !isClose);
