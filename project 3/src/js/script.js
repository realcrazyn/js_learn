//require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';
require('formdata-polyfill');
window.addEventListener('DOMContentLoaded', function () {            //джем загрузки ДОМ дерева без него не начинаем
    'use strict';


    let calc = require('./parts/calc.js'),
        form = require('./parts/form.js'),
        slider = require('./parts/slider.js'),
        tabs = require('./parts/tabs.js'),
        timer = require('./parts/timer.js'),
        modal = require('./parts/modal.js');

    calc();
    form();
    slider();
    tabs();
    timer();
    modal();
});

