// Практика 2.25
let keyStart = document.querySelector('#start'),
budgetValue = document.querySelector('.budget-value'),
daybudgetValue = document.querySelector('.daybudget-value'),
levelValue = document.querySelector('.level-value'),
expensesValue = document.querySelector('.expenses-value'),
optionalexpensesValue = document.querySelector('.optionalexpenses-value'),
incomeValue = document.querySelector('.income-value'),
monthsavingsValue = document.querySelector('.monthsavings-value'),
yearsavingsValue = document.querySelector('.yearsavings-value'),
expencesItems = document.querySelectorAll('.expenses-item'),
buttons = document.getElementsByTagName('button'),
expenceBtn = buttons[0],
optExpenceBtn = buttons[1],
countBtn = buttons[2],
optionalexpensesItems = document.querySelectorAll('.optionalexpenses-item'),
chooseIncome = document.querySelector('.choose-income'),
savingsCheckbox = document.querySelector('#savings'),
sum = document.querySelector('#sum'),
percent = document.querySelector('#percent'),
year = document.querySelector('.year-value'),
month = document.querySelector('.month-value'),
day = document.querySelector('.day-value');


console.log(keyStart, monthsavingsValue, expencesItems, expencesItems[0]);
console.log(buttons, expenceBtn, optExpenceBtn, countBtn);
console.log(optionalexpensesItems);
console.log(sum, day, percent);

///////////////////////////////////////


let money, time, savingsCheck;
let chooseExpencesMas = [];


keyStart.addEventListener('click', function(){
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    money = +prompt("Ваш бюджет на месяц?", '');
    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();

    year.value = new Date(Date.parse(time)).getFullYear(); 
    month.value = new Date(Date.parse(time)).getMonth(); 
    month.value = new Date(Date.parse(time)).getMonth() + 1; 
    day.value = new Date(Date.parse(time)).getDate(); 


    ///////  МОЙ Вариант
    // appData.timeData = time.split('-');
    // console.log(appData.timeData);
    // let masData = [year, month,day];
    // for (let i = 0; i < masData.length; i++) {
    //     console.log( masData[i]);
    //     console.log( appData.timeData[i]);
    //     masData[i].value = appData.timeData[i];
    // }
    //////////////////



});

expenceBtn.addEventListener('click', function(){
    let sum = 0;

    for (let i = 0; i < expencesItems.length; i++) {
        let a = expencesItems[i].value,
            b = expencesItems[++i].value;
        if ((typeof (a)) === 'string' && (typeof (a)) != null &&
            (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
            console.log('done');
            appData.expenses[a] = b;
            sum += +b;
        } else {
            console.log('Bad result');
            alert('Поля не заполнены!');
            i=3;
        }
    }
    expensesValue.textContent = sum;
});


optExpenceBtn.addEventListener('click', function() {
    for (let i = 0; i < optionalexpensesItems.length; i++) {
        let a = optionalexpensesItems[i].value;  
        appData.optionalExpenses[i] = a;
        console.log('opt ' + i + ' done');
        optionalexpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
    
});

countBtn.addEventListener('click', function() {

    if (appData.budget != undefined) {
// appData.moneyPerDay = ((appData.budget -
    //     +expensesValue.textContent) / 30).toFixed();

    appData.moneyPerDay = (appData.budget/ 30).toFixed();
        daybudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay <= 100) {
            levelValue.textContent = 'Minimal cashflow';
        } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = 'Middle cashflow';
        } else if (appData.moneyPerDay >= 2000) {
            levelValue.textContent = 'High cashflow';
        } else {
            levelValue.textContent = 'Error';
        }
    } else {
        daybudgetValue.textContent = 'Error!';
    }
});

chooseIncome.addEventListener('input', function() {
    let items = chooseIncome.value;
    appData.income = items.split(',');
    incomeValue.textContent = appData.income;
});


savingsCheckbox.addEventListener('click', function() {
    if (appData.savings == true) {
        appData.savings = false;
    } else  {
        appData.savings = true;
    }
});

sum.addEventListener('input', function() {
    if (appData.savings == true) {
        let sumSum = +sum.value,
            percentPercent = +percent.value;
            appData.monthIncome = sumSum / 100 / 12 * percentPercent;
            appData.yearIncome = sumSum / 100 * percentPercent;

            monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percent.addEventListener('input', function() {
    if (appData.savings == true) {
        let sumSum = +sum.value,
        percentPercent = +percent.value;
            appData.monthIncome = sumSum / 100 / 12 * percentPercent;
            appData.yearIncome = sumSum / 100 * percentPercent;

            monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};

