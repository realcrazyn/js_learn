// function first() {
//     setTimeout(function(){
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//     console.log('I learn' + lang);
//     callback();
// }

// function done() {
//     console.log('Ive passed 3d lesson');

// }

// learnJS('JavaScript', done);        
// //  функция done не выполнится пока не завершит выполнение основная функция learnJS


let options = {
    width: 1024,
    height: 1024,
    name: 'test'
};

console.log(options.name);
options.bool = false;
options.colors = {
    border: 'black ',
    bg: 'red'
};
delete options.bool;
console.log(options);

for (let key in options) {
    console.log('Property ' + key + ' has value ' + options[key]);
}

console.log(Object.keys(options).length);

// let arr =['first',2,3,'four',5];



// // arr.pop();
// // arr.push('5');
// // arr.shift();
// // arr.unshift('1');

// // for(let i = 0; i < arr.length; i++) {
// //     console.log(arr[i]);
// // }

// arr.forEach(function(item, i, mass) {
//     console.log(i + ': ' + item + ' (massive: ' + mass + ')');
// });

// console.log(arr);

// let mass = [1,3,4,6,7];
// for (let key of mass) {
//     console.log(key);
// }


// let ans = prompt('', ''),
//     arr = [];

// arr = ans.split(',');
// console.log(arr);

// let arr = ['aasd', 'asdas', 'asqw', 'asdqw  q'],
// i = arr.join(', ');

// console.log(i)



let arr = [1,15,4],
 i = arr.sort(compareNum);

 function compareNum(a,b) {
     return a-b;
 }

console.log(i);


let soldier = {
    health : 400,
    armour : 100
}

let john = {
    health : 100
};

john.__proto__= soldier;
console.log(john);
console.log(john.armour);

