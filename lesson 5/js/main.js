// function hello() {
//     console.log('Hello world!');
// }

// hello();

// function h1() {
//     console.log('Hello world!');
//  }

//  h1();

//  let ar = [1, 15, 4, 30, 42],
//     i = arr.sort(compareNum);

//     function compareNum(a,b) {
//         return a-b;
//     }

//     console.log(arr);



                //Динамическая типизация в JS
                // значит что тип данных динамичен, тоесть его можно поменять


                // to String

// 1) use String
console.log(typeof(String(4)));
// 2) Concatination
console.log(typeof('sdfsdf' + 4 + false));
console.log('https://vk.com/catalog/' + 5);

              // To Number
// 1) use Number
console.log(typeof(Number('5')));
// 2) унарный плюс
console.log(typeof(5 + +'5'));
console.log(5 + +'5');
console.log(5 + '5');
// 3) parseInt
console.log(typeof(parseInt('15px', 10)));
console.log(parseInt('15px', 10));

//let ans = +prompt('Hello?', '');


                // To boolean
//always false
// 0, '', null, undefined, NaN

let switcher = null;

if(switcher) {
    console.log('Working..');
}

switcher = 1;

if(switcher) {
    console.log('Working..');
}

// 2)
console.log(typeof(Boolean('5')));
console.log(Boolean('5'));
console.log(Boolean(''));
// 3)
console.log(typeof(!!('5')));
console.log(!!('5'));
console.log(!!(0));


// Задачи с собеседований
/*
Какое будет выведено значение: let x = 5; alert( x++ ); ?

6
5           - потому что это постфиксный инкремент и 6 он станет равен только после алерта 
number
x++



Чему равно такое выражение: [ ] + false - null + true ?

true
false
[]
NaN     - правильно

Пустой массив всегда превращается в строку! 
Если чтото складвыаем  с пустой трокой оно превращается в строку
[ ] + false выдаст строку "false" но если из нее вычесть null то NaN


Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?

y
1
2       - это присваивание последнее значение 2
x




Чему равна сумма [ ] + 1 + 2 ?

"12"
Выведет ошибку
12          - правильно
[]
Пустой массив всегда превращается в строку! Значит и выдаст "12"



Что выведет этот код: alert( "1"[0] ) ?

""
1           - мы пытаемся получить через квадратные скобки номер  элемента строки
array
Выведет ошибку
alert( "231"[1] )  выдаст соответственно 3



Чему равно 2 && 1 && null && 0 && undefined ?

null        - в данном выражении выдает первый лживый элемент
3
0
1
если было бы 2 && 1 && 0 && null && undefined выдало бы 0
если было бы 2 && 1 && undefined && null && 0 выдало бы undefined



Есть ли разница между выражениями !!( a && b ) и (a && b) ?

Синтаксис первого выражения неверен
Нет
Разница только при использовании этих выражений
Есть     да, в первом случае !! трансформируют выражение в булиновое


Что выведет этот код: alert( null || 2 && 3 || 4 ); ?
                            
false
2
4
3           - вот это потому что 3 || 4 это правдв
Оператор || спотыкается об правду поэтому выдаст первое правдивое значение

a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?

Да
Нет    - нет это абсолютно разные массивы хотя я их почему бля



Что выведет этот код: alert( +"Infinity" ); ?

""
NaN
false
Infinity        - бесконечность хули Infinity видимо синтаксическое слово



Верно ли сравнение: "Ёжик" > "яблоко" ?

Да
Нет  особенности юникода буква Ё стоит в порядке перед я



Чему равно 0 || "" || 2 || undefined || true || falsе ?

0
2           - ИЛИ спотыкается о правду
""
false




*/
