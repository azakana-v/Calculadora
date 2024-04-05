function script(){
 let currentValue = undefined;
 let lastValue = undefined;
 let currentOperation = "";
 let result = undefined;

// Select all button in page.
  botoes = document.querySelectorAll("button");

// Get display input.
const display = document.getElementById("displayContent");

// Add an event listener to all button's (after, change to number buttons);
  botoes.forEach(botao => {
    botao.addEventListener("click", function(){
        const buttonClass = this.className;
        const buttonId = this.id;

        if(buttonClass === "numberBtn"){
        changeDisplay(buttonId);
        saveCurrentValue();
        }

        if(buttonClass === "operationBtn"){
                currentOperation = buttonId;
                saveLastValue();
                zeroDisplay();
        }
        
        if(buttonId==="igual"){
            if(currentOperation==="btnMais"){
                result = lastValue + currentValue;
            }
            if(currentOperation==="btnMenos"){
                result = lastValue - currentValue;
            }
            if(currentOperation==="btnVezes"){
                result = lastValue * currentValue;
            }
            if(currentOperation==="btnDivisao"){
                result = lastValue / currentValue;
            }
            zeroDisplay();
            changeDisplay(result);
        }

        if(buttonId === "ce"){
            zeroDisplay();
        }
        
        
    });
  });

function changeDisplay(char){
    display.innerText += char;
}

function zeroDisplay(){
    display.innerText = "";
}

function saveCurrentValue(){
    currentValue = parseFloat(display.innerText);
}

function saveLastValue(){
    lastValue = parseFloat(display.innerText);
}





} //Dom