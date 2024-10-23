import { Calculator } from './calculator';

const allButtons = document.querySelectorAll('button');
const outPut = document.querySelector('.output');
const allDataNumbers = Array.from(
	document.querySelectorAll('button[data-number]')
);
const allOperators = Array.from(
	document.querySelectorAll('button[data-operation]')
);
const dataEquals = document.querySelector('button[data-equals]');
const clearContent = document.querySelector('button[data-all-clear]');
const deleteLastNumber = document.querySelector('button[data-delete]');
const firstOperand = document.querySelector('.primary-operand');
const secondOperand = document.querySelector('.secondary-operand');
const hist = document.querySelector('.history');

const calc = new Calculator(
	allDataNumbers,
	firstOperand,
	secondOperand,
	allOperators,
	deleteLastNumber,
	clearContent,
	outPut
);

document.addEventListener('click', (e) => {
	if (!e.target.closest('button[data-number]')) return;
	calc.firstOperand.dataset.primaryOperand += e.target.dataset.number;
	calc.firstOperand.textContent = calc.firstOperand.dataset.primaryOperand;
});

document.addEventListener('click', (e) => {
	if (!e.target.closest('button[data-operation]')) return;
	calc.currentOperator = e.target.dataset.operation;
	calc.lastOperand.dataset.secondaryOperand +=
		calc.firstOperand.dataset.primaryOperand;
	calc.lastOperand.textContent +=
		calc.lastOperand.dataset.secondaryOperand + calc.currentOperator;
	calc.firstOperand.dataset.primaryOperand = '';
});

document.addEventListener('click', (e) => {
	if (!e.target.closest('button[data-equals]')) return;
	calc.lastOperand.textContent +=
		calc.firstOperand.dataset.primaryOperand + e.target.dataset.equals;
	calc.firstOperand.textContent = calc.calculate();
});

document.addEventListener('click', (e) => {
	if (!e.target.closest('button[data-delete]')) return;
	const length = calc.firstOperand.textContent.length;
	if (length > 1) {
		calc.firstOperand.textContent = calc.firstOperand.textContent.slice(0, -1);
		calc.firstOperand.dataset.primaryOperand = calc.firstOperand.textContent;
	} else {
		calc.firstOperand.textContent = '0';
		calc.firstOperand.dataset.primaryOperand = calc.firstOperand.textContent;
	}
});

document.addEventListener('click', (e) => {
	if (!e.target.closest('button[data-all-clear]')) return;
	calc.firstOperand.textContent = '0';
	calc.firstOperand.dataset.primaryOperand = '';
	calc.lastOperand.textContent = '';
	calc.lastOperand.dataset.secondaryOperand = '';
});
