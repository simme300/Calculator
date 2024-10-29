import { Calculator } from './calculator';

const calc = new Calculator();

document.addEventListener('click', (e) => {
	if (!e.target.closest('button[data-number]')) return;
	calc.appendNumbers(e.target.textContent);
});

document.addEventListener('click', (e) => {
	if (!e.target.closest('button[data-operation]')) return;
	calc.addOperator(e.target.textContent);
});

document.addEventListener('click', (e) => {
	if (!e.target.closest('button[data-equals]')) return;
	calc.calculate(e.target.textContent);
});

document.addEventListener('click', (e) => {
	if (!e.target.closest('button[data-delete]')) return;
	calc.deleteLastNumber();
});

document.addEventListener('click', (e) => {
	if (!e.target.closest('button[data-all-clear]')) return;
	calc.clearCalculator();
});
