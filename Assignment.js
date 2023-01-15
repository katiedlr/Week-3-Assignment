//create new array called ages

let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages);

//subract value of the first element in the array from the last value in the last element of the array

console.log(ages[ages.length-1] - ages[0]);

//add a new age and repeat previous

ages.push(6);
console.log(ages[ages.length-1] - ages[0]);

//Use a loop to iterate through the array and calculate the average age

let sum = 0;
for (let i = 0; i < ages.length; i++){
    sum = sum + ages[i];
}
console.log(sum/ages.length);

//Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’

const names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

//Use a loop to iterate through the array and calculate the average number of letters per name

for(let i= 0; i < names.length; i++)
{
    sum += names[i].length;
}
let average =sum/(names.length);
console.log(average);

//Use a loop to iterate through the array again and concatenate all the names together, separated by spaces

let allTogether = ("");
for(let i= 0; i < names.length; i++)
{
   allTogether += names[i] + ' '
}
console.log(allTogether);

//How to access last element of any array
ages[ages.length-1];

//How to access the first element of any array
ages[0];

//Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array
let nameLengths = [];
let output = '';
for(let i= 0; i < names.length; i++)
{
   output += names[i] + ' '
}
console.log();

//Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array

//Function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times
let wordN = (word,n) => word + ' ' *n;

//Function that takes two parameters, firstName and lastName, and returns a full name
let fullName = (firstName, lastName) => firstName + ' ' + lastName;
console.log(fullName);

//Function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100
function sumArray(array) {
    let sum = 0;
    array.forEach()

}
//Function that takes an array of numbers and returns the average of all the elements in the array
let averageAll = (ages) => 

//Function that takes two arrays of numbers & returns true if the avg of the elements in the first array is greater than the avg of the elements in the second array

//Function called willBuyDrink that takes a boolean isHotOutside, & a number moneyInPocket, & returns true if it is hot outside & if moneyInPocket is greater than 10.50
function willBuyDrink (isHotOutside, moneyInPocket) {
    if (isHotOutside == true && moneyInPocket > 10.50) {return
    true } else {
        return false
    }
}
//Function of your own that solves a problem & what the function does and why you created it