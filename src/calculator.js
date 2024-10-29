export class Calculator {
	constructor() {
		this.firstOperand = document.querySelector('.primary-operand');
		this.secondOperand = document.querySelector('.secondary-operand');
		this.result = 0;
		this.currentOperator = '';
	}

	addNumbers() {
		return (
			Number(this.secondOperand.dataset.secondaryOperand) +
			Number(this.firstOperand.dataset.primaryOperand)
		);
	}

	subtractNumbers() {
		return (
			Number(this.secondOperand.dataset.secondaryOperand) -
			Number(this.firstOperand.dataset.primaryOperand)
		);
	}

	divideNumbers() {
		return (
			Number(this.secondOperand.dataset.secondaryOperand) /
			Number(this.firstOperand.dataset.primaryOperand)
		);
	}

	multiplyNumbers() {
		return (
			Number(this.secondOperand.dataset.secondaryOperand) *
			Number(this.firstOperand.dataset.primaryOperand)
		);
	}

	calculate(equals = '') {
		if (this.currentOperator === '*') {
			this.result = this.multiplyNumbers();
		} else if (this.currentOperator === '-') {
			this.result = this.subtractNumbers();
		} else if (this.currentOperator === '÷') {
			this.result = this.divideNumbers();
		} else if (this.currentOperator === '+') {
			this.result = this.addNumbers();
		}

		this.secondOperand.textContent += this.firstOperand.textContent + equals;
		this.firstOperand.textContent = this.result;
	}

	clearFirstOperand() {
		this.firstOperand.textContent = '0';
		this.firstOperand.dataset.primaryOperand = '0';
	}

	clearSecondOperand() {
		this.secondOperand.dataset.secondaryOperand = '';
		this.secondOperand.textContent = '';
	}

	clearCalculator() {
		this.firstOperand.dataset.primaryOperand = '0';
		this.firstOperand.textContent = '0';
		this.secondOperand.dataset.secondaryOperand = '';
		this.secondOperand.textContent = '';
		this.resetOpCount();
	}

	deleteLastNumber() {
		let txtHolder = '';
		if (this.firstOperand.dataset.primaryOperand.length > 1) {
			txtHolder = this.firstOperand.dataset.primaryOperand.slice(0, -1);
			this.firstOperand.dataset.primaryOperand = txtHolder;
			this.firstOperand.textContent = this.firstOperand.dataset.primaryOperand;
		} else if (
			this.firstOperand.dataset.primaryOperand.length === 1 &&
			this.firstOperand.dataset.primaryOperand !== '0'
		) {
			this.clearFirstOperand();
		}
	}

	appendNumbers(target) {
		if (
			this.firstOperand.textContent === '0' &&
			this.firstOperand.textContent.length === 1
		) {
			this.firstOperand.dataset.primaryOperand = target;
			this.firstOperand.textContent = this.firstOperand.dataset.primaryOperand;
		} else if (
			this.firstOperand.dataset.primaryOperand !== '0' &&
			this.firstOperand.dataset.primaryOperand.length >= 1
		) {
			this.firstOperand.dataset.primaryOperand += target;
			this.firstOperand.textContent = this.firstOperand.dataset.primaryOperand;
		}
		if (this.firstOperand.dataset.primaryOperand.length >= 16) {
			let strHolder = this.firstOperand.dataset.primaryOperand.slice(0, 16);
			this.firstOperand.dataset.primaryOperand = strHolder;
			this.firstOperand.textContent = this.firstOperand.dataset.primaryOperand;
		}
	}
	addOperator(target) {
		this.currentOperator = target;
		this.secondOperand.dataset.secondaryOperand =
			this.firstOperand.dataset.primaryOperand;

		this.secondOperand.textContent =
			this.secondOperand.dataset.secondaryOperand + target;

		this.clearFirstOperand();
	}
}
