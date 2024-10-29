export class Calculator {
	#operatorCount = 0;
	constructor() {
		this.firstOperand = document.querySelector('.primary-operand');
		this.secondOperand = document.querySelector('.secondary-operand');
		this.currentOperator = '';
	}

	incrementOpCount() {
		this.#operatorCount++;
		console.log(this.#operatorCount);
	}

	get opCount() {
		return this.#operatorCount;
	}

	setOperatorCount() {
		this.#operatorCount = 1;
	}

	resetOpCount() {
		this.#operatorCount = 0;
	}
	decrementOpCount() {
		if (this.#operatorCount > 1) {
			this.#operatorCount--;
		}
	}

	addNumbers() {
		return (
			Number(this.firstOperand.dataset.primaryOperand) +
			Number(this.secondOperand.dataset.secondaryOperand)
		);
	}

	subtractNumbers() {
		return (
			Number(this.firstOperand.dataset.primaryOperand) -
			Number(this.secondOperand.dataset.secondaryOperand)
		);
	}

	divideNumbers() {
		return (
			Number(this.firstOperand.dataset.primaryOperand) /
			Number(this.secondOperand.dataset.secondaryOperand)
		);
	}

	multiplyNumbers() {
		return (
			parseFloat(this.firstOperand.dataset.primaryOperand) *
			parseFloat(this.secondOperand.dataset.secondaryOperand)
		);
	}

	calculate(equals = '') {
		let result = 0;
		if (this.currentOperator === '*') {
			result = this.multiplyNumbers();
		} else if (this.currentOperator === '-') {
			result = this.subtractNumbers();
		} else if (this.currentOperator === '÷') {
			result = this.divideNumbers();
		} else if (this.currentOperator === '+') {
			result = this.appendNumbers();
		}

		if (equals) {
			this.secondOperand.textContent =
				this.firstOperand.textContent +
				this.currentOperator +
				this.secondOperand.dataset.secondaryOperand +
				equals;
			this.firstOperand.textContent = result;
			this.resetOpCount();
		} else {
			this.secondOperand.textContent = result + this.currentOperator;
			this.firstOperand.textContent = result;
			this.secondOperand.dataset.secondaryOperand = result;
			this.setOperatorCount();
		}
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

	addOperator(operator) {
		this.incrementOpCount();
		if (this.opCount > 1) {
			this.currentOperator = operator;
			this.calculate();
		}
		this.currentOperator = operator;
		this.secondOperand.dataset.secondaryOperand = this.firstOperand.textContent;
		this.secondOperand.textContent =
			this.secondOperand.dataset.secondaryOperand + operator;

		this.clearFirstOperand();
	}
}
