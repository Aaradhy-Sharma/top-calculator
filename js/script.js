const numberButtons = document.querySelectorAll('[data-numbers]');
numberButtons.forEach(button => {
    button.addEventListener('click', () => handleNumbers(button.textContent));
});

const operatorButtons = document.querySelectorAll('[data-operators]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const clearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

let previousOperand = '';
let currentOperand = '';
let operator = '';

function handleNumbers(num) {
    currentOperand += num;
    currentOperandTextElement.textContent = currentOperand;
    currentOperandTextElement.style.fontSize = '2rem';
    console.log('Current Operand:', currentOperand);
}

function clear() {
    currentOperand = '';
    previousOperand = '';
    operator = '';
    currentOperandTextElement.textContent = '';
    previousOperandTextElement.textContent = '';
}
clearButton.addEventListener('click', clear);


console.log('Script Loaded Successfully');
