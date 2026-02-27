const display = document.getElementById('display');

function appendToDisplay(value) {
    const operators = ['+', '*', '/', '%', '**2'];
    // Regra: Não aceitar operadores no início
    if (display.value === "" && operators.includes(value)) {
        return; 
    }
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function toggleScientific() {
    const calc = document.getElementById('calc-body');
    const btn = document.getElementById('toggle-sci');
    calc.classList.toggle('scientific-mode');
    
    if (calc.classList.contains('scientific-mode')) {
        btn.innerText = "Modo Simples 🧸";
    } else {
        btn.innerText = "Modo Científico ✨";
    }
}

function calculate() {
    try {
        let expression = display.value.replace(/%/g, '/100');
        // Eval consegue calcular Math.PI e Math.E se estiverem no texto
        let result = eval(expression);
        
        // Limita casas decimais se não for inteiro
        display.value = Number.isInteger(result) ? result : result.toFixed(4);
    } catch (error) {
        display.value = "Erro ✨";
    }
}

function sciOp(op) {
    if (display.value === "") return;
    
    try {
        let input = eval(display.value);
        let result;

        switch(op) {
            case 'sin':
                // Converte Graus para Radianos antes de calcular
                result = Math.sin(input * (Math.PI / 180));
                break;
            case 'cos':
                result = Math.cos(input * (Math.PI / 180));
                break;
            case 'tan':
                result = Math.tan(input * (Math.PI / 180));
                break;
            case 'log':
                result = Math.log10(input);
                break;
            case 'sqrt':
                result = Math.sqrt(input);
                break;
        }
        display.value = result.toFixed(4);
    } catch (e) {
        display.value = "Erro ✨";
    }
}