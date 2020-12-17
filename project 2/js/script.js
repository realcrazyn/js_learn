window.addEventListener('DOMContentLoaded', function () {            //джем загрузки ДОМ дерева без него не начинаем
    'use strict';

    let tab = document.querySelectorAll('.info-header-tab'),        //берем со страницы псевдомассив кнопок (табов)
        info = document.querySelector('.info-header'),              // берем их родителя
        tabContent = document.querySelectorAll('.info-tabcontent'); // берем со страницы псевдомассив блоков с контентом

    function hideTabContent(a) {                            //задаем функцию с принимаемым параметром (индексом элемента)
        for (let i = a; i < tabContent.length; i++) {       // стартуем цикл с длинной псевдомассива блоков с контентом
            tabContent[i].classList.remove('show');            // убираем класс show (в css этот класс их отображает)
            tabContent[i].classList.add('hide');                // добавляем им класс hide который их скрывает
            // таким образом эта функция фактически скрывает все блоки с контентом если в переменную а поставить 0 (если поставить 1 то первый элемент останется и т.д.)
        }
    }

    hideTabContent(1);      //собственно скрываем все блоки кроме первого

    function showTapContent(b) {                //задаем функцию с принимаемым параметром (индексом элемента)
        if (tabContent[b].classList.contains('hide')) {             //условие если блк с контентом содержит класс hide то выполняем следующее
            tabContent[b].classList.remove('hide');         // убираем у этого блока (с индексом b ) класс hide
            tabContent[b].classList.add('show');            // и добавляем класс show
        }
    }

    info.addEventListener('click', function (event) {            // навешиваем на родителя обработчик события КЛИК и коллбэк функцию с параметром event
        let target = event.target;                              // для упрощения написания задаем переменную тоторая обозначает наш таргет
        if (target && target.classList.contains('info-header-tab')) {       // задаем условие при котором мы нажимаем именно на область info-header-tab
            for (let i = 0; i < tab.length; i++) {           // начинаем перебор псевдомассива info-header-tab
                if (target == tab[i]) {             //находим нужный (через это условие мы понимаем на какой именно таб мы нажали и его индекс в псевдомассиве(этот индекс такойже и у блока с контентом))
                    hideTabContent(0);              //скрываем все блоки с контентом
                    showTapContent(i);              // показываем блок индекс которого совпадает с индексом таба( кнопки) которую нажали
                    break;                      // выходим из цикла
                }
            }
        }

    });

    // Timer

    let deadLine = '2020-12-15';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)));
        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);

            // for (let key in t) {
            //    let a = t[key];
            //     if (String(a).length < 2) {
            //         a = '0' + String(a);
            //         t[key] = a;                       
            //     }
            // }
            // hours.textContent = t.hours;
            // minutes.textContent = t.minutes;
            // seconds.textContent = t.seconds;


            //OR SO

            function addZero(num) {
                if (num <= 9) {
                    return '0' + num;
                } else return num;
            }

            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);


            if (t.total < 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }

    }

    setClock('timer', deadLine);



// Modal

let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector  ('.popup-close'),
    tabsButton = document.querySelectorAll('.description-btn');
    console.log(tabsButton)


function modalWindow(start, overlay, close) {

        start.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        start.classList.remove('more-splash');
        document.body.style.overflow = '';
    });
 }



 modalWindow(more, overlay, close);
 modalWindow(tabsButton[0], overlay, close);
 modalWindow(tabsButton[1], overlay, close);
 modalWindow(tabsButton[2], overlay, close);
 modalWindow(tabsButton[3], overlay, close);


 class Options {
    constructor (classList, text, height, width, bg, fontSize, textAlign){
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
        this.classList = classList;
        this.text = text;
    }
    createDiv() {
        let div = document.createElement('div');
        div.className = this.classList;
        document.body.append(div);
        div.textContent = this.text;
        div.style.cssText = `height: ${this.height} px; width: ${this.width} px; background: ${this.bg}; font-size: ${this.fontSize} px; text-align: ${this.textAlign}`;
    }
}

const helloDiv = new Options('hello', 'Hello ', 300, 500, 'red', 40, 'center');
helloDiv.createDiv();
const byeDiv = new Options('bye', 'GoodBye', 300, 500, '#ADFF2F', 40, 'center');
byeDiv.createDiv();
});








// window.addEventListener('DOMContentLoaded', function() {            //джем загрузки ДОМ дерева без него не начинаем
//     'use strict';
// let tabsFunc = function(tabs, tabsParent, content) {
//     let tab = document.querySelectorAll(tabs),        //берем со страницы псевдомассив кнопок (табов)
//         info = document.querySelector(tabsParent),              // берем их родителя
//         tabContent = document.querySelectorAll(content); // берем со страницы псевдомассив блоков с контентом

//         function hideTabContent(a) {                            //задаем функцию с принимаемым параметром (индексом элемента)
//             for (let i = a; i < tabContent.length; i++) {       // стартуем цикл с длинной псевдомассива блоков с контентом
//                 tabContent[i].classList.remove('show');            // убираем класс show (в css этот класс их отображает)
//                 tabContent[i].classList.add('hide');                // добавляем им класс hide который их скрывает
//                             // таким образом эта функция фактически скрывает все блоки с контентом если в переменную а поставить 0 (если поставить 1 то первый элемент останется и т.д.)
//             }
//         }

//         hideTabContent(1);      //собственно скрываем все блоки кроме первого

//         function showTapContent(b) {                //задаем функцию с принимаемым параметром (индексом элемента)
//             if (tabContent[b].classList.contains('hide')) {             //условие если блк с контентом содержит класс hide то выполняем следующее
//                 tabContent[b].classList.remove('hide');         // убираем у этого блока (с индексом b ) класс hide
//                 tabContent[b].classList.add('show');            // и добавляем класс show
//             }
//         }

//         info.addEventListener('click', function(event) {            // навешиваем на родителя обработчик события КЛИК и коллбэк функцию с параметром event
//             let target = event.target;                              // для упрощения написания задаем переменную тоторая обозначает наш таргет
//             if (target && target.classList.contains(tabs.slice(1))) {       // задаем условие при котором мы нажимаем именно на область info-header-tab
//                 for(let i = 0; i < tab.length; i++) {           // начинаем перебор псевдомассива info-header-tab
//                     if (target == tab[i]) {             //находим нужный (через это условие мы понимаем на какой именно таб мы нажали и его индекс в псевдомассиве(этот индекс такойже и у блока с контентом))
//                         hideTabContent(0);              //скрываем все блоки с контентом
//                         showTapContent(i);              // показываем блок индекс которого совпадает с индексом таба( кнопки) которую нажали
//                         break;                      // выходим из цикла
//                     }
//                 }
//             }

//         });

//     }

//     tabsFunc('.info-header-tab', '.info-header',  '.info-tabcontent');
// });