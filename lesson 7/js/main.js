let btn = document.querySelectorAll('button'),
    wrap = document.querySelector('.wrapper'),
    link = document.querySelector('a');

// btn[0].onclick = function() {
//     alert('You tapped 1st button!');
// };

// btn[0].onclick = function() {
//     alert('You tapped 1st button! again');
// };

btn[0].addEventListener('click', function(event) {
    console.log(event);
    // let target = event.target;
    // target.style.display = 'none';
     console.log('Something happened: ' + event.type + ' on element ' + event.target);
}); 

wrap.addEventListener('click', function() {
   console.log('Something happened: ' + event.type + ' on element ' + event.target);

});

link.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Something happened: ' + event.type + ' on element ' + event.target);

});

btn.forEach(function(item) {
    item.addEventListener('mouseleave', function() {
        console.log('You left the button!');
    });
});


// btn[0].addEventListener('mouseenter', function() {
//     alert('You hovered the button!');
// });

