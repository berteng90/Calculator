const currentScreen = document.getElementById('currentscreen');
const formula = document.getElementById('formula');
const equals = document.getElementById('equals');
let operation = false;
let equalOp = false;
let num1 = null
let num2 = null
let clicked = 0

function keyboardSupport() {
    window.addEventListener('keydown', (e) => {
        appendNumber(e.key)
    })
}




//Append Number to Screen as a String
function appendNumber(key) {
    console.log(key)
    const button = document.querySelectorAll('#number')
    button.forEach(button => button.addEventListener('click', () => {

        button.textContent = key
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
            num1 = parseInt(currentScreen.textContent)
            console.log(num1)
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
    if (currentScreen.textContent.length = 1) {
        currentScreen.textContent = currentScreen.textContent.slice(0, -1)
    }
    else {
        currentScreen.textContent = '0'
    }
}

function arithmetic(button) {
    console.log(currentScreen.textContent)
    num2 = parseInt(currentScreen.textContent.replace(/[÷+*-]/g), '')
    if (button.id === 'add') {
        formula.textContent = parseInt(formula.textContent.replace(/[÷+*-]/g, '')) + num1 + button.textContent
    }
    else if (button.id === 'subtract' && formula.textContent === '0') {
        formula.textContent = num1 + button.textContent
    } else if (button.id === 'subtract' && formula.textContent !== '0') {
        formula.textContent = parseInt(formula.textContent.replace(/[÷+*-]/g), '') - num1 + button.textContent
    }
    else if (button.id === 'divide' && formula.textContent === '0') {
        formula.textContent = num1 + button.textContent
    } else if (button.id === 'divide' && formula.textContent !== '0') {
        formula.textContent = parseInt(formula.textContent.replace(/[÷+*-]/g), '') / num1 + button.textContent
    }
    else if (button.id === 'multiply' && formula.textContent === '0') {
        formula.textContent = num1 + button.textContent
    } else if (button === 'multiply' && formula.textContent !== '0') {
        formula.textContent = parseInt(formula.textContent.replace(/[÷+*-]/g), '') * num1 + button.textContent
    }
    currentScreen.textContent = formula.textContent.replace(/[÷+*-]/g, '')
    num1 = 0
    equal(button)
}

function equal(button) {
    equals.addEventListener('click', () => {
        formula.textContent = num2 + button.textContent +
            num1 + '='
        if (button.id === 'add') {
            currentScreen.textContent = num2 + num1
        } else if (button.id === 'subtract') {
            currentScreen.textContent = num2 - num1
        } else if (button.id === 'divide') {
            currentScreen.textContent = num2 / num1
        } else if (button.id === 'multiply') {
            currentScreen.textContent = num2 * num1
        }
        equalOp = true;
    })
}

