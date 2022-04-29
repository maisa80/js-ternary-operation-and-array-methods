let isRaining = false;

console.log("######## if-statement ########");
const ifRaining = document.getElementById('if-raining');
const ternaryRaining = document.getElementById('ternary-raining');
const ifShining = document.getElementById('if-shining');
const ternaryShining = document.getElementById('ternary-shining');

if (isRaining) {

    ifRaining.innerHTML = `<h3 class="alert alert-danger">Stay home</h3>`;
} else {

    ifRaining.innerHTML = `<h3 class="alert alert-success">Go out</h3>`;
}

console.log("######## Ternary operation ########");
isRaining
    ? ternaryRaining.innerHTML = `<h3 class="alert alert-danger">Stay home</h3>`
    : ternaryRaining.innerHTML = `<h3 class="alert alert-success">Go out</h3>`;


let isSunShining = true;
console.log("######## nested if-statement ########");
if (isRaining) {
    ifShining.innerHTML = `<h3 class="alert alert-danger">Stay home</h3>`
} else {
    if (isSunShining) {
        ifShining.innerHTML += `<h3 class="alert alert-success">Go out for ice cream</h3>`
    } else {
        ifShining.innerHTML +=`<h3>Go out for a walk</h3>`;
    }
}

console.log("######## Nested Ternary operation ########");
isRaining
    ? ternaryShining.innerHTML = `<h3 class="alert alert-danger">Stay home</h3>`
    : isSunShining
        ? ternaryShining.innerHTML += `<h3 class="alert alert-success">Go out for ice cream</h3>`
        : ternaryShining.innerHTML +=`<h3>Go out for a walk</h3>`;



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