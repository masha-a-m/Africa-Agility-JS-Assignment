// Question 1 - Declare variables
let firstName = "Masha";
let lastName = "Ibrahim";
let country = "Nigeria";
let city = "Kaduna";
let age = 25;
let isMarried = false;
let year = 2025;

console.log(typeof firstName); // string
console.log(typeof lastName);  // string
console.log(typeof country);   // string
console.log(typeof city);      // string
console.log(typeof age);       // number
console.log(typeof isMarried); // boolean
console.log(typeof year);      // number




// Question 2 - Check if type of '10' is equal to 10
console.log(typeof '10' === typeof 10); // false



// Question 3 - Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') === 10); // false



// Question 4 - Write three JavaScript statements which provide truthy value
console.log(true);             // true
console.log("Hello");          // non-empty string is truthy
console.log(5);                // any non-zero number is truthy



// Question 5 - Write three JavaScript statements which provide falsy value
console.log(false);            // false
console.log("");               // empty string is falsy
console.log(0);                // zero is falsy



// Question 6 - Evaluate logical expressions
console.log(4 > 3 && 10 < 12); // true
console.log(4 > 3 && 10 > 12); // false
console.log(4 > 3 || 10 < 12); // true
console.log(4 > 3 || 10 > 12); // true
console.log(!(4 > 3));         // false
console.log(!(4 < 3));         // true
console.log(!false);           // true
console.log(!(4 > 3 && 10 < 12)); // false
console.log(!(4 > 3 && 10 > 12)); // true
console.log(!(4 === '4'));     // true



// Question 7 - Calculate the area of a triangle
let base = parseFloat(prompt("Enter the base of the triangle:"));
let height = parseFloat(prompt("Enter the height of the triangle:"));

let area = 0.5 * base * height;

console.log(`The area of the triangle is ${area}`);



// Question 8 - Check if the user is old enough to drive
let birthYear = parseInt(prompt("Enter your birth year:"));
let currentYear = new Date().getFullYear();
let Age = currentYear - birthYear;

if (Age >= 18) {
    console.log(`You are ${Age}. You are old enough to drive.`);
} else {
    let yearsToWait = 18 - Age;
    console.log(`You are ${Age}. You will be allowed to drive after ${yearsToWait} years.`);
}



// Question 9 - Manipulate the string "30 Days Of JavaScript"
let challenge = "30 Days Of JavaScript";

console.log(challenge.toUpperCase()); // "30 DAYS OF JAVASCRIPT"

console.log(challenge.toLowerCase()); // "30 days of javascript"

console.log(challenge.slice(0, 2)); // "30"

console.log(challenge.slice(3)); // "Days Of JavaScript"

console.log(challenge.includes("Script")); // true

console.log(challenge.indexOf("a")); // 4

console.log(challenge.lastIndexOf("a")); // 14

let sentence = "You cannot end a sentence with because because because is a conjunction";
console.log(sentence.indexOf("because")); // 31

console.log(challenge.startsWith("30")); // true

console.log(challenge.endsWith("JavaScript")); // true




// Question 10 - Generate a random number between 0 and 100
let randomNumber = Math.floor(Math.random() * 101);
console.log(randomNumber);



// Question 11 - Compare two numbers using if-else and ternary operator
let a = 10;
let b = 20;

// using if-else
if (a > b) {
    console.log("a is greater than b");
} else {
    console.log("a is less than b");
}

// using ternary operator
console.log(a > b ? "a is greater than b" : "a is less than b");




// Question 12 - Assign grades based on scores
let scores = parseInt(prompt("Enter your score:"));

if (scores >= 80 && scores <= 100) {
    console.log("Grade: A");
} else if (scores >= 70 && scores <= 79) {
    console.log("Grade: B");
} else if (scores >= 60 && scores <= 69) {
    console.log("Grade: C");
} else if (scores >= 50 && scores <= 59) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}