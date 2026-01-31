
//array filter//
//✅ Returns a new array
//❌ Does not modify the original
//✅ Callback must return true or false
//❌ Doesn’t change the items—only includes or excludes
const fruits = ["mango", "melon", "coconut", "apple", "banana", "grapes", "pinneaple", "plum"];
let shorterFruits = fruits.filter(getShorterFruits);

console.log(shorterFruits);

function getShorterFruits(fruit){
    return fruit.length <= 5;
}

//array map//
//✅ Returns a new array
//❌ Does not modify the original array
//✅ Best for transforming data
//❌ Not for filtering (filter()) or side effects (forEach())

const numbers =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let squares = numbers.map(squared);
let cubes = numbers.map(cube);

console.log(squares);
console.log(cubes);


function squared(number) {
    return Math.pow(number, 2)
}

function cube(number) {
    return Math.pow(number, 3)
}

//array reduce//
//✅ Returns one value
//✅ Extremely flexible
//⚠️ Harder to read if overused
//❌ Don’t use it when map or filter is clearer
const prices = [19, 24, 55, 12, 42, 52, 18, 26, 49];
let totalPrice = prices.reduce(sum);

console.log(`$${totalPrice}`);

function sum(previous, next){
    return previous + next;
}

//Practice
//filter
let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];

const startsWithB = names.filter(name => name.startsWith("B"));

console.log(startsWithB);

//map
let namesLength = names.map((name) => name.length);

console.log(namesLength);

//reduce
let averageNamesLength = names.reduce((total, name) => total + name.length, 0) / names.length;

console.log(averageNamesLength);