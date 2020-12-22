// localStorage.setItem('number', 1);

// console.log(localStorage.getItem('number'));

// localStorage.removeItem('number')

// localStorage.clear();

window.addEventListener("DOMContentLoaded", function () {

let checkBox = document.getElementById('remember-me'),
    change = document.getElementById('change'),
    form = document.getElementsByTagName('form')[0];
if(localStorage.getItem('isChecked') === 'true') {
    checkBox.checked = true;
}

if(localStorage.getItem('bg') === 'changed') {
    form.style.backgroundColor = '#FF4766';
}

checkBox.addEventListener('click', function() {
    localStorage.setItem('isChecked', true);
});

change.addEventListener('click', function() {
    localStorage.setItem('bg', 'changed');
    form.style.backgroundColor = '#FF4766';
});

let person = {
    name: 'Alex',
    age : 25,
    tech: ['mobile' , 'notebook']
};

let serializedPerson = JSON.stringify(person);
localStorage.setItem('Alex', serializedPerson);

console.log(JSON.parse(localStorage.getItem('Alex')));




});




//Ошибки. Как избежать “поломки” своего кода
let json = '{"id": 2}';
try {
    let user = JSON.parse(json);
    console.log(user);
   
    if(!user.name) {
        throw new Error('No user name!');
    }

} catch(error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);

    console.log(`We have got an error: ${error.name}`  );
} finally {
    console.log('I will always work!')
}



console.log('I will work')


