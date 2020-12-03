'use strict';


let money = prompt("Ваш бюджет на месяц?"),
    date = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: date,
    expenses: {
        state: 0,
        cost : 0
    },
    optionalExpenses: 0,
    income: 0,
    savings: false

}

appData.expenses.state = prompt('Введите обязательную статью расходов в этом месяце');
appData.expenses.cost = prompt('Во сколько обойдется?');

alert((appData.budget-appData.expenses.cost)/30);

