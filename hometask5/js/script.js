let ui = document.querySelector('.menu'),
    menuItems = document.querySelectorAll('.menu-item'),
    bodyTake = document.querySelector('body'),
    title = document.querySelector('.title'),
    column = document.querySelectorAll('.column');
    adv = document.querySelector('.adv');
    prompty = document.querySelector('.prompt');

let li = document.createElement('li');
    li.classList.add('menu-item');
    li.textContent = 'Пятый пункт';

    ui.appendChild(li);
console.log(ui);
console.log(menuItems);
ui.insertBefore(menuItems[2], menuItems[1]);
console.log(bodyTake);
console.log(document.body)

//bodyTake.style.backgroundImage = 'url(img/apple_true.jpg)';
document.body.style.backgroundImage = 'url(img/apple_true.jpg)';


//title.textContent = 'Мы продаем только подлинную технику Apple'; это по заданию
title.innerHTML = 'Мы продаем только <b> подлинную </b> технику Apple';  // а тут я сделал слово подлинную жирным
console.log(column[1]);


//asdcolumn[1].removeChild(adv); или так 
adv.remove();   // или так 

let answer = prompt('Whats your attitude to Apple INC?');
prompty.textContent = answer;