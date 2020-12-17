
// 3)
// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log('Hello! ' + this.name);
//     }
// }

// User.prototype.exit = function(name) {
//     console.log('User ' + this.name + ' left!');
// }

// let ivan = new User('Ivan', 25);
// let alex = new User('Alex', 20);

// console.log(ivan);
// console.log(alex);

// ivan.exit();

//1)
// 'use strict';
// function showThis(a,b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }
// showThis(5,6);
// showThis(5,5);

//2)
// let obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         console.log(this);
//         function shout(){
//             console.log(this);
//         }
//         shout();
//     }
// };
// obj.sum();



//4)
// let user = {
//     name: 'John'

// };
// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// console.log(sayName.call(user, 'Smith')); //принимает аргументы ввиде строки
// console.log(sayName.apply(user, ['Snow']));//принимает аргументы ввиде массива

// function count(number) {
//     return this * number;
// }

// let double = count.bind(2);  //this станет тем  что записали в (2)  
// console.log(double(3));
// console.log(double(10));


//1) Просто вызов функции - без стрикта получим window/ с 'use strict' получим undefined
// 2) Метод объекта - this = самому объекту
// 3) Конструктор (new) - this = новый созданный объект
// 4) указание конкретного контекста - call, apply, bind

let btn = document.querySelector('button');
btn.addEventListener('click', function() {
    console.log(this);
    this.style.backgroundColor = 'red';
    function showThis() {
        console.log(this);
    }
    showThis();
})



let age = document.getElementById('age');
 
function showUser(surname, name) {
         alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}
 
showUser.apply(age, ["Горький","Максим"]);


// let str = "1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer";
// //let a = str.match(/\d/g);

// console.log(eval(str.match(/\d/g).join('+')))
