function alphabetPosition(text) {
   t = text.toLowerCase();
    let mas = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    function bruteForce(symbol) {
        for (let i = 0; i < mas.length; i++) {
            if (symbol == mas[i]) {
                return i+1
            } 
        }
    }
    let textMas = [];
    for (let i = 0; i < t.length; i++) {
        textMas.push(bruteForce(t[i]));
    }

    let answer = [];
    for (let i = 0; i < textMas.length; i++) {
        if (textMas[i] != undefined) {
        answer.push(textMas[i]);
        }
    }
    textAnswer = answer.join(' ');

    return textAnswer;
}

alphabetPosition("The sunset sets at twelve o' clock."); 
alphabetPosition("The narwhal bacons at midnight."); 

let dgf = "The sunset sets at twelve o' clock.";

// console.log(dgf.toUpperCase().match(/[a-z]/gi).map( (c) => c.charCodeAt() - 64)
//     .join(' '));

 //   console.log(dgf.match(/[a-z]/gi).map( (c) => c.charCodeAt() - 64));



    function sum (numbers) {
        "use strict";
        let counter = 0;
      for (let i =0; i < numbers.length; i++) {
        counter += +numbers[i]
      }
        return counter;
    };

    console.log(sum([]));