'use strict';
let money, time;
function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {
    },
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
                b = prompt("Во сколько обойдется?", "");
            
            if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null
                && a != '' && b != '' && a.length < 50) {
                console.log('done');
                appData.expenses[a] = b; // записываем ответ в объект. ключ-значение
            } else {
                console.log("bad result");
                i--;
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Cредний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
            
            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 1; i <= 3; i++) {
            let questionOptExpenses = prompt("Статья необязательных расходов?", "");
            if (typeof (questionOptExpenses) === 'string' && typeof (questionOptExpenses) != null && questionOptExpenses != '' && questionOptExpenses.length < 50) {
                console.log('done');
                appData.optionalExpenses[i] = questionOptExpenses; // записываем ответ в объект. ключ-значение
            } else {
                console.log("bad result");
                i--;
            }
        }
    },
    chooseIncome: function () {
        let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
        if (typeof (items) != 'string' || typeof (items) == null || items == '') {
            console.log("Вы ввели некорректные данные или не ввели их вовсе");
        } else {
            appData.income = items.split(', ');
            appData.income.push(prompt('Может что-то еще?'));
            appData.income.sort();
        }
        while (items == "" || items == null) {
            items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
        }
        appData.income.forEach(function (itemamss, i) {
            alert("Способы доп. заработка: " + (i + 1) + " - " + itemmass);
        });
    }
};
for (let key in appData) {
        console.log('Наша программа включает в себя данные: ' + key + ' - ' + appData[key]);
}
