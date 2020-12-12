window.addEventListener('DOMContentLoaded', function() {            //джем загрузки ДОМ дерева без него не начинаем
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

        info.addEventListener('click', function(event) {            // навешиваем на родителя обработчик события КЛИК и коллбэк функцию с параметром event
            let target = event.target;                              // для упрощения написания задаем переменную тоторая обозначает наш таргет
            if (target && target.classList.contains('info-header-tab')) {       // задаем условие при котором мы нажимаем именно на область info-header-tab
                for(let i = 0; i < tab.length; i++) {           // начинаем перебор псевдомассива info-header-tab
                    if (target == tab[i]) {             //находим нужный (через это условие мы понимаем на какой именно таб мы нажали и его индекс в псевдомассиве(этот индекс такойже и у блока с контентом))
                        hideTabContent(0);              //скрываем все блоки с контентом
                        showTapContent(i);              // показываем блок индекс которого совпадает с индексом таба( кнопки) которую нажали
                        break;                      // выходим из цикла
                    }
                }
            }

        });
});