// // string object
// let lastName = 'Babbar';

// let firstName = new String('Love');

// // let message = 'This is my \' "first" Message';

// //template literal
// let message = `this ${lastName},
// is 
// my 
// first
// message`;
// console.log(message);

// // let words = message.split(' ');

// // console.log(words);

//date
// let date = new Date();

// let date2 = new Date('June 20 1998 07:15');

// let date3 = new Date(2002, 11, 18, 1);

// date3.setFullYear(2001);

// console.log(date3);

//*****Array*****

// let numbers = [1,2,3,4];

// console.log(numbers);

//insertion
// numbers.push(9);

// console.log(numbers);

// numbers.unshift(6);

// console.log(numbers);

// numbers.splice(2,0,'a','b','c','d');

// console.log(numbers);

//searching

// console.log(numbers.indexOf(9));

// //we want to check if a number exist in an array
// if(numbers.indexOf(4) != -1)
//     console.log('present');

// console.log(numbers.includes(7));   

// console.log(numbers.indexOf(2,2));

//searching on primitive

// let courses = [
//     {no:1, naam:'Love'},
//     {no:2, naam:'Deepanshu'}
// ];

// console.log(courses);

// // console.log(courses.indexOf({no:1, naam:'Love'}));--not work for due to refrence

// // let course = courses.find(function(course){
// //     return course.naam == 'Love';
// // });

// // Arrow function
// let course = courses.find(course => course.naam === 'klivish');

// console.log(course);

//removing element
// let numbers = [1,2,3,4,5,6,7];

//end
// numbers.pop();
// //beginning
// numbers.shift();
// //middle
// numbers.splice(2,1);

// console.log(numbers);

//emptying an array
// let numbers = [1,2,3,4,5];
// let numbers2 = numbers;

// //numbers = [];
// // numbers.length = 0;
// numbers.splice(0,numbers.length);

// console.log(numbers);
// console.log(numbers2);

//combining and slicing
// let first = [1,2,3];
// let second = [4,5,6];

// let combined = first.concat(second);
// console.log(combined);

// // let sliced = combined.slice(2,4);
// // let sliced = combined.slice(2);
// let sliced = combined.slice();
// console.log(sliced);

//combining and slicing of object

// let person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 25,
//     ssn: '123-456-2356'
// };


// let job = {
//     jobTitle: 'JavaScript Developer',
//     location: 'USA'
// };

// let employee = {
//     ...person,
//     ...job
// };

// console.log(employee);

//spread operator
// let first = [1,2,3];
// let second = [4,5,6];

// let combined = [...first,'a',false, ...second,'b',true];
// console.log(combined);

// //copy kaise create karu
// let another = [...combined];

// //iterating the array
// let arr = [10,20,30,40,50];

// for(let value of arr) {
//     console.log(value);
// }

// arr.forEach(function(number){
//     console.log(number);
// });

// arr.forEach(number => console.log(number));

//joining array

// let numbers = [10,20,30,40,50];
// const joined = numbers.join(',');

// console.log(joined);

//spliting array
// let message = 'This is my first message';
// let parts = message.split(' ');

// console.log(parts);

// let joined = parts.join('_');
// console.log(joined);

//sorting array
// let numbers = [40,30,10,20,50];

// numbers.sort();
// console.log(numbers);

// numbers.reverse();
// console.log(numbers);

//ascending order
// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){return a-b});
// console.log(points);

//descending order
// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){return b-a});
// console.log(points);

// sort the array object
// let arr = [
//     {id:1,naam:'Love'},
//     {id:2,naam:'Arun'}
// ];

// arr.sort((a,b) => {
   
//     let fa = a.naam.toLowerCase(),
//         fb = b.naam.toLowerCase();

//         if (fa < fb) {
//             return -1;
//         }
//         if (fa > fb) {
//             return 1;
//         }
//         return 0;
// });

// console.log(arr);

//filtering array

// let numbers = [1,2,-1,-4];

// // let filtered = numbers.filter(function(value) {
// //     return value >= 0;
// // });

// let filtered = numbers.filter(value => value >= 0);

// console.log(filtered);

//mapping array
//  let numbers = [7,8,9,10];

//  let items = numbers.map(function(value){
//     return 'student_no ' + value;
//  });

// let items = numbers.map(value => 'student_no ' + value);

//  console.log(items);

// mapping with Object

// let numbers = [1,2,-6,-9];
// let filtered = numbers.filter(value => value >= 0);

// let items = filtered.map(function(num) {
//     return {value: num};
// })

// let numbers = [1,2,-6,-9];

// //chaining
// let items = numbers
//             .filter(value => value >= 0)
//             .map(num => {value: num});

// console.log(items); 

