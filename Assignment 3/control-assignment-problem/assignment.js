// //MY SOLUTION
// const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
// const newRandomNumber = Math.random();
// const numArray = [1, 2, 3, 4, 5];

// if (randomNumber > 0.7) {
//     alert("This number is greater than 0.7.");
// }

// for (i = 0; i < numArray.length; i++) {
//     console.log(numArray[i]);
// }

// for (const num of numArray) {
//     console.log(num);
// }

// for (i = numArray.length - 1; i >= 0; i--) {
//     console.log(numArray[i]);
// }

// //Create another random number (in a separate constant) and show an alert in two different scenarios: Both are greater 0.7 OR at least one of the two isNOT greater than 0.2.
// if (randomNumber && newRandomNumber > 0.7) {
//     alert("Both random numbers are greater than 0.7.");
// } else if (!randomNumber || newRandomNumber > 0.2) {
//     alert("One number is not greater than 0.2.");
// }

//INSTRUCTOR SOLUTION
const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

if (randomNumber >= 0.7) {
  alert('Greater or equal than 0.7.');
} else {
  alert('Not greater!');
}

const numbers = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

for (const num of numbers) {
  console.log(num);
}

let counter = 0;
while (counter < numbers.length) {
  console.log(numbers[counter]);
  counter++;
}

// for loop => backwards

for (let i = numbers.length - 1; i >= 0; i--) {
  console.log(numbers[i]);
}

const randomNumber2 = Math.random();A

console.log(randomNumber);
console.log(randomNumber2);
if (
  (randomNumber > 0.7 && randomNumber2 > 0.7) ||
  randomNumber <= 0.2 ||
  randomNumber2 <= 0.2
) {
  alert('Greater than 0.7 or smaller than 0.2.');
}
