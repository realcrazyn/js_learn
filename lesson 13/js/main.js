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

    rub.addEventListener('input', () => {
        let request = new XMLHttpRequest();

       // request.open(method, url, async, login, pass);
        request.open('GET', 'js/current.json');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.send();

        //status 
        //statusText
        //reponseText /response
        //readyState

        request.addEventListener('readystatechange', function() {
            if (request.readyState == 4 && request.status == 200) {
                let data = JSON.parse(request.response);

                usd.value = (rub.value/data.usd).toFixed(2);
            } else {
                usd.value = 'Something went wrong...';
            }
        });
    });