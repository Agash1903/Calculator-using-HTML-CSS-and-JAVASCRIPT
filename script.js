function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

function appendNumber(number) {
    let display = document.getElementById('display');
    if (display.innerText === '0') {
        display.innerText = number;
    } else {
        display.innerText += number;
    }
}

function appendOperator(operator) {
    let display = document.getElementById('display');
    if (!/[\+\-\*\/]$/.test(display.innerText)) {
        display.innerText += operator;
    }
}

function calculate() {
    let display = document.getElementById('display');
    try {
        display.innerText = eval(display.innerText) || '0';
    } catch (error) {
        display.innerText = 'Error';
    }
}
