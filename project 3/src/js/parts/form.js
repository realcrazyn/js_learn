function mainForm() {
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
}


module.exports = mainForm;