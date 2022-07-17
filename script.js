const currentScreen = document.getElementById('currentscreen');
const formula = document.getElementById('formula');
const equals = document.getElementById('equals');
const numpadNum = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
const operand = { add: '+', subtract: '-', divide: '/', multiply: '*' }
let operation = 1;
let equalOp = false;
let num1 = null
let num2 = null
let clicked = 0
let decimal = false;



//Keydown Event
function keyboardSupport() {
    window.addEventListener('keydown', (e) => {
        if (e.key in numpadNum) {
            appendNumber(e.key)
        } else {
        }
    })
}

//Button Press Event
function buttonPress() {
    const button = document.querySelectorAll('#number')
    button.forEach(button => button.addEventListener('click', () => {
        appendNumber(button.textContent)
    }))
}

function addDot(dot) {
    if (decimal === false) {
        currentScreen.textContent += '.'
        decimal = true
    }
}


//Append Number to Screen as a String
function appendNumber(key) {
    if (currentScreen.textContent.length !== 15) {
        if (currentScreen.textContent === '0' && operation === 1) {
            currentScreen.textContent = parseFloat(key)
        } else if (operation !== 1) {
            currentScreen.textContent = parseFloat(key)
            operation = 1
        }
        else if (equalOp === true && operation === 1) {
            currentScreen.textContent = parseFloat(key)
            formula.textContent = '0'
            formula.style.visibility = 'hidden'
            equalOp = false
        }
        else {
            currentScreen.textContent += parseFloat(key)
        }
        num1 = parseFloat(currentScreen.textContent)
    } else {

    }

}
//Perform Arithmetic Operation
function operate() {
    const button = document.querySelectorAll('#arithmetic>button')
    button.forEach(button => button.addEventListener('click', () => {
        formula.style.visibility = 'visible'
        operation++;
        if (equalOp === false) {
            arithmetic(button)
        } else if (equalOp === true) {
            num1 = parseFloat(currentScreen.textContent)
            formula.textContent = '0'
            arithmetic(button)
        }
    }))
}


//Resets Calculator
function clearScreen() {
    currentScreen.textContent = '0'
    formula.textContent = '0'
    formula.style.visibility = 'hidden'
}


//Removes a single number(BackSpace)
function backspace() {
    if (currentScreen.textContent.length = 1) {
        currentScreen.textContent = currentScreen.textContent.slice(0, -1)
        num1 = parseFloat(currentScreen.textContent)
    }
    else {
        currentScreen.textContent = '0'
    }
}

//Compute 2 Numbers based on the Operation Clicked
function arithmetic(button) {
    equalOp = false
    num2 = parseFloat(currentScreen.textContent.replace(/[÷+x-]/g), '')
    if (button.id === 'add') {
        formula.textContent = parseFloat(formula.textContent.replace(/[÷+x-]/g, '')) + num1 + button.textContent
    }
    else if (button.id === 'subtract' && formula.textContent === '0') {
        formula.textContent = num1 + button.textContent
    } else if (button.id === 'subtract' && formula.textContent !== '0') {
        formula.textContent = parseFloat(formula.textContent.replace(/[÷+x-]/g), '') - num1 + button.textContent
    }
    else if (button.id === 'divide' && formula.textContent === '0') {
        formula.textContent = num1 + button.textContent
    } else if (button.id === 'divide' && formula.textContent !== '0') {
        formula.textContent = parseFloat(formula.textContent.replace(/[÷+x-]/g), '') / num1 + button.textContent
    }
    else if (button.id === 'multiply' && formula.textContent === '0') {
        formula.textContent = num1 + button.textContent
    } else if (button === 'multiply' && formula.textContent !== '0') {
        formula.textContent = parseFloat(formula.textContent.replace(/[÷+x-]/g), '') * num1 + button.textContent
    }
    currentScreen.textContent = formula.textContent.replace(/[÷+x-]/g, '')
    num1 = 0
    equal(button)
}

//Compute Num1 & Num2
function equal(button) {
    equals.addEventListener('click', () => {
        formula.textContent = num2 + button.textContent +
            num1 + '='
        if (button.id === 'add') {
            currentScreen.textContent = num2 + num1
        } else if (button.id === 'subtract') {
            currentScreen.textContent = num2 - num1
        } else if (button.id === 'divide') {
            currentScreen.textContent = (num2 / num1)
        } else if (button.id === 'multiply') {
            currentScreen.textContent = num2 * num1
        }
        equalOp = true;
    })
}
