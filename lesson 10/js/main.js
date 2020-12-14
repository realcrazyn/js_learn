let box = document.querySelector('.box'),
    button = document.querySelector('button');

let width = box.clientWidth,
    height = box.clientHeight;

    console.log(width, height);
    console.log(box.getBoundingClientRect().left);

    console.log(document.documentElement.clientWidth);
    console.log(document.documentElement.clientHeight);
    console.log(document.documentElement.scrollTop);


    button.addEventListener('click', function() {
     box.scrollTop = 0;
        // if (button.classList.contains('buisy')) {
        //     box.style.height = box.scrollHeight + 'px';
        //     button.classList.remove('buisy');         // убираем у этого блока (с индексом b ) класс hide
        // } else  {
        //     box.style.height = '350px';
        //     button.classList.add('buisy');
        // }  
        
    });

    scrollBy(0, 200);
    scrollTo(0,1200);
