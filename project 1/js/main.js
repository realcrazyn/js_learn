let money, time, savingsCheck;
let chooseExpencesMas = [];



function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }

}

start();
let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};
check();
function check() {
    savingsCheck = confirm('Do you have savings?');
    if (savingsCheck == true) {
        appData.savings = true;
    }
}




function chooseExpences() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = +prompt('Во сколько обойдется?', '');
        chooseExpencesMas[i] = b;
        if ((typeof (a)) === 'string' && (typeof (a)) != null &&
            (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
            console.log('done');
            appData.expenses[a] = b;
        } else {
            console.log('Bad result')
            i--;
        }
    };
}
chooseExpences();

function chooseOptExpences() {
    for (let i =0; i < 3; i++)  {
       let a = +prompt('Cost of ' + (i+1) + ' otional expence?' );
       appData.optionalExpenses[(i+1)] = a;
       console.log('opt ' + i + ' done');
    }
}
chooseOptExpences();

//Variant 2
// let i =0;
// while (i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = +prompt('Во сколько обойдется?', '');

//             if((typeof(a)) === 'string' && (typeof(a)) != null &&
//              (typeof(b)) != null && a != '' && b != ''&& a.length < 50) {
//                  console.log('done');
//                 appData.expenses[a] = b;
//             } else {
//                 console.log('Bad result')
//                 i--;
//             }
//             i++;
// };

//Variant 3
// let i =0;
// do {let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
// b = +prompt('Во сколько обойдется?', '');

//     if((typeof(a)) === 'string' && (typeof(a)) != null &&
//      (typeof(b)) != null && a != '' && b != ''&& a.length < 50) {
//          console.log('done');
//         appData.expenses[a] = b;
//     } else {
//         console.log('Bad result')
//         i--;
//     }
//     i++;
// } while (i<2)

function detectDayBudget() {
    appData.moneyPerDay = ((appData.budget -
        (chooseExpencesMas[0] + chooseExpencesMas[1])) / 30);
}

detectDayBudget();

alert('Everyday budget: ' + appData.moneyPerDay);

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log('Minimal cashflow');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log('Middle cashflow');
    } else if (appData.moneyPerDay > 2000) {
        console.log('High cashflow');
    } else {
        console.log('Error')
    }
}

detectLevel();


function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt('How much savings?'),
            percent = +prompt('Whats percent?');

        appData.monthIncome = save / 100 / 12 * percent;
        alert('Your deposite cashlow: ' + appData.monthIncome);
    }
}
checkSavings();

