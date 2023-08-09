const addMovieModal = document.getElementById('add-modal'); //Preferred method
//const addMovieModal = document.querySelector('#add-modal'); An addtional way to select the element (it will only select the first element with that class)
// const addMovieModal = document.body.children[1]; //One more way to select the same element.
const startAddMovieButton = document.querySelector('header button');
//const startAddMovieButton = document.querySelector('header').lastElementChild; Another way to select - but if things get changed in the header it will select the wrong thing
const backdrop = document.getElementById('backdrop');
// const backdrop = document.body.firstElementChild; Another way to select
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;


const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
};

const toggleMovieModal = () => { // function() {}
    addMovieModal.classList.toggle('visible');
    toggleBackdrop();
};

const cancelAddMovieHandler = () => {
    toggleMovieModal();
};

const addMovieHandler = () => {
    
};

const backdropClickHandler = () => {
    toggleMovieModal();
}

startAddMovieButton.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click',)