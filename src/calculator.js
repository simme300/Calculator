export class Calculator {
	constructor() {
		this.firstOperand = document.querySelector('.primary-operand');
		this.secondOperand = document.querySelector('.secondary-operand');
		this.result = 0;
		this.currentOperator = '';
		this.numberArray = [];
		this.resultArray = [];
		this.regEx = /[*+-÷]/;
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

	calculate(equals) {
		if (this.currentOperator === '*') {
			this.result = this.multiplyNumbers();
		} else if (this.currentOperator === '-') {
			this.result = this.subtractNumbers();
		} else if (this.currentOperator === '÷') {
			this.result = this.divideNumbers();
		} else if (this.currentOperator === '+') {
			this.result = this.addNumbers();
		}
		if (equals) {
			this.firstOperand.textContent = this.result;
			this.clearSecondOperand();
			this.numberArray = [];
			this.resultArray.push(this.result);
		} else {
			this.resultArray.push(this.result);
			this.firstOperand.textContent = this.result;
			this.secondOperand.textContent = this.result + this.currentOperator;
			this.secondOperand.dataset.secondaryOperand = this.result;
			this.firstOperand.dataset.primaryOperand = '';
			this.numberArray = [];
		}
	}

	clearFirstOperand() {
		this.firstOperand.textContent = '';
		this.firstOperand.dataset.primaryOperand = '';
	}

	clearSecondOperand() {
		this.secondOperand.dataset.secondaryOperand = '';
		this.secondOperand.textContent = '';
	}

	clearCalculator() {
		this.firstOperand.dataset.primaryOperand = '';
		this.firstOperand.textContent = '';
		this.secondOperand.dataset.secondaryOperand = '';
		this.secondOperand.textContent = '';
		this.numberArray = [];
	}

	deleteLastNumber() {
		const arrLength = this.numberArray.length;
		if (arrLength && arrLength > 0) {
			this.numberArray.pop();
			this.firstOperand.dataset.primaryOperand = this.convertArrayToString(
				this.numberArray
			);
			this.firstOperand.textContent = this.convertArrayToString(
				this.numberArray
			);
		}
	}

	appendNumbers(target) {
		this.firstOperand.dataset.primaryOperand += target;
		this.numberArray.push(target);
		if (this.numberArray.length < 16) {
			this.firstOperand.textContent = this.convertArrayToString(
				this.numberArray
			);
		}
	}

	addOperator(target) {
		this.currentOperator = target;
		if (this.regEx.test(this.secondOperand.textContent)) {
			this.calculate();
		} else {
			this.secondOperand.dataset.secondaryOperand = this.convertArrayToString(
				this.numberArray
			);
			this.secondOperand.textContent =
				this.convertArrayToString(this.numberArray) + this.currentOperator;
			this.clearFirstOperand();
			this.numberArray = [];
		}
	}

	convertArrayToString(arr) {
		return arr.join('').toString();
	}
}
