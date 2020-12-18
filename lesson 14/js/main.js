// let btn = document.querySelector('button');

// let drink = 0;


// function shoot(arrow, headshot, fail) {
//     console.log('You made a shot...');

//     setTimeout(function() {
//         Math.random() > .5 ? headshot({}) : fail('You missed');
//     },3000);
// };

// function win() {
//     console.log('You won!');
//     (drink == 1) ? buyBeer() : giveMoney();
// }

// function buyBeer () {
//     console.log('We boght you a beer!');
// }

// function giveMoney () {
//     console.log('We gave you money!');
// }


// function loose() {
//     console.log('You lost!');
// }






// shoot({}, 
//     function(mark) {
//         console.log('You shooted target');
//         win(mark, buyBeer, giveMoney);
//     },
//     function(miss) {
//         console.error(miss);
//         loose();
//     });


let btn = document.querySelector('button');

let drink = 0;


function shoot(arrow) {
    console.log('You made a shot...');
    let promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            Math.random() > .5 ? resolve({}) : reject('You missed');
        },3000);
    });
    return promise;
};

function win() {
    console.log('You won!');
    (drink == 1) ? buyBeer() : giveMoney();
}

function buyBeer () {
    console.log('We boght you a beer!');
}

function giveMoney () {
    console.log('We gave you money!');
}


function loose() {
    console.log('You lost!');
}



shoot({})
    .then(mark => console.log('You shooted target'))
    .then(win)
    .catch(loose)