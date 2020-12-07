// function hello() {
//     console.log('Hello world!');
// }

// hello();

// function h1() {
//     console.log('Hello world!');
//  }

//  h1();

//  let ar = [1, 15, 4, 30, 42],
//     i = arr.sort(compareNum);

//     function compareNum(a,b) {
//         return a-b;
//     }

//     console.log(arr);



                //Динамическая типизация в JS
                // значит что тип данных динамичен, тоесть его можно поменять


                // to String

// 1) use String
console.log(typeof(String(4)));
// 2) Concatination
console.log(typeof('sdfsdf' + 4 + false));
console.log('https://vk.com/catalog/' + 5);

              // To Number
// 1) use Number
console.log(typeof(Number('5')));
// 2) унарный плюс
console.log(typeof(5 + +'5'));
console.log(5 + +'5');
console.log(5 + '5');
// 3) parseInt
console.log(typeof(parseInt('15px', 10)));
console.log(parseInt('15px', 10));

//let ans = +prompt('Hello?', '');


                // To boolean
//always false
// 0, '', null, undefined, NaN

let switcher = null;

if(switcher) {
    console.log('Working..');
}

switcher = 1;

if(switcher) {
    console.log('Working..');
}

// 2)
console.log(typeof(Boolean('5')));
console.log(Boolean('5'));
console.log(Boolean(''));
// 3)
console.log(typeof(!!('5')));
console.log(!!('5'));
console.log(!!(0));