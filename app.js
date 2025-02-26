/*-------------------------------- Variables --------------------------------*/
let currentInput = '';
let previousInput = '';
let operator = null;
let firstOperand = null;

/*------------------------ Cached Element References ------------------------*/
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');

/*----------------------------- Event Listeners -----------------------------*/
for (let i = 0; i < buttons.length; i++) {  
    buttons[i].addEventListener('click', function() {  
        handleButtonClick(buttons[i].innerText);  
    });  
}

function handleButtonClick(value) {  
    console.log("Button Clicked:", value);

    if (!isNaN(value)) {  
        currentInput += value;  
        console.log("Current Input:", currentInput);
    }  
    else if (value === "=") {  
        console.log("First Operand:", firstOperand, "Operator:", operator, "Current Input:", currentInput);
        
        if (operator === "+") {  
            currentInput = String(firstOperand + Number(currentInput));  
        }  
        else if (operator === "-") {  
            currentInput = String(firstOperand - Number(currentInput));  
        }
        else if (operator === "*") {  
            currentInput = String(firstOperand * Number(currentInput));  
        }  
        else if (operator === "/") {  
            currentInput = String(firstOperand / Number(currentInput));  
        } 
        
        console.log("Result:", currentInput);
        operator = null;  
    }  
    else {  
        console.log("Operator Set:", value, "First Operand:", currentInput);  
        firstOperand = Number(currentInput);  
        operator = value;  
        currentInput = "";  
    }  

    console.log("Display Updated:", currentInput || "0");
    display.innerText = currentInput || "0";  
}
