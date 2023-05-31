// Create a new array called ages
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages);

// Subtract the value of the first element in the array from the last value in the last element of the array
console.log(ages[ages.length - 1] - ages[0]);

// Add a new age and repeat the previous operation
ages.push(6);
console.log(ages[ages.length - 1] - ages[0]);

// Use a loop to iterate through the array and calculate the average age
let sum = 0;
for (let i = 0; i < ages.length; i++) {
  sum += ages[i];
}
let averageAge = sum / ages.length;
console.log(averageAge);

// Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’
const names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

// Use a loop to iterate through the array and calculate the average number of letters per name
let totalLetters = 0;
for (let i = 0; i < names.length; i++) {
  totalLetters += names[i].length;
}
let averageLetters = totalLetters / names.length;
console.log(averageLetters);

// Use a loop to iterate through the array again and concatenate all the names together, separated by spaces
let allTogether = "";
for (let i = 0; i < names.length; i++) {
  allTogether += names[i] + " ";
}
console.log(allTogether);

// How to access the last element of any array
console.log(ages[ages.length - 1]);

// How to access the first element of any array
console.log(ages[0]);

// Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array
let nameLengths = [];
for (let i = 0; i < names.length; i++) {
  nameLengths.push(names[i].length);
}
console.log(nameLengths);

// Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array
let nameLengthsSum = 0;
for (let i = 0; i < nameLengths.length; i++) {
  nameLengthsSum += nameLengths[i];
}
console.log(nameLengthsSum);

// Function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times
function concatenateWord(word, n) {
  return word.repeat(n);
}
console.log(concatenateWord("Hello", 3));

// Function that takes two parameters, firstName and lastName, and returns a full name
function getFullName(firstName, lastName) {
  return firstName + " " + lastName;
}
console.log(getFullName("John", "Doe"));

// Function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100
function isSumGreaterThan100(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum > 100;
}
console.log(isSumGreaterThan100([10, 20, 30, 40]));

// Function that takes an array of numbers and returns the average of all the elements in the array
function getAverage(numbers
