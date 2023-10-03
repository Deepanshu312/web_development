console.log('chaliye shuru karte h');

//object create
// let rectangle = {
//     length: 1,
//     breadth: 2,

//     draw: function() {
//         console.log('drawing rectangle');
//     }
// }; 

//----readability increase 
// let rectangle2 = {
//     length: 1,
//     breadth: 2,

//     draw: function() {
//         console.log('drawing rectangle');
//     }
// }; 

// let rectangle3 = {
//     length: 1,
//     breadth: 2,

//     draw: function() {
//         console.log('drawing rectangle');
//     }
// }; 

// let rectangle4 = {
//     length: 1,
//     breadth: 2,

//     draw: function() {
//         console.log('drawing rectangle');
//     }
// }; 

//factory function

// function createRectangle() {
//     return rectangle = {
//         length: 1,
//         breadth: 2,
    
//         draw() {
//             console.log('drawing rectangle');
//         }
//     }; 
// } 

// let rectangleObj1 = createRectangle();
// rectangleObj1.length;
// rectangleObj1.breadth;
// rectangleObj1.draw();

// function createRectangle(len, bre) {
//         return rectangle = {
//             length: len,
//             breadth: bre,
        
//             draw() {
//                 console.log('drawing rectangle');
//             }
//         }; 
//     } 

//  let rectangleObj1 = createRectangle(5,4);
//  let rectangleObj2 = createRectangle(3,5);
//  let rectangleObj3 = createRectangle(6,2);

// Camelcase -> numberOfStudents
// constructor function -> Pascal Notaion -> first letter pf every word is Capital ->NumberOfStudents
// constructor function -> prop/methods -> intialise/Define
// function Rectangle() {
//     this.length = 1;
//     this.breadth = 2;
//     this.draw = function() {
//         console.log('drawing');
//     }
// }

// //object creation using constructor function
// let rectangleObject = new Rectangle();


function Rectangle(len, bre) {
    this.length = len;
    this.breadth = bre;
    this.draw = function() {
        console.log('drawing');
    }
}

//object creation using constructor function
let rectangleObject = new Rectangle(4,6);

// rectangleObject.color = 'yellow';
// console.log(rectangleObject);

// delete rectangleObject.color;
// console.log(rectangleObject);

let Rectangle1 = new Function(
       'length', 'breadth',
    `this.length = length;
    this.breadth = breadth;
    this.draw=function() {
        console.log('drawing');
    }`);

//object creation using Rectangle1
let rect = new Rectangle1(2,3);

console.log(rect);

// primitive and reference

// let a = 10;
// let b = a;

// a++;
// console.log(a);
// console.log(b);

// let a = { value: 10};
// let b = a;

// a.value++;

// console.log(a.value);
// console.log(b.value);

// let a = 10;
// let b = {value:10};
// function inc(a) {// passed by value
//     // a++;
//     a.value++; // passed by reference
// }

// inc(a);
// console.log(a);
// inc(b);
// console.log(b.value);

let rectangle = {
    length:2,
    breadth:4
};

//for-in loop
// for(let key in rectangle) {
//     //keys are reflected through key variable
//     //values are reflected through rectangle[key]
//     console.log(key,rectangle[key]);
// }

//for-of loop
// for(let key of Object.entries(rectangle)){
//     console.log(key);
// }

// if('length' in rectangle){
//     console.log('Present');
// } 
// else{
//     console.log('Absent');
// }

//cloning object
// #01
// let src = {
//     a:10,
//     b:20, 
//     c:30
// };

// let dest = {};

// for(let key in src) {
//     dest[key] = src[key];
// }
// console.log(dest);

// src.a++;
// console.log(dest);

// #02
// let src = {
//     a:10,
//     b:20,
//     c:30
// };

// let src2 = { value: 25};

// let dest = Object.assign({}, src, src2);

// console.log(dest);

// src.a++;

// console.log(dest);

// #03

let src = {
    a:10,
    b:20, 
    c:30
};

let dest = {...src};
console.log(dest);
src.a++;
console.log(dest);