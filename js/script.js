const numberButtons = document.querySelectorAll('[data-numbers]');
numberButtons.forEach(button => {
    button.addEventListener('click', () => handleNumbers(button.textContent));
});

const operatorButtons = document.querySelectorAll('[data-operations]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const clearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');
const specialButtons = document.querySelectorAll('[data-special]');

let previousOperand = '';
let currentOperand = '';
let operator = '';

function handleNumbers(num) {
    if (currentOperand.length > 9) return;
    else {
        currentOperand += num;
        currentOperandTextElement.textContent = currentOperand;
        currentOperandTextElement.style.fontSize = '2rem';
        console.log('Current Operand:', currentOperand);
    }
}

function clear() {
    currentOperand = '';
    previousOperand = '';
    operator = '';
    currentOperandTextElement.textContent = '';
    previousOperandTextElement.textContent = '';
    let outputScreen = document.querySelector('.outputScreen');
    outputScreen.style.fontSize = '2rem';
    outputScreen.classList.remove('result');
}

function deleteNumber() {
    currentOperand = currentOperand.toString().slice(0, -1);
    currentOperandTextElement.textContent = currentOperand;
    console.log('Current Operand:', currentOperand);
}

clearButton.addEventListener('click', clear);
deleteButton.addEventListener('click', deleteNumber);

operatorButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        handleOperator(e.target.textContent);
        currentOperandTextElement.textContent = currentOperand;
        previousOperandTextElement.textContent = previousOperand + ' ' + operator;
    });
});

function handleOperator(op) {
    console.log('Operator:', op);
    operator = op;
    previousOperand = currentOperand;
    currentOperand = '';
}

equalsButton.addEventListener('click', () => computeResult(previousOperand, currentOperand, operator));

function computeResult(previousOperand, currentOperand, operator) {
    let result = 0;
    switch (operator) {
        case '+':
            result = parseFloat(previousOperand) + parseFloat(currentOperand);
            break;
        case '-':
            result = parseFloat(previousOperand) - parseFloat(currentOperand);
            break;
        case 'x':
            result = parseFloat(previousOperand) * parseFloat(currentOperand);
            break;
        case '÷':
            result = parseFloat(previousOperand) / parseFloat(currentOperand);
            break;
        default:
            return;
    }
    currentOperand = result;
    currentOperandTextElement.textContent = currentOperand;
    previousOperandTextElement.textContent = '';
    console.log('Result:', result);
    let outputScreen = document.querySelector('.outputScreen');
    outputScreen.style.fontSize = '2rem';
    outputScreen.classList.add('result');
}




const specialButton = document.querySelector('[data-special]');
specialButton.addEventListener('click', handleSpecial);

function handleSpecial() {
    let textOutput = 'Made by Aaradhy Sharma';
    let outputScreen = document.querySelector('.outputScreen');
    currentOperandTextElement.textContent = textOutput;
    outputScreen.style.fontSize = '1rem';

    let link="https://github.com/Aaradhy-Sharma/top-calculator";
    window.open(link, "_blank");
}

console.log('Script Loaded Successfully');
