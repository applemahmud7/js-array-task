/**
 * Problem 1
 */

let fruits = ["aam", "jaam", "kathal", "kola", "lichu"];
console.log(fruits[3]);
fruits[2] = "jambura";
console.log(fruits);

/**
 * Problem 2
 */

let touristSpot = ["cox", "saint", "bandarban"];
touristSpot.push("sajek");
touristSpot.push("kuakata", "kaptai");
touristSpot.pop();
console.log(touristSpot);

/**
 * Problem 3
 */

let books = ['bangla', 'english', 'math'];
let isTrue = books.includes('arabic');

if(isTrue){
    console.log('This book is in the library');
}
else{
    console.log('This book is not in the library');
}

/**
 * Problem 4
 */

let array1 = [1, 2, 3, 4, 5];
let array2 = (1, 2, 3, 4, 5);

let arrayResult1 = Array.isArray(array1);
let arrayResult2 = Array.isArray(array2);

if(arrayResult1){
    console.log('Array 1 is array');
}
else{
    console.log('Array 1 is not array');
}

if(arrayResult2){
    console.log('Array 2 is array');
}
else{
    console.log('Array 2 is not array');
}

/**
 * Problem 5
 */
let firstArray = [1, 2, 3, 4, 5];
let secondArray = [6, 7, 8, 9, 10];

console.log(firstArray, secondArray);

let mainArray = firstArray.concat(secondArray);
console.log(mainArray);