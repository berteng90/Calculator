const currentScreen = document.getElementById('currentscreen');
const formula = document.getElementById('formula');
const equals = document.getElementById('equals');
const numpadNum = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
let operation = false;
let equalOp = false;
let num1 = null
let num2 = null
let clicked = 0



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
        appendNumber(button.textContent, button)
    }))
}

function addDot(dot) {
    console.log(dot)
}


//Append Number to Screen as a String
function appendNumber(key, button) {
    if (currentScreen.textContent.length !== 15) {
        if (currentScreen.textContent === '0' && operation === false) {
            currentScreen.textContent = parseInt(key)
        } else if (operation === true) {
            currentScreen.textContent = parseInt(key)
            operation = false
        }
        else if (equalOp === true && operation === false) {
            currentScreen.textContent = parseInt(key)
            formula.textContent = '0'
            formula.style.visibility = 'hidden'
            equalOp = false
        }
        else {
            currentScreen.textContent += parseInt(key)
        }
        num1 = parseInt(currentScreen.textContent)
    } else {

    }

}
//Perform Arithmetic Operation
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
        num1 = parseInt(currentScreen.textContent)
    }
    else {
        currentScreen.textContent = '0'
    }
}

//Compute 2 Numbers based on the Operation Clicked
function arithmetic(button) {
    console.log(currentScreen.textContent)
    equalOp = false
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
            currentScreen.textContent = num2 / num1
        } else if (button.id === 'multiply') {
            currentScreen.textContent = num2 * num1
        }
        equalOp = true;
    })
}

