//function call or invoke //hoisting
run();

//function declaration
function run() {
    console.log('running');
}

//Named function assignment 
// let stand = function walk() {
//     console.log('walking');
// };

// //Anonymous function assignment
// let stand2 = function() {
//     console.log('walking');
// };


// stand();

// let jump = stand;

// jump();

// stand2();

// let x = 1;
// x = 'a';

// console.log(x);

// function sum(a, b) {
//     let total = 0;
//     for(let value of arguments)
//         total = total + value;
//     return total;
// }

// // console.log(sum(1,2));
// // console.log(sum(1));
// // console.log(sum());
// // console.log(sum(1,2,3,4,5));

// let ans = sum(1,2,3,4,5,6);
// console.log(ans);

//rest operator
// function sum(a, ...args) {
//     console.log(args);
// }

// sum(1,2,3,4,5,6);

//Default Parameters
// function interest(p,r=8,y=10) {
//     return p*r*y/100;
// }

// // console.log(interest(1000));
// console.log(interest(1000,undefined,8));

//Getter Setter

//getter -> access properties
//setter -> change or mutate properties

// let person = {
//     fName : 'Love',
//     lName : 'Babbar',

//     get fullName() {
//         return `${person.fName} ${person.lName}`;
//     },

//     set fullName(value) {
//         if(typeof value !== String){
//             throw new Error("You have not sent a string");
//         }
//         let parts = value.split(' ');
//         this.fName = parts[0];
//         this.lName = parts[1];
//     }
// };

// console.log(person);

// function fullName() {
//     return `${person.fName} ${person.lName}`;
// }

// console.log(fullName());

// person.fullName = 'Rahul Kumar';

// try and catch
// try {
//     person.fullName = true;
// }
// catch(e) {
//     alert(e);
// }

// console.log(person.fullName);

// scope
// {
//     let a = 5;
//     console.log(a);
// }
//     console.log(a);

// function walk() {
//      var ab = 5;
   
// }
// console.log(ab);

// for(var i=0; i<10 ;i++){

// }
// console.log(i);

// if(true) {
//     // let a = 5;
//     var a = 5;
// }

// console.log(a);

// function a() {
//     const ab = 5;
// }
// const ab = 5;

// function b() {
//     const ab = 5;
// }

//Reducing array

let arr = [1,2,3,4];
// let total = 0;

// for (let value of arr)
//     total = total + value;

// console.log(total);

let totalSum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(totalSum);
    