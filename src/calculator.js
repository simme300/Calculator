export class Calculator {
	constructor() {
		this.first = document.querySelector('.primary-operand');
		this.second = document.querySelector('.secondary-operand');
		this.firstData = this.first.dataset.primaryOperand;
		this.secondData = this.second.dataset.secondaryOperand;
		this.firstLength = this.first.textContent.length;
		this.firstTxt = this.first.textContent;
		this.currentOperator = '';
		this.result = 0;
		this.maxLength = 16;
	}

	appendNumberToSring(number) {
		if (this.result) {
			this.result = 0;
			this.firstData = '';
		}
		if (this.firstLength === 1 && this.firstTxt === '0') {
			this.firstData = number === '.' ? this.firstTxt + number : number;
			this.firstTxt = this.firstData;
		} else if (
			this.firstLength >= 1 &&
			this.firstLength < this.maxLength &&
			!this.firstTxt.includes('.')
		) {
			this.firstData += number;
			this.firstTxt = this.firstData.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
		} else if (
			this.firstLength >= 1 &&
			this.firstTxt.includes('.') &&
			this.firstLength < this.maxLength
		) {
			if (number !== '.') {
				this.firstData += number;
				this.firstTxt = this.firstData;
			}
		}
		this.first.textContent = this.firstTxt;
		this.firstLength = this.first.textContent.length;
		this.first.dataset.primaryOperand = this.firstData;
	}

	removeLastNumber() {
		let subString = '';
		if (this.firstLength > 1) {
			subString = this.firstTxt.slice(0, -1);
			this.firstTxt = subString;
			this.firstData = subString;
		} else if (this.firstLength === 1) {
			this.firstTxt = '0';
			this.firstData = '';
		}
		this.first.textContent = this.firstTxt;
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
		this.secondData = this.firstData;
		this.second.dataset.secondaryOperand = this.secondData;
		this.second.textContent = this.secondData + this.currentOperator;
		this.clearFirstOperand();
	}

	clearCalculator() {
		this.first.textContent = '0';
		this.firstTxt = this.first.textContent;
		this.first.dataset.primaryOperand = '';

		this.second.textContent = '';
		this.second.dataset.secondaryOperand = '';

		this.firstData = this.first.dataset.primaryOperand;
		this.secondData = this.second.dataset.secondaryOperand;

		this.firstLength = this.first.textContent.length;

		this.currentOperator = '';
		this.result = 0;
	}

	clearFirstOperand() {
		this.first.textContent = '0';
		this.firstTxt = this.first.textContent;
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
		if (this.secondData) {
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
			this.firstTxt = this.result;
			this.first.textContent = this.firstTxt;
			this.firstData = this.result;
			this.clearSecondOperand();
		}
	}
}
