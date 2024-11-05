let display = document.getElementById("display");

// Показати калькулятор після екрану привітання
window.onload = function() {
    setTimeout(() => {
        const welcomeScreen = document.getElementById("welcome-screen");
        welcomeScreen.style.opacity = 0;
        
        // Дати трохи часу для завершення анімації
        setTimeout(() => {
            welcomeScreen.style.display = "none";
            document.getElementById("calculator").style.display = "block";
        }, 1000);
    }, 3000); // Час затримки 3 секунди
}

// Інші функції для калькулятора залишаються без змін
// Наприклад, inputNumber, inputOperator, inputDecimal, і так далі

// Функція для введення чисел
function inputNumber(num) {
    if (display.value === "0" || display.value === "NaN") {
        display.value = num;
    } else {
        display.value += num;
    }
}

// Функція для введення оператора
function inputOperator(operator) {
    if (!isNaN(display.value.slice(-1))) {
        display.value += " " + operator + " ";
    }
}

// Інші функції залишаються такими, як ми обговорювали раніше



// Функція для введення чисел
function inputNumber(num) {
    if (display.value === "0" || display.value === "NaN") {
        display.value = num;
    } else {
        display.value += num;
    }
}

// Функція для введення оператора
function inputOperator(operator) {
    if (!isNaN(display.value.slice(-1))) {
        display.value += " " + operator + " ";
    }
}

// Функція для введення десяткової крапки
function inputDecimal() {
    let currentNumber = display.value.split(" ").pop();
    if (!currentNumber.includes(".")) {
        display.value += ".";
    }
}

// Функція для обчислення квадратного кореня
function calculateSquareRoot() {
    let value = parseFloat(display.value);
    if (isNaN(value) || value < 0) {
        alert("Введіть додатне число.");
    } else {
        display.value = formatResult(Math.sqrt(value));
    }
}

// Функція для обчислення логарифму
function calculateLog() {
    let value = parseFloat(display.value);
    if (isNaN(value) || value <= 0) {
        alert("Введіть додатне число.");
    } else {
        display.value = formatResult(Math.log(value));
    }
}

// Функції для обчислення тригонометричних значень
function calculateSin() {
    let value = parseFloat(display.value);
    if (!isNaN(value)) {
        display.value = formatResult(Math.sin(value));
    }
}

function calculateCos() {
    let value = parseFloat(display.value);
    if (!isNaN(value)) {
        display.value = formatResult(Math.cos(value));
    }
}

// Функція для очищення дисплея
function clearAll() {
    display.value = "0";
}

// Функція для видалення останнього символу
function backspace() {
    display.value = display.value.slice(0, -1);
    if (display.value === "") {
        display.value = "0";
    }
}

// Функція для обчислення результату
function calculateResult() {
    try {
        let result = eval(display.value.replace(/÷/g, '/').replace(/×/g, '*'));
        display.value = formatResult(result);
    } catch {
        alert("Помилка вводу.");
        display.value = "0";
    }
}

// Функція для форматування результату з обмеженням знаків після коми
function formatResult(value) {
    // Якщо результат - ціле число, повертаємо як є
    if (Number.isInteger(value)) return value;
    
    // Якщо число дробове, обмежуємо до 6 знаків після коми
    return parseFloat(value.toFixed(6));
}
