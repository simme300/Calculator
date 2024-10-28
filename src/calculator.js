export class Calculator {
	constructor(firstOperand, lastOperand, currentOperator) {
		this.firstOperand = firstOperand;
		this.lastOperand = lastOperand;
		this.currentOperator = currentOperator;
	}

	addNumbers() {
		return (
			Number(this.firstOperand.dataset.primaryOperand) +
			Number(this.lastOperand.dataset.secondaryOperand)
		);
	}

	subtractNumbers() {
		return (
			Number(this.firstOperand.dataset.primaryOperand) -
			Number(this.lastOperand.dataset.secondaryOperand)
		);
	}

	divideNumbers() {
		return (
			Number(this.firstOperand.dataset.primaryOperand) /
			Number(this.lastOperand.dataset.secondaryOperand)
		);
	}

	multiplyNumbers() {
		return (
			Number(this.firstOperand.dataset.primaryOperand) *
			Number(this.lastOperand.dataset.secondaryOperand)
		);
	}

	calculate(target) {
		let result = 0;
		if (target === '*') {
			result = this.multiplyNumbers();
		} else if (target === '-') {
			result = this.subtractNumbers();
		} else if (target === '÷') {
			result = this.divideNumbers();
		} else if (target === '+') {
			result = this.divideNumbers();
		}
		this.firstOperand.textContent = result;
	}

	clearFirstOperand() {
		this.firstOperand.textContent = '0';
		this.firstOperand.dataset.primaryOperand = '';
	}

	clearSecondOperand() {
		this.lastOperand.dataset.secondaryOperand = '';
		this.lastOperand.textContent = '';
	}

	clearCalculator() {
		this.firstOperand.dataset.primaryOperand = '';
		this.firstOperand.textContent = '0';
		this.lastOperand.dataset.secondaryOperand = '';
		this.lastOperand.textContent = '';
	}

	deleteLastNumber() {
		let txtHolder = '';
		if (this.firstOperand.textContent.length > 1) {
			txtHolder = this.firstOperand.textContent.slice(0, -1);
			this.firstOperand.textContent = txtHolder;
		} else if (
			this.firstOperand.textContent.length === 1 &&
			this.firstOperand.textContent !== '0'
		) {
			this.clearFirstOperand();
		}
	}

	appendNumbers(target) {
		if (
			this.firstOperand.textContent === '0' &&
			this.firstOperand.textContent.length === 1
		) {
			this.firstOperand.textContent = target;
			this.firstOperand.dataset.primaryOperand = this.firstOperand.textContent;
		} else if (
			this.firstOperand.textContent !== '0' &&
			this.firstOperand.textContent.length >= 1
		) {
			this.firstOperand.textContent += target;
			this.firstOperand.dataset.primaryOperand = this.firstOperand.textContent;
		}
		if (this.firstOperand.textContent.length >= 16) {
			let strHolder = this.firstOperand.textContent.slice(0, 16);
			this.firstOperand.textContent = strHolder;
			this.firstOperand.dataset.primaryOperand = this.firstOperand.textContent;
		}
	}

	addOperator(target) {
		this.currentOperator = target;
		this.lastOperand.dataset.secondaryOperand =
			this.firstOperand.dataset.primaryOperand;
		this.lastOperand.textContent +=
			this.lastOperand.dataset.secondaryOperand + target;

		this.firstOperand.textContent = '0';
		this.firstOperand.dataset.primaryOperand = '';
	}
}
