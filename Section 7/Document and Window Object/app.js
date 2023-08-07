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

//Video 157 - each element or node can only have one parent
const liFirst = document.querySelector('li');
console.log(liFirst.parentElement); //select ul
liFirst.closest('body'); //selects closest ancestor element
//query selector would be used for descendant elements
//only element nodes can have parent nodes
document.documentElement.parentNode //only exception to the rule

//This gets access to the header
const ul1 = li.parentElement;
ul.previousElementSibling // gets us previous element sibling node
//previousElement will grab next sibling node (includes text nodes)

//hard to tell what you are selecting - if you add additional HTML the selector is no longer valid
const ul2 = document.body.firstElementChild.nextElementSibling;
//more straightfoward way of selecting the same thing
const firstLi = ul.firstElementChild;
console.log(firstLi);

//Video 160
const section = document.querySelector('section');
// const firstLi = ul.firstElementChild;
section.style.backgroundColor = 'green';

// const section = document.querySelector('section');
const button = document.querySelector('button');
// section.style.backgroundColor = 'blue';
section.className = 'red-bg';

button.addEventListener('click', () => {
    // if (section.className === 'red-bg visible') {
    //     section.className = 'red-bg invisible'
    // } else {
    // section.className = 'red-bg visible';
    // }

    section.classList.toggle('visible');
    section.classList.toggle('invisible');
})

section.innerHTML = "<h2>A new title!</h2>"

//Video 162
const list = document.querySelector('ul');
list.innerHTML = list.innerHTML + '<li>Item 4</li>';
const div = document.querySelector('div');
//innerHTML re-renders all of the content. 
// use insert adjecent html instead to keep original content https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML
//insert adjecent html does not give you direct access to the created element
div.insertAdjacentHTML('beforeend', '<p>Something went wrong!</p>')

//Video 163
//create element allows you to directly access created element (saves a step from insert adjacent html)
div.querySelector('p');
const list163 = document.querySelector('ul');
const newLi = document.createElement('li'); //must take at least one argument (element)
list163.appendChild(newLi);
newLi.textContent = 'Item 4'

//Video 164 - Inserting DOM Elements
//You can use the append method to insert text nodes
//list.append('Some text');
//Append is not supported by Internet Explorer
const list164 = document.querySelector('ul');
//const newli = document.createElement('li'); - already declared in previous video
newLi.textContent = "Item 4";
list.append(newLi);
list.prepend(newLi); //This will append it as the first element (not supported by IE)
list.lastElementChild.before(newLi); //This will add the item before the currently last item
list.lastElementChild.after(newLi); //Adds the item after the last element
list.firstElementChild.replaceWith(newLi); //Replaces the targeted element with the new element
//Inserting the same element multiple times will only move it - you would need to create new elements to have the new one created
secondLi.insertAdjacentHTML('afterend', newli); //Has better browser support than before/after.

//Video 165 - Cloning DOM nodes
const newLi2 = newLi.cloneNode(true); //Accepts a boolean to determine if a deep clone should be done (all descendants will be cloned as well with the deep clone)\
list.append(newli, newLi2);

//Video 166 - Live Node Lists vs Static Node Lists
const listItems = list.querySelectorAll('li'); //Will select all list items in the list - is a non-live list.
const listItems2 = list.getElementsByTagName('li'); //Is a live node list 
list.append(newLi);

//Video 167 - Removing Elements
const list167 = document.querySelector('ul');
list167.remove(); //Not supported by IE
list167.parentElement.removeChild(list167); //Supported in all browsers