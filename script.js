function convertTemperature() {
    const tempInput = parseFloat(document.getElementById('tempInput').value);
    const unit = document.getElementById('unitSelect').value;
    const resultElement = document.getElementById('result');
    
    if (isNaN(tempInput)) {
        resultElement.textContent = "Por favor, insira um número válido.";
        return;
    }
    
    let celsius, fahrenheit, kelvin;
    if (unit === "C") {
        celsius = tempInput;
        fahrenheit = (celsius * 9/5) + 32;
        kelvin = celsius + 273.15;
    } else if (unit === "F") {
        fahrenheit = tempInput;
        celsius = (fahrenheit - 32) * 5/9;
        kelvin = celsius + 273.15;
    } else {
        kelvin = tempInput;
        celsius = kelvin - 273.15;
        fahrenheit = (celsius * 9/5) + 32;
    }
    
    resultElement.innerHTML = `
        Celsius: ${celsius.toFixed(2)}°C <br>
        Fahrenheit: ${fahrenheit.toFixed(2)}°F <br>
        Kelvin: ${kelvin.toFixed(2)}K
    `;
}