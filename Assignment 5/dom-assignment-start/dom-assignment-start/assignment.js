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