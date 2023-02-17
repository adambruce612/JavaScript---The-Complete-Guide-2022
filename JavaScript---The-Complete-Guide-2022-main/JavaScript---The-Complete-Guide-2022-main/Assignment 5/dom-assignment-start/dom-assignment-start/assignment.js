//My Answers

//Select this task (in two different ways at least!) and change the background-color to black, text-color to white.
const firstLI = document.getElementById('task-1');
firstLI.style.backgroundColor = 'black';

const firstLI2 = document.querySelector('li');
firstLI2.style.color = 'white';

//Change the document title (in <head></head>) to "Assignment - Solved!". 
//Use two different ways for getting access to the <title> element: Via querySelector on document and via querySelector on the certain property you find in document.
const head = document.querySelector('head');
const title = head.querySelector('title');
title.textContent = 'Assignment - Solved!';

//Select the <h1> element on this page and change its text to "Assignment - Solved!".
const h1 = document.querySelector('h1');
h1.textContent = 'Assignment - Solved!';

//Instructor Answers
//Select this task (in two different ways at least!) and change the background-color to black, text-color to white.
const task1El1 = document.getElementById('task-1');
const task1El2 = document.querySelector('li'); //could select by ID ('#task-1')

task1El1.style.color = 'white';
task1El2.style.backgroundColor = 'black';

//Change the document title (in <head></head>) to "Assignment - Solved!". 
//Use two different ways for getting access to the <title> element: Via querySelector on document and via querySelector on the certain property you find in document.
const docTitle1 = document.querySelector('title');
docTitle1.textContent = 'Assignment - Solved!';

const docHead = document.head;
const docTitle2 = document.head.querySelector('title');

docTitle2.textContent = 'Assignment - Solved';

//Select the <h1> element on this page and change its text to "Assignment - Solved!".
// const h1 = document.getElementsByTagName('h1');
// h1[0].textContent = 'Assignment - Solved!';