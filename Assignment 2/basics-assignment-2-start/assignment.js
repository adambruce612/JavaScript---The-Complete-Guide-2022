const task3Element = document.getElementById('task-3');

//MY SOLUTION
// let name = 'Adam'

// function one() {
//     alert('This is the first function');
// }

// function two(name) {
//     alert(name);
// }

// one();
// two();

// task3Element.addEventListener('click', one);

// function three(string1, string2, string3) {
//     return string1 + string2 + string3;
// }

// alert(three("hello ", "my name is ", " Adam"));

//INSTRUCTOR SOLUTION
function greet() {
    alert('Hi there!');
}

function greetUser(userName) {
    alert("Hi " + userName)
}

function combine(str1, str2, str3) {
    const combinedText = `${str1} ${str2} ${str3}`;
    return combinedText;
}

// greet();
greetUser("Max");

task3Element.addEventListener('click', greet);

const combinedString = combine('Hi', 'there', '!');
alert(combinedString);