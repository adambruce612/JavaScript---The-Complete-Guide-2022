const addMovieModal = document.getElementById('add-modal'); //Preferred method
//const addMovieModal = document.querySelector('#add-modal'); An addtional way to select the element (it will only select the first element with that class)
// const addMovieModal = document.body.children[1]; //One more way to select the same element.
const startAddMovieButton = document.querySelector('header button');
//const startAddMovieButton = document.querySelector('header').lastElementChild; Another way to select - but if things get changed in the header it will select the wrong thing

const toggleMovieModal = () => { // function() {}
    addMovieModal.classList.toggle('visible');
}

startAddMovieButton.addEventListener('click', toggleMovieModal);