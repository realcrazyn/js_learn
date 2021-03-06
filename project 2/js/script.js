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
                } else { return num; }
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
        close = document.querySelector('.popup-close'),
        tabsButton = document.querySelectorAll('.description-btn');
    //console.log(tabsButton);


    function modalWindow(start, overlay, close) {

        start.addEventListener('click', function () {
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });

        close.addEventListener('click', function () {
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


    // Form

    let message = {
        loading: 'Loading...',
        success: 'Thank you! We will contact you soon!',
        failor: 'Something went wrong...'
    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status');

    //     form.addEventListener('submit', function (event) {
    //         event.preventDefault();
    //         form.appendChild(statusMessage);

    //         let request = new XMLHttpRequest();
    //         request.open('POST', 'server.php');
    //         request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    //         let formData = new FormData(form);

    //         let obj = {};
    //         formData.forEach(function(value, key) {
    //             obj[key] = value;
    //         });
    //         let json = JSON.stringify(obj);
    //         request.send(json);

    //         request.addEventListener('readystatechange', function () {
    //             if (request.readyState < 4) {
    //                 statusMessage.innerHTML = message.loading;
    //             } else if (request.readyState == 4 && request.status == 200) {
    //                 statusMessage.innerHTML = message.success;
    //             } else {
    //                 statusMessage.innerHTML = message.failor;
    //             };

    //         });
    //         for (let i = 0; i < input.length; i++) {
    //             input[i].value = '';
    //         }

    //     });

    // });

    function sendForm(elem) {
        elem.addEventListener('submit', function (event) {
            event.preventDefault();
            elem.appendChild(statusMessage);
            let formData = new FormData(elem);


            function postData(data) {
                return new Promise(function (resolve, reject) {
                    let request = new XMLHttpRequest();
                    request.open('POST', 'server.php');
                    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
                    request.onreadystatechange = function () {
                        if (request.readyState < 4) {
                            resolve();
                        } else if (request.readyState === 4) {
                            if (request.status < 3 && request.status == 200) {
                                resolve();
                            } else {
                                reject();
                            }
                        }
                    };

                    let obj = {};
                    data.forEach(function (value, key) {
                        obj[key] = value;
                    });
                    let json = JSON.stringify(obj);
                    request.send(json);
                });
            }

            function clearInput() {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
            }

            postData(formData)
                .then(() => statusMessage.innerHTML = message.loading)
                .then(() => {
                    statusMessage.innerHTML = message.success;
                })
                .catch(() => statusMessage.innerHTML = message.failor)
                .then(clearInput);
        });


    }
    sendForm(form);

    //slider

    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dots = document.querySelectorAll('.dot'),
        dotsWrap = document.querySelector('.slider-dots');

    showSlides(slideIndex);
    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');
        // for (let i = 0; i < slides.length; i++) {
        //     slides[i].style.display = 'none';
        // }
        dots.forEach((item) => item.classList.remove('dot-active'));

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');

    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function () {
        plusSlides(-1);
    });
    next.addEventListener('click', function () {
        plusSlides(1);
    });
    // dots.forEach(function(item, index) {
    //     item.addEventListener('click', function() {
    //         currentSlide(index + 1);
    //     });   
    // }) 
    dotsWrap.addEventListener('click', function (event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
                currentSlide(i);
            }
        }
    });





    // //slider by class

    
    
    // class Slider {
    //     constructor(slides, prev, next, dots, slideIndex) {
    //             this.slideIndex = slideIndex,
    //             this.slides = document.querySelectorAll(slides),
    //             this.prev = document.querySelector(prev),
    //             this.next = document.querySelector(next),
    //             this.dots = document.querySelectorAll(dots);
    //     }
    //     //showSlides(slideIndex);
    //     showSlides() {
    //         if (this.slideIndex > this.slides.length) {
    //             this.slideIndex = 1;
    //         }
    //         if (this.slideIndex < 1) {
    //             this.slideIndex = this.slides.length;
    //         }
    //         this.slides.forEach((item) => item.style.display = 'none');
    //         this.dots.forEach((item) => item.classList.remove('dot-active'));
    //         this.slides[this.slideIndex - 1].style.display = 'block';
    //         this.dots[this.slideIndex - 1].classList.add('dot-active');
    //     }
    //     plusSlides(n) {
    //         name.showSlides(this.slideIndex += n);
    //     }
    //     currentSlide(n) {
    //         name.showSlides(this.slideIndex = n);
    //     }
    //     activate() {
    //         this.prev.addEventListener('click', function () {
    //             name.plusSlides(-1);
    //         });
    //         this.next.addEventListener('click', function () {
    //             name.plusSlides(1);
    //         });
    //         this.dots.forEach(function (item, index) {
    //             item.addEventListener('click', function () {
    //                 name.currentSlide(index + 1);
    //             });
    //         });
    //     }
    // }   // end of Class slider
    
    // let slider1 = new Slider('.slider-item', '.prev','.next','.dot', 1, 'slider1');
    // let name = slider1;
    // slider1.showSlides();
    // slider1.activate();




    // calc

    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personSum = 0,
        daysSum = 0,
        total = 0; 

        totalValue.innerHTML = 0;

        persons.addEventListener('change', function() {
            personSum = +this.value;
            total = (daysSum+personSum)* 4000;

            if(restDays.value == '' || persons.value == '') {
                totalValue.innerHTML = 0;
            } else {
                let a = total;
                totalValue.innerHTML = a * place.options[place.selectedIndex].value;
            }
        });
        restDays.addEventListener('change', function() {
            daysSum = +this.value;
            total = (daysSum+personSum)* 4000;

            if(restDays.value == '' || persons.value == '') {
                totalValue.innerHTML = 0;
            } else {
                let a = total;
                totalValue.innerHTML = a * place.options[place.selectedIndex].value;
            }
        });

        place.addEventListener('change', function() {
            if (restDays.value == '' || persons.value == '') {
                totalValue.innerHTML = 0;
            } else {
               let a = total;
                totalValue.innerHTML = a * this.options[this.selectedIndex].value;
            }
        });

















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




//  class Options {
//     constructor (classList, text, height, width, bg, fontSize, textAlign){
//         this.height = height;
//         this.width = width;
//         this.bg = bg;
//         this.fontSize = fontSize;
//         this.textAlign = textAlign;
//         this.classList = classList;
//         this.text = text;
//     }
//     createDiv() {
//         let div = document.createElement('div');
//         div.className = this.classList;
//         document.body.append(div);
//         div.textContent = this.text;
//         div.style.cssText = `height: ${this.height} px; width: ${this.width} px; background: ${this.bg}; font-size: ${this.fontSize} px; text-align: ${this.textAlign}`;
//     }
// }

// const helloDiv = new Options('hello', 'Hello ', 300, 500, 'red', 40, 'center');
// helloDiv.createDiv();
// const byeDiv = new Options('bye', 'GoodBye', 300, 500, '#ADFF2F', 40, 'center');
// byeDiv.createDiv();