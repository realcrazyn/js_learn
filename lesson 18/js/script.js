//Incapsulation Modules
//1 
let number = 1;

(function() {
    let number = 2;
    console.log(number);
    return console.log(number + 3);         //создали и запустили 
    //анонимную самовызывабщуюся функцию для этого всю ункцию берем в скобки
}());

console.log(number);

//2
let user = (function() {
    let private = function() {
        console.log('I am private');
    }
    return {
        sayHello: function() {
             console.log('Hello');
        }
    }

}());

console.log(user);
console.log(user.sayHello());

//3
let user1 = (function() {
    let private = function() {
        console.log('I am private');
    };
    let sayHello = function() {
        console.log('Hello!');
   };

    return {
        sayHello: sayHello,
        private: private
    }

}());

console.log(user1.private());
console.log(user1.sayHello());
