// let options = {
//     width: 1366,
//     height: 768,
//     background: 'red',
//     font: {
//         size: '16px',
//         color: '#fff'
//     }
// };

// console.log(JSON.stringify(options));
// console.log(JSON.parse(JSON.stringify(options)));



let rub = document.querySelector('#rub'),
    usd = document.querySelector('#usd');

//     rub.addEventListener('input', () => {
//         let request = new XMLHttpRequest();

//        // request.open(method, url, async, login, pass);
//         request.open('GET', 'js/current.json');
//         request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//         request.send();

//         //status 
//         //statusText
//         //reponseText /response
//         //readyState

//         request.addEventListener('readystatechange', function() {
//             if (request.readyState == 4 && request.status == 200) {
//                 let data = JSON.parse(request.response);

//                 usd.value = (rub.value/data.usd).toFixed(2);
//             } else {
//                 usd.value = 'Something went wrong...';
//             }
//         });
//     });





// rub.addEventListener('input', () => {
//     function convert() {
//         return new Promise(function (resolve, reject) {
//             let request = new XMLHttpRequest();
//             request.open('POST', 'server.php');
//             request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//             request.send();
//             request.onload = function() {
//                 if(request.readyState === 4) {
//                         if(request.status == 200) {
//                             resolve(this.response)
//                         }
//                         else {
//                             reject();
                        
//                         }
//                 }
//             }
//         });
//     }
//     convert()
//     .then(() => {
//         let data = JSON.parse(request.response);
//         usd.value = (rub.value / data.usd).toFixed(2);
//     })
//     .catch(() => usd.value = 'Something went wrong...')
// });




let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {

    function catchData() {

        return new Promise(function(resolve, reject){
            let request = new XMLHttpRequest();
            request.open("GET", "js/current.json");
        
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            request.send();
        
            request.onload = function() {
                if(request.readyState === 4) {
                        if(request.status == 200) {
                            resolve(this.response);
                        }
                        else {
                            reject();
                        
                        }
                }
            };
        });
    }

    catchData()
    .then(response => {
        console.log(response);
        let data = JSON.parse(response);
        inputUsd.value = inputRub.value / data.usd;
    })
    .then(() => console.log(5000))
    .catch(() => inputUsd.value = "Что-то пошло не так");


});