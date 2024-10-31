export class Calculator {
	#operatorCount = 0;
	constructor() {
		this.firstOperand = document.querySelector('.primary-operand');
		this.secondOperand = document.querySelector('.secondary-operand');
		this.result = 0;
		this.currentOperator = '';
		this.numberArray = [];
		// this.resultArray = [];
		// this.regEx = /[*+\-÷]/;
		this.operator = '';
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

	clearFirstOperand() {
		this.firstOperand.textContent = '0';
		this.firstOperand.dataset.primaryOperand = '';
	}

	clearfirstData() {
		this.numberArray = [];
		this.firstOperand.dataset.primaryOperand = '';
	}

	clearSecondOperand() {
		this.secondOperand.textContent = '';
		this.secondOperand.dataset.secondaryOperand = '';
	}
	clearCalculator() {
		this.firstOperand.dataset.primaryOperand = '';
		this.firstOperand.textContent = '0';
		this.secondOperand.dataset.secondaryOperand = '';
		this.secondOperand.textContent = '';
		this.numberArray = [];
	}

	deleteLastNumber() {
		if (this.numberArray.length >= 1) {
			this.numberArray.pop();
			this.arrayToStringforFirstOperand(this.numberArray);
		}
		if (this.numberArray.length === 0) {
			this.firstOperand.textContent = '0';
		}
	}

	appendNumbers(target) {
		if (this.numberArray.length < 16 && this.numberArray[0] !== '0') {
			this.numberArray.push(target);
			this.firstOperand.dataset.primaryOperand += target;
			this.firstOperand.textContent = this.convertArrayToString(
				this.numberArray
			);
			console.log(this.numberArray);
		} else if (this.numberArray.length === 1 && this.numberArray[0] === '0') {
			this.firstOperand.dataset.primaryOperand = target;
			this.firstOperand.textContent = this.convertArrayToString(
				this.numberArray
			);
			console.log(this.numberArray);
		}
	}

	addOperator(target) {
		this.operator = this.currentOperator;
		this.#operatorCount++;
		this.currentOperator = target;

		let res = '';
		if (this.#operatorCount > 1) {
			let tempOperator = this.currentOperator;
			this.currentOperator = this.operator;
			this.operator = tempOperator;
			res = this.calculate();
			this.firstOperand.textContent = res;
			this.secondOperand.dataset.secondaryOperand =
				this.firstOperand.textContent;
			this.currentOperator = tempOperator;
			this.secondOperand.textContent = res + this.currentOperator;
		} else {
			this.secondOperand.textContent =
				this.firstOperand.textContent + this.currentOperator;
			this.secondOperand.dataset.secondaryOperand =
				this.firstOperand.dataset.primaryOperand;
		}
		this.clearfirstData();
	}

	calculate(equals) {
		if (this.currentOperator === '÷') {
			if (this.firstOperand.dataset.primaryOperand === '0') {
				this.result = this.secondOperand.dataset.secondOperand;
			} else {
				this.result = this.divideNumbers();
			}
		} else if (this.currentOperator === '*') {
			this.result = this.multiplyNumbers();
		} else if (this.currentOperator === '+') {
			this.result = this.addNumbers();
		} else if (this.currentOperator === '-') {
			this.result = this.subtractNumbers();
		}
		if (equals) {
			this.firstOperand.textContent = this.result;

			this.clearfirstData();
			this.clearSecondOperand();
			this.#operatorCount = 0;
		}

		return this.result;
	}

	convertArrayToString(arr) {
		return arr.join('').toString();
	}

	arrayToStringforFirstOperand(arr) {
		this.firstOperand.dataset.primaryOperand = arr.join('').toString();
		this.firstOperand.textContent = arr.join('').toString();
	}
}
