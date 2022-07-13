const currentScreen = document.getElementById('currentscreen');
const formula = document.getElementById('formula');
const equals = document.getElementById('equals');
let operation = false;
let equalOp = false;
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
        num1 = parseInt(currentScreen.textContent)
    }))
}

function operate() {
    const button = document.querySelectorAll('#arithmetic>button')
    button.forEach(button => button.addEventListener('click', () => {
        formula.style.visibility = 'visible'
        operation = true
        if (equalOp === false) {
            arithmetic(button)
        } else if (equalOp === true) {
            console.log('This is a Test')
            num1 = parseInt(currentScreen.textContent)
            formula.textContent = '0'
            arithmetic(button)
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

function arithmetic(button) {

    if (button.id === 'add') {
        formula.textContent = parseInt(formula.textContent.replace(/[/+*-]/g, '')) + num1 + button.textContent
    }
    else if (button.id === 'subtract' && formula.textContent === '0') {
        formula.textContent = num1 + button.textContent
    } else if (button.id === 'subtract' && formula.textContent !== '0') {
        formula.textContent = parseInt(formula.textContent.replace(/[/+*-]/g), '') - num1 + button.textContent
    }
    else if (button.id === 'divide' && formula.textContent === '0') {
        formula.textContent = num1 + button.textContent
    } else if (button.id === 'divide' && formula.textContent !== '0') {
        formula.textContent = parseInt(formula.textContent.replace(/[/+*-]/g), '') / num1 + button.textContent
    }
    else if (button.id === 'multiply' && formula.textContent === '0') {
        formula.textContent = num1 + button.textContent
    } else if (button === 'multiply' && formula.textContent !== '0') {
        formula.textContent = parseInt(formula.textContent.replace(/[/+*-]/g), '') * num1 + button.textContent
    }
    currentScreen.textContent = formula.textContent.replace(/[/+*-]/g, '')
    num1 = 0



}
function equal() {
    equals.addEventListener('click', () => {
        num2 = parseInt(formula.textContent.replace(/[/+*-]/g), '')
        formula.textContent = formula.textContent +
            currentScreen.textContent + '='
        currentScreen.textContent = num2 + parseInt(currentScreen.textContent)
        equalOp = true;
        console.log(equalOp)
    })

}

