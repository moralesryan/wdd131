
//array filter//
const fruits = ["mango", "melon", "coconut", "apple", "banana", "grapes", "pinneaple", "plum"];
let shorterFruits = fruits.filter(getShorterFruits);

console.log(shorterFruits);

function getShorterFruits(fruit){
    return fruit.length <= 5;
}