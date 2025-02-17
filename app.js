/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let currentInput = '';
// let previousInput = '';
let operator = null;
let firstOperand = null;
/*------------------------ Cached Element References ------------------------*/
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach(button => {
    button.addEventListener("click", () => handleButtonClick(button.innerText));
  });
/*-------------------------------- Functions --------------------------------*/
function handleButtonClick(value) {  
  if (!isNaN(value)) {  
      currentInput += value;  
      display.innerText = currentInput;  
  }  
  else if (value === "=") {  
      if (operator && firstOperand !== null) {  
          if (operator === "+") {  
              currentInput = String(firstOperand + Number(currentInput));  
          }  
          else if (operator === "-") {  
              currentInput = String(firstOperand - Number(currentInput));  
          }  
          display.innerText = currentInput;
          firstOperand = null;
          operator = null;
      }  
  }  
  else {  
      if (currentInput !== "") {  
          firstOperand = Number(currentInput);  
          operator = value;  
          currentInput = "";  
      }
  }  
}  