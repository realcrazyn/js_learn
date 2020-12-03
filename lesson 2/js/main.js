
 let num =50;

if(num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Too big');
} else {
    console.log('True!');
}

(num == 50) ? console.log('Right') : console.log('Error');


switch (num) {
    case num < 49: 
        console.log('Error!');
        break;
    case num > 100:
        console.log('Too big');
        break;
    case num > 80:
        console.log('also too big');
        break;
    case 50:
        console.log('Right');
        break;
    default: 
    console.log('Something went wrong');
        break;
        
}



// while (num < 55) {
//     console.log(num);
//     num++;
// }

do {
    console.log(num);
    num++;
}

while (num < 55);


for (let i = 1; i < 8; i++) {
    if (i == 6) {
        continue;
    }
    console.log(i);
}
