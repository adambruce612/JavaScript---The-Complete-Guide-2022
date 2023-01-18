const startGameBtn = document.getElementById('start-game-btn');

//Only running this function once so creating an anonymous function works better.
// const start = function() {
//     console.log("Game is starting...");
// };

// const start = function() {
//     console.log('Game is starting...');
// };

// const person = {
    // name: 'Max',
//  greet: function greet() {
//         console.log('Hello there!');
//     }
// };

// person.greet();

// console.dir(startGame);

startGameBtn.addEventListener('click', function startGame(){
    console.log('Game is starting...');
});