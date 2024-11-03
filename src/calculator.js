export class Calculator {
	constructor() {
		this.first = document.querySelector('.primary-operand');
		this.second = document.querySelector('.secondary-operand');
		this.firstData = this.first.dataset.primaryOperand;
		this.secondData = this.second.dataset.secondaryOperand;
		this.firstLength = this.first.textContent.length;
		this.secondLength = this.second.textContent.length;
		this.currentOperator = '';
		this.result = 0;
	}

	appendNumberToSring(number) {
		if (this.firstLength === 1 && this.first.textContent === '0') {
			if (number !== '.') {
				this.firstData = number;
				this.first.textContent = this.firstData;
			} else {
				this.firstData = this.first.textContent + number;
				this.first.textContent += number;
			}
		} else if (this.firstLength >= 1 && this.firstLength < 16) {
			this.firstData += number;
			this.first.textContent = this.firstData.replace(
				/\B(?=(\d{3})+(?!\d))/g,
				' '
			);
		}

		this.firstLength = this.first.textContent.length;
		this.first.dataset.primaryOperand = this.firstData;
	}

	removeLastNumber() {
		let subString = '';
		if (this.firstLength > 1) {
			subString = this.first.textContent.slice(0, -1);
			this.first.textContent = subString;
			this.firstData = subString;
		} else if (this.firstLength === 1) {
			this.first.textContent = '0';
			this.firstData = '';
		}
		this.firstLength = this.first.textContent.length;
		this.first.dataset.primaryOperand = this.firstData;
	}

	addOperator(operator) {
		if (this.currentOperator !== '') {
			this.calculate();
		}
		this.currentOperator = operator;

		if (!this.firstData) {
			this.firstData = '0';
		}
		if (this.result !== 0) {
			this.firstData = this.result;
		}
		this.secondData = this.firstData;
		this.second.dataset.secondaryOperand = this.secondData;
		this.second.textContent = this.secondData + this.currentOperator;
		this.clearFirstOperand();
	}

	clearCalculator() {
		this.first.textContent = '0';
		this.first.dataset.primaryOperand = '';

		this.second.textContent = '';
		this.second.dataset.secondaryOperand = '';

		this.firstData = this.first.dataset.primaryOperand;
		this.secondData = this.second.dataset.secondaryOperand;

		this.firstLength = this.first.textContent.length;
		this.secondLength = this.second.textContent.length;

		this.currentOperator = '';
		this.result = 0;
	}

	clearFirstOperand() {
		this.first.textContent = '0';
		this.firstData = '';
		this.first.dataset.primaryOperand = this.firstData;
		this.firstLength = this.first.textContent.length;
	}

	clearSecondOperand() {
		this.second.textContent = '';
		this.secondData = '';
		this.second.dataset.secondaryOperand = this.secondData;
		this.currentOperator = '';
	}

	multiPly() {
		return Number(this.secondData) * Number(this.firstData);
	}
	divide() {
		return Number(this.secondData) / Number(this.firstData);
	}
	addNumbers() {
		return Number(this.secondData) + Number(this.firstData);
	}
	subtract() {
		return Number(this.secondData) - Number(this.firstData);
	}

	calculate() {
		if (this.currentOperator !== '') {
			if (this.currentOperator === '*') {
				this.result = this.multiPly();
			} else if (this.currentOperator === '+') {
				this.result = this.addNumbers();
			} else if (this.currentOperator === '-') {
				this.result = this.subtract();
			} else if (this.currentOperator === '÷') {
				this.result = this.divide();
			}
		}
		this.clearFirstOperand();
		this.first.textContent = this.result;
		this.clearSecondOperand();
	}
}
