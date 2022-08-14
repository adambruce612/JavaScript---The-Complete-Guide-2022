const defaultResult = 0;
let currentResult = defaultResult;

//Known as a pure function
function add() {
    const result = currentResult + userInput.value;
    outputResult(currentResult, calculationDescription);
}

add();

addBtn.addEventListener('click', add);



 