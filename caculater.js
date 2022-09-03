class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        // this.currentOperand = '+';
        // this.previousOperand = '+';
    }

    name(){
        
    } 
    
    clear(){
     this.currentOperand = '';
     this.previousOperand = '';
     this.operation = undefined;
    }

    deleteAction(){
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    

    appendNumber(number){
        console.log(this.currentOperand);
        if (number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand ? this.currentOperand.toString() + number.toString() : number.toString();
    }

    chooseOperation(operation){
        if(this.currentOperand === '')return;
        if(this.previousOperand !== ''){
            this.compute();
        }
      this.operation = operation;
      this.previousOperand = this.chooseOperand;
      this.currentOperand = '';
    }

    compute(){
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(current)) return;
        switch (this.operation){
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '*':
                computation = prev * current;
                break;
            case '÷':
                computation = prev / current;
                 break;
            default:
                return;
          }
          this.currentOperand = computation;
          this.operation = undefined;
          this.previousOperand = '';
        }

    getDisplayNumber(number) {
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split('.')[0]);
        const decimalDigits = stringNumber.split('.')[1];
        let integerDisplay ;
        if (isNaN(integerDigits)){
            integerDisplay = '';
        }else {
             integerDisplay = integerDis.toLocaleString('en', {
                maximumFractionDigits: 0
             })
        }
        if (decimalDigits != null) {
            return '${integerDisplay}.${decimalDigits}';
        } else {
           return integerDisplay;
        }
    }

    updateDisplay(){
        
        this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand);
        if (this.operation){

          this.previousOperandTextElement = '${this.getDisplayNumber(this.previousOperand)} ${this.operation}' ;
        } else {
            this.previousOperandTextElement.innerText = '';
        }
    } 
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const clearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

console.log(numberButtons.length);

for(let i=0; i< numberButtons.length; i++){
    numberButtons[i].addEventListener('click', () => {
        calculator.appendNumber(numberButtons[i].innerText);
        calculator.updateDisplay();
    })
}

for(let i=0; i<operationButtons.length; i++){
    operationButtons[i].addEventListener('click', () => {
        calculator.chooseOperation(operationButtons[i].innerText);
        calculator.updateDisplay();
    })
}

equalsButton.addEventListener('click', button =>{
    calculator.compute();
    calculator.updateDisplay();
})
clearButton.addEventListener('click', button =>{
    calculator.clear();
    calculator.updateDisplay();
})
deleteButton.addEventListener('click', button =>{
    calculator.delete();
    calculator.updateDisplay();
})