//touchstart
//touchmove
//touchend
//touchenter
//touchleave
//touchcancel

window.addEventListener('DOMContentLoaded', function() {
    let box = document.querySelector('.box');

    // box.addEventListener('touchstart', function(e) {
    //     e.preventDefault();
    //     console.log('Red box: touchstart');
    //     console.log(e.target);
    //     console.log(e.touches[0].target);
    //     console.log(e.changedTouches);
    //     console.log(e.targetTouches);
    // });

    box.addEventListener('touchmove', function(e) {
        e.preventDefault();
        console.log('Red box: ' + e.touches[0].pageX);
    });

    // box.addEventListener('touchend', function(e) {
    //     e.preventDefault();
    //     console.log('Red box: touchend');
    // });

    // new RegExp('pattern', 'flags');
    // /pattern/

    // let ans = prompt('Enter your name');

    // let reg = /n/g;

    // //console.log(ans.search(reg));
    // // console.log(ans.match(reg));
    // console.log(reg.test(ans));

    // flags i - поиск вне зависимости от регистра
    //g -глобальный поиск (не только первое вхождение но и все остапльные)
    //  m - многострочность

    // \d поисчк всех цифр      \D поиск не цифр    
    //  \w поиск всех букв      \W  поиск не букв
    // \s пробелы               \S  поиск не пробелов



    // let pass = prompt('Enter password');

    // console.log(pass.replace(/./g, '*'));
    // alert('12-34-56'.replace(/-/g, ':'));

    
    // let ans = prompt('Enter number');

    // let reg = /\d/g;

    // console.log(ans.match(reg));



    let str = 'My name is/ R2D2';

    console.log(str.match(/ /i));

});
 