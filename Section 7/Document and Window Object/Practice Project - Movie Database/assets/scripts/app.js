const addMovieModal = document.getElementById('add-modal'); //Preferred method
//const addMovieModal = document.querySelector('#add-modal'); An addtional way to select the element (it will only select the first element with that class)
// const addMovieModal = document.body.children[1]; //One more way to select the same element.
const startAddMovieButton = document.querySelector('header button');
//const startAddMovieButton = document.querySelector('header').lastElementChild; Another way to select - but if things get changed in the header it will select the wrong thing
const backdrop = document.getElementById('backdrop');
// const backdrop = document.body.firstElementChild; Another way to select
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');
//const userInputs = addMovieHandler.getElementsByTagName('input'); //Another way to select all the inputs

const movies = [];

const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
};

const toggleMovieModal = () => { // function() {}
    addMovieModal.classList.toggle('visible');
    toggleBackdrop();
};

const clearMovieInput = () => {
    for (const usrInput of userInputs) {
        usrInput.value = "";
    }
};

const cancelAddMovieHandler = () => {
    toggleMovieModal();
    clearMovieInput();
};

const addMovieHandler = () => {
    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    if (titleValue.trim() === "" || imageUrlValue.trim() === "" || ratingValue.trim() === "" || +ratingValue < 1 || +ratingValue > 5) {
        alert("Please enter valid values (rating between 1 and 5).");
        return;
    }
    
    const newMovie = {
        title: titleValue,
        image: imageUrlValue,
        rating: ratingValue
    };
    
    movies.push(newMovie);
    console.log(movies);
    toggleMovieModal();
    clearMovieInput();
};

const backdropClickHandler = () => {
    toggleMovieModal();
}

startAddMovieButton.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);