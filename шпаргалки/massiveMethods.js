//Методы массивов


// const people = [
//     {name: 'Владилен', age: 25, budget: 40000},
//     {name: 'Елена', age: 17, budget: 3400},
//     {name: 'Игорь', age: 49, budget: 50000},
//     {name: 'Михаил', age: 15, budget: 1800},
//     {name: 'Василиса', age: 24, budget: 25000},
//     {name: 'Виктория', age: 38, budget: 2300},
// ];

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