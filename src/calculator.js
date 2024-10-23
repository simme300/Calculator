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
		const divOp = divide.dataset.operation;
		const multiplyOp = multiply.dataset.operation;
		const addOp = add.dataset.operation;
		const subOp = sub.dataset.operation;
		const primary = this.firstOperand.dataset.primaryOperand;
		const secondary = this.lastOperand.dataset.secondaryOperand;
		let result = 0;

		if (this.currentOperator === divOp) {
			if (this.currentOperator === 0) {
				result = primary;
			}
			result = primary / secondary;
		} else if (this.currentOperator === multiplyOp) {
			result = primary * secondary;
		} else if (this.currentOperator === addOp) {
			result = Number(primary) + Number(secondary);
		} else if (this.currentOperator === subOp) {
			result = primary - secondary;
		} else {
			console.log('No valid operators are given!');
		}

		return result;
	}

	clearCalculator() {
		this.firstOperand.dataset.primaryOperand = '';
		this.lastOperand.dataset.secondaryOperand = '';
		this.firstOperand.textContent = '0';
		this.lastOperand.textContent = '';
	}

	deleteLastNumber() {
		stringArrayForFirstOperand = Array.from(
			this.firstOperand.dataset.primaryOperand
		);
		stringArrayForFirstOperand.pop();
	}
}
