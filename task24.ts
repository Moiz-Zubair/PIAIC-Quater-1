let car = 'subaru';
let age = 18;
let language = 'English';
let fruits = ['apple', 'banana', 'orange'];
let drink = 'coffee';

// Tests for equality and inequality with strings
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

console.log("Is car != 'subaru'? I predict False.");
console.log(car != 'subaru');

// Tests using the lower case function
console.log("Is language == 'english'? I predict True.");
console.log(language.toLowerCase() == 'english');

console.log("Is drink == 'tea'? I predict False.");
console.log(drink.toLowerCase() == 'tea');

// Numerical tests
console.log("Is age == 18? I predict True.");
console.log(age == 18);

console.log("Is age > 18? I predict False.");
console.log(age > 18);

console.log("Is age < 18? I predict False.");
console.log(age < 18);

console.log("Is age >= 18? I predict True.");
console.log(age >= 18);

console.log("Is age <= 18? I predict True.");
console.log(age <= 18);

// Tests using "and" and "or" operators
console.log("Is car == 'subaru' and age == 18? I predict True.");
console.log(car == 'subaru' && age == 18);

console.log("Is car != 'subaru' or age > 18? I predict True.");
console.log(car != 'subaru' || age > 18);

// Test whether an item is in an array
console.log("Is 'apple' in fruits? I predict True.");
console.log('apple' in fruits);

console.log("Is 'grape' in fruits? I predict False.");
console.log('grape' in fruits);

// Test whether an item is not in an array
console.log("Is 'grape' not in fruits? I predict True.");
console.log('grape' !in fruits);

console.log("Is 'banana' not in fruits? I predict False.");
console.log('banana' !in fruits);
