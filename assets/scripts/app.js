const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

//Gets input from input field
function getUserNumberInput() {
    return parseInt(userInput.value);
}

//Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription); //from vendor file
}

function writeToLog(operationIdentifier, prevResult, operationNumber, newResult) {
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function calculate(operation) {
    const enteredNumber = getUserNumberInput();
    // if (calculationType === 'ADD' || calculationType === 'SUBTRACT' || calculationType === 'MULTIPLY' || calculationType === 'DIVIDE') {
    const initialResult = currentResult;
    let operator;
    if (operation === 'ADD') {
        currentResult += enteredNumber;
        operator = "+";
    } else if (operation === 'SUBTRACT') {
        currentResult -= enteredNumber;
        operator = "-"
    } else if (operation === 'MULTIPLY') {
        currentResult *= enteredNumber;
        operator = "*"
    } else if (operation === 'DIVIDE') { //could use else since all other options are used previously
        currentResult /= enteredNumber;
        operator = "/"
    }
    createAndWriteOutput(operator, initialResult, enteredNumber);
    writeToLog(operation, initialResult, enteredNumber, currentResult);
// }
}

//Known as a pure function
// function add() {
//     calculateResult('ADD');
// }

// function subtract() {
//    calculateResult('SUBTRACT');
// }

// function multiply() {
//     calculateResult('MULTIPLY'); 
// }

// function divide() {
//     calculateResult('DIVIDE');
// }


addBtn.addEventListener('click', calculate.bind(this, 'ADD'));
subtractBtn.addEventListener('click', calculate.bind(this, 'SUBTRACT'));
multiplyBtn.addEventListener('click', calculate.bind(this, 'MULTIPLY'));
divideBtn.addEventListener('click', calculate.bind(this, 'DIVIDE'));




 