export class Calculator {
	constructor(
		numbers,
		firstOperand,
		lastOperand,
		operators,
		del,
		clear,
		output,
		currentOperator
	) {
		this.numbers = numbers;
		this.firstOperand = firstOperand;
		this.lastOperand = lastOperand;
		this.operators = operators;
		this.del = del;
		this.clear = clear;
		this.output = output;
		this.currentOperator = currentOperator;
	}

	calculate() {
		const [divide, multiply, add, sub] = this.operators;
		if (this.currentOperator === divide.dataset.operation) {
			if (this.lastOperand === 0) {
				return this.firstOperand.dataset.number;
			}
			return this.firstOperand.dataset.number / this.lastOperand.dataset.number;
		} else if (this.currentOperator === multiply.dataset.operation) {
			return this.firstOperand.dataset.number * this.lastOperand.dataset.number;
		} else if (this.currentOperator === add.dataset.operation) {
			return (
				Number(this.firstOperand.dataset.number) +
				Number(this.lastOperand.dataset.number)
			);
		} else if (this.currentOperator === sub.dataset.operation) {
			return this.firstOperand.dataset.number - this.lastOperand.dataset.number;
		} else {
			console.log('No valid operators are given!');
		}
	}
}
