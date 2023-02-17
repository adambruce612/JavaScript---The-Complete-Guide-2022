// |||||MY ANSWERS

// function sayHello(name) {
//   console.log('Hi ' + name);
// }

// sayHello(name);

//1. Re-write the function you find in assignment.js as an arrow function
const sayHello = (name) => {
  console.log('Hi ' + name);
}

sayHello(name);

//2. Adjust the arrow function you created as part of task 1 to use three different syntaxes: With two arguments (incl. a phrase that replaces "Hi"), 
//with no arguments (hard-coded values in function body) and with one returned value (instead of outputting text inside of the function directly).
const sayHello2 = (greeting, name) => {
  console.log(greeting, name);
};

const sayHello3 = () => {
  console.log('Hello user');
};

const sayHello4 = (name) => {
  return name;
};


//3. Add a default argument to the function you created: A fallback value for the phrase if no value is provided.
const sayHello5 = (name = "Guest") => {
  console.log('Hi ' + name);
}
//4. Add a new function: "checkInput" which takes an unlimited amount of arguments (unlimited amount of strings)
// and executes a callback function if NO argument/ string is an empty string.
const checkInput = (...input) => {
  const validateString = (string) => {
     if(input === "") {
      return "You did not enter valid information"
    } else {
      return string;
    }
  }
  console.log("Hi, " + input);
};

// |||PROVIDED ANSWERS

//1. 
const sayHello7 = name => console.log('Hi ' + name);
sayHello('Max');

//2. 
const sayHello8 = (name, phrase) => console.log(phrase + ' ' + name);
const sayHello9 = () => console.log('Hello user!');
const sayHello10 = name => 'Hi ' + name;

//3. 
const sayHello11 = (name, phrase = 'Hi') => console.log(phrase + ' ' + name);

//4. 
function checkInput1(cb, ...strings) {
  let hasEmptyText = false;
  for (const text of strings) {
    if (!text) {
      hasEmptyText = true;
      break;
    }
  }
  if (!hasEmptyText) {
    cb();
  }
}

checkInput(() => {
  console.log("All not empty");
}, 'Hello', '12', 'asdf', 'not empty');