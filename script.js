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
        num1 = currentScreen.textContent
        console.log(num1)
    }))
}

function operate() {
    const button = document.querySelectorAll('#arith')
    button.forEach(button => button.addEventListener('click', () => {
        console.log('This is a Test')
        formula.textContent = num1 + button.textContent
        num1 = 0
        currentScreen.textContent = formula
        operation = true
    }))
}

function clearScreen() {
    currentScreen.textContent = '0'
    formula.textContent = '0'
    formula.style.visibility = 'hidden'
}

function backspace() {

}


