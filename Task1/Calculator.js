const display = document.getElementById('display');

function Clear() {
    display.textContent = '0';
}

function Delete() {
    if (display.textContent.length > 1) {
        display.textContent = display.textContent.slice(0, -1);
    } else {
        display.textContent = '0';
    }
}

function Append(symbol) {
    if (display.textContent === '0') {
        display.textContent = symbol;
    } else {
        display.textContent += symbol;
    }
}

function Calculate() {
    try {
        display.textContent = eval(display.textContent);
    } catch (error) {
        display.textContent = 'Error';
    }
}
