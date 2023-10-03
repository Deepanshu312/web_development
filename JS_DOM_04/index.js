// synchronous code
// function sync() {
//     console.log('first');
// }
// sync();

// console.log('second');

//asynchronous code
// setTimeout(function() {
//     console.log('third');
// },3000)
// function sync() {
//      console.log('first');
// }
// sync();
    
// console.log('second');.

//promise

// let meraPromise = new Promise(function(resolve, reject) {
//     console.log('I am inside promise');
//     resolve(1998);
// });

// console.log('Pehla');

// let meraPromise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log('I am inside promise');
//     },5000);
//     // resolve(2233);
//     reject(new Error('Bhaisahab Error aaye hai'))
// });

// console.log('Pehla');

// let meraPromise1 = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log('I am inside promise1');
//     },5000);
//     // resolve(2233);
//     // reject(new Error('Bhaisahab Error aaye hai'))
// });

// let meraPromise2 = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log('I am inside promise2');
//     },3000);
//     // resolve(2233);
//     // reject(new Error('Bhaisahab Error aaye hai'))
// });

// console.log('Pehla');

// let meraPromise1 = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log('I am inside promise1');
//     },5000);
//     // resolve(2233);
//     reject(new Error('Bhaisahab Error aaye hai'))
// });

// meraPromise1.then((value) => {console.log(value)}, (error) => {console.log("Recieved an Error")});
// // meraPromise1.catch((error) => {console.log("Recieved an Error")});

//multiple promise
// let waadaa1 = new Promise(function(resolve, reject) {
//     setTimeout(()=> {
//         console.log('settimeout1 started');
//     },2000);
//     resolve(true);
// })

// waadaa1.then(() => {
//     let waadaa2 = new Promise(function(resolve, reject) {
//         setTimeout(()=> {
//             console.log('settimeout2 started');
//         },3000);
//         resolve("waada 2 resolved");
//     })
//     return waadaa2;
// }).then((value) => console.log(value));

// async function abcd() {
//     return "kya hua tera";
// }

// console.log(abcd());

// async function utility() {

//     let delhiMausam = new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve("Delhi me bhot garmi hai");
//         },10000);
//     });

//     let hydMausam = new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve("Hyderabad is cool");
//         },20000);
//     });

//     let DM =await delhiMausam;
//     let HM =await hydMausam;

//     return [DM, HM];
// }

//fetch api

// async function utility() {
//     let content = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     let output = await content.json();
//     console.log(output);
// }

// utility();

//closures

function init() {
    let name = "Mozilla"; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, that forms the closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
  }
  let a = init();

  a();
  
