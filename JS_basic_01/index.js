//line below is used to print on the console window
console.log('Namaste Dunia 5');

let a = 5;
//let a = 6; -- not happen
console.log(a); 

var b = 6;
var b = 7;
console.log(b);

//const c = 12; constant value
const c = 13;
console.log(c);

//let let = 5; cannot be reserved  keyword
//console.log(let);

// let lastName = 'Deepanshu';
// console.log(lastName);

// lastName = 3;
// console.log(lastName);

// a=7;
// console.log(++a);
// console.log(a);
// console.log(a++);
// console.log(a);

// console.log(2>3);
// console.log(5<8);
// console.log(3===3);
// console.log(5!==3);
// console.log(6>=6);

let age = 17;
let status = (age >= 18) ? 'Yes Vote' : 'No Vote';

console.log(status);

// let marks = 98;
// if(marks >=90){
//     console.log('A');
// }

// else if(marks >=80){
//     console.log('B');
// }

// else{
//     console.log('C');
// }

// let num = 1;

// switch(num){
//     case 1: console.log('A');
//     break;
//     case 2: console.log('B');
//     break;
//     case 3: console.log('C');
//     break;
//     default:console.log('D');
// }

for(let i=0;i<5;i++){
    console.log(i);
}

let x = 1;
while(x<=5){
    console.log(x);
    x++;
}

let y = 11;
do{
 console.log(y);
 y++;
}while(y<10);