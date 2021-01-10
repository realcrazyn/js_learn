// function alphabetPosition(text) {
//    t = text.toLowerCase();
//     let mas = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//     function bruteForce(symbol) {
//         for (let i = 0; i < mas.length; i++) {
//             if (symbol == mas[i]) {
//                 return i+1
//             } 
//         }
//     }
//     let textMas = [];
//     for (let i = 0; i < t.length; i++) {
//         textMas.push(bruteForce(t[i]));
//     }

//     let answer = [];
//     for (let i = 0; i < textMas.length; i++) {
//         if (textMas[i] != undefined) {
//         answer.push(textMas[i]);
//         }
//     }
//     textAnswer = answer.join(' ');

//     return textAnswer;
// }

// alphabetPosition("The sunset sets at twelve o' clock."); 
// alphabetPosition("The narwhal bacons at midnight."); 

// let dgf = "The sunset sets at twelve o' clock.";

// // console.log(dgf.toUpperCase().match(/[a-z]/gi).map( (c) => c.charCodeAt() - 64)
// //     .join(' '));

//  //   console.log(dgf.match(/[a-z]/gi).map( (c) => c.charCodeAt() - 64));



//     function sum (numbers) {
//         "use strict";
//         let counter = 0;
//       for (let i =0; i < numbers.length; i++) {
//         counter += +numbers[i]
//       }
//         return counter;
//     };

//     console.log(sum([]));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function divisibleByLast(n) {
//     let answer = [];
//     n = n.toString().split('');
//     for (let i = 0; i < n.length; i++) {
//         if (i == 0) {
//             answer.push(false);
//         } else {
//             if (n[i] % n[i - 1] == 0) {
//                 answer.push(true);
//             } else {
//                 answer.push(false);
//             }
//         }
//     }
//     //return answer;


// }

// divisibleByLast(73312);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Методы массивов


const people = [
    { name: 'Владилен', age: 25, budget: 40000 },
    { name: 'Елена', age: 17, budget: 3400 },
    { name: 'Игорь', age: 49, budget: 50000 },
    { name: 'Михаил', age: 15, budget: 1800 },
    { name: 'Василиса', age: 24, budget: 25000 },
    { name: 'Виктория', age: 38, budget: 2300 },
];

// for (let i =0; i < people.length; i++) {
//     console.log(people[i])
// }

// for (let person of people) {
//     console.log(person);
// }



//ForEach
// people.forEach(function(person) {
//     console.log(person)
// })

// people.forEach(person => console.log(person));


//Map
// const newPeople = people.map(person => `${person.name} (${person.age})`);
// console.log(newPeople);

//Filter
// const adult = [];
// for (let i = 0; i < people.length; i++) {
//     if (people[i].age >= 18) {
//         adult.push(people[i]);
//     }
// }
// console.log(adult);

// const adults = people.filter(person => {
//     if (person.age >= 18) {
//         return true;
//     }
// });
// console.log(adults)

// const adults = people.filter(person => person.age >= 18);
// console.log(adults);

//Reduce
// let sum = 0;
// for (let i = 0; i < people.length; i++) {
//     sum += people[i].budget;
// }
// console.log(sum);

// const sum = people.reduce((total, person) => {
//     return total + person.budget;
// }, 0);
// console.log(sum);

// const sum = people.reduce((total, person) => total + person.budget, 0);
// console.log(sum);


//Find
// const igor = people.find(person => person.name === 'Игорь');
// console.log(igor);

//FindIndex
// const igorIndex = people.findIndex(person => person.name === 'Игорь');
// console.log(igorIndex);

// const amount = people
//     .filter(person => person.budget > 3000)
//     .map(person => {
//         return {
//             info: `${person.name} (${person.age})`,
//             budget2: Math.sqrt(person.budget)
//         };
//     })
//     .reduce((total , person) => total + person.budget2, 0);
//     console.log(amount);






////////////////////////////////////////////////////////////////////////////////////





// function duplicateEncode(word){
//     word.split('').map((pos, i, arr)=> (arr[i] === arr[i+1])? '(' : ')').join('')
//   }

 // console.log(duplicateEncode('sdfsf'))









//   function as(a) {

//    b=   a.toLowerCase().split('')
//    .map((pos, i, arr)=> (pos === arr[i+1]) ? '(' : ')')
//    .join('')

//      return b
//   }
//   // console.log(as('aabcd'))


//    function duplicateEncode(word){
//     let a = word.toLowerCase().split('').map((pos, ind, arr)=> {
//           for (let i = 0; i < arr.length-1; i++) {
            
//           return pos === arr[i] ? ')' : '('}
//        }).join('')
//     return a
//    }

//    console.log(duplicateEncode('Success'))
// //    )(((())
// //    )())())

// let elem = 'a',
//    ar = ['a', 'b', 'c', 'a']




// function as(a) {

//     b = a.toLowerCase().split('')
//     .map((pos, i, arr)=> {
//         arr = arr.join('')
//         let regexp = new RegExp(pos, 'g')
//         console.log(regexp)
//         console.log(arr.match(regexp).length)
//       return  (arr.match(regexp).length > 1) ? ')' : '('
//     })
//     .join('')
 
//       return b
//    }
//    let z = 's'
//    let regexp = new RegExp(z, 'g')
//    let bz = 'sgasdfaf'
//    let bra = ['a', 's']

//   //console.log(bz.match(regexp).length) 
//   console.log(as('Success'))


//   function duplicateEncode(word){
//     const letters = word.toLowerCase().split('');
//     const counts = letters.reduce((ct, ltr) => ((ct[ltr] = (ct[ltr] || 0) + 1), ct), {});
//     return letters.map(letter => counts[letter] === 1 ? '(' : ')').join('');
//   }