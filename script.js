const currentScreen = document.getElementById('currentscreen');
const formula = document.getElementById('formula');
let operation = false;
let num1 = null
let num2 = null


//Append Number to Screen as a String
function appendNumber() {
    const button = document.querySelectorAll('#number')
    button.forEach(button => button.addEventListener('click', () => {
        if (currentScreen.textContent === '0' && operation === false) {
            currentScreen.textContent = button.textContent
        } else if (operation === true) {
            currentScreen.textContent = button.textContent
            operation = false
        }
        else {
            currentScreen.textContent += button.textContent
        }
        num1 = +currentScreen.textContent
        console.log(num1)
    }))

}

function arithmetic() {
    const button = document.querySelectorAll('#arithfunc')
    button.forEach(button => button.addEventListener('click', () => {
        if (currentScreen.textContent === '0') {
            formula.textContent = 0 + button.textContent
            formula.style.visibility = 'visible';
            operation = true

        } else if (formula.textContent === '0' && button.textContent === '-') {
            formula.textContent = button.textContent + currentScreen.textContent + button.textContent
            formula.style.visibility = 'visible';
        }
        else {
            if (formula.textContent === '0') {
                operation = true
                formula.textContent = num1 + button.textContent
                formula.style.visibility = 'visible';
            } else {
                operation = true
                formula.textContent += num1 + button.textContent
                formula.style.visibility = 'visible';
            }
            if (button.textContent === '+' && formula.textContent !== '0') {

            } else if (button.textContent === '-') {
                num1 - num2
            } else if (button.textContent === '/') {
                num1 / num2
            } else if (button.textContent === '*') {
                num1 * num2
            }
        }
    }))
}

function clearScreen() {
    currentScreen.textContent = '0'
    formula.textContent = '0'
    formula.style.visibility = 'hidden'
}

function backspace() {

}


