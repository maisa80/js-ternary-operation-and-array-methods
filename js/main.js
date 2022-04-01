let isRaining = false;
console.log("######## if-statement ########");

if (isRaining) {
    console.log('Stay home');
} else {
    console.log('Go out');
}

console.log("######## Ternary operation ########");
isRaining 
    ? console.log('Stay home') 
    : console.log('Go out');


let isSunShining = true;
console.log("######## nested if-statement ########");
if (isRaining) {
    console.log('Stay home');
} else {
    if (isSunShining) {
        console.log('Go out for ice cream');
    } else {
        console.log('Go out for a walk');
    }
}

console.log("######## Nested Ternary operation ########");
isRaining 
    ? console.log('Stay home') 
    : isSunShining 
        ? console.log('Go out for ice cream') 
        : console.log('Go out for a walk');



console.log("######## nested if-statement, with assignment ########");
let string = "";
if (isRaining) {
    string = 'Stay home';
} else {
    if (isSunShining) {
        string = 'Go out for ice cream';
    } else {
        string = 'Go out for a walk';
    }
}

console.log(string);


console.log("######## Nested Ternary operation, with assignment ########");
string = isRaining 
    ? 'Stay home' 
    : isSunShining 
        ? 'Go out for ice cream' 
        : 'Go out for a walk';



console.log("########## Array.map() ############");
const numbers = [1, 2, 3, 4];

// May loop throug an array with .map()
const newArray1 = numbers.map(number => number);
const newArray2 = numbers.map(number => number * 2);
const newArray3 = numbers.map(number => '<li>' + number + '</li>');

console.log('Original array', numbers);
console.log('New array', newArray3);


console.log("########## Array.filter() ############");
const ages = [25, 12, 4, 55];
const filteredArray1 = ages.filter(age => age >= 18);

console.log('Original array', ages);
console.log('New array', filteredArray1);


const words = ['JavaScript', 'PHP', 'Ruby', 'Java', 'Python'];
const filteredArray2 = words.filter(word => word.length > 4);
console.log('Original array', words);
console.log('New array', filteredArray2);