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
const first = document.querySelector('.primary-operand');
const last = document.querySelector('.secondary-operand');
const hist = document.querySelector('.history');

const calc = new Calculator(
	allDataNumbers,
	first,
	last,
	allOperators,
	deleteLastNumber,
	clearContent,
	outPut
);

calc.firstOperand.dataset.number = '5';
calc.lastOperand.dataset.number = '10';
calc.currentOperator = calc.operators[0].dataset.operation;

console.log(calc.calculate());
