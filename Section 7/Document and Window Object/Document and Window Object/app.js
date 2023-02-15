const input = document.querySelector('input');
console.dir(input);

const h1 = document.getElementById('main-title');

h1.textContent = 'Some new title';
h1.style.color = 'white';
h1.style.backgroundColor = 'black';

const li = document.querySelector('li:last-of-type');
li.textContent = li.textContent + ' (Changed!)';

const body = document.body;


//Selecting elements this way will live update if new elements are added. 
const listItemElements = document.getElementsByTagName('li');
//Will select all elements with li tag - does not live update
//const listItemElements = document.querySelectorAll('li');

for (const listItemEl of listItemElements) {
    console.dir(listItemEl);
}

const ul = document.querySelector('ul');
console.log(ul.children); //only includes element nodes
console.log(ul.children[1]); //selects second element node (second li in this case)
console.log(ul.childNodes); //includes all nodes including text nodes
console.log(ul.firstElementChild, ul.lastElementChild); //faster than using query selector