function convertTemperature(inputType) {
    // Get the input value
    const inputElement = document.getElementById(inputType);
    const inputValue = parseFloat(inputElement.value);

    // Check if the input is a valid number
    if (isNaN(inputValue)) {
        document.getElementById("resultText").innerText = "Invalid input:";
        document.getElementById("result").innerText = "Please enter a valid number.";
        return;
    }

    let resultText, resultValue;
    switch (inputType) {
        case 'celsius':
            resultValue = {
                fahrenheit: (inputValue * 9/5) + 32,
                kelvin: inputValue + 273.15
            };
            resultText = `Equivalent in Fahrenheit and Kelvin:\nFahrenheit: ${resultValue.fahrenheit.toFixed(2)}°F, Kelvin: ${resultValue.kelvin.toFixed(2)}K`;
            break;
        case 'fahrenheit':
            resultValue = {
                celsius: (inputValue - 32) * 5/9,
                kelvin: (inputValue - 32) * 5/9 + 273.15
            };
            resultText = `Equivalent in Celsius and Kelvin:\nCelsius: ${resultValue.celsius.toFixed(2)}°C, Kelvin: ${resultValue.kelvin.toFixed(2)}K`;
            break;
        case 'kelvin':
            resultValue = {
                celsius: inputValue - 273.15,
                fahrenheit: (inputValue - 273.15) * 9/5 + 32
            };
            resultText = `Equivalent in Celsius and Fahrenheit:\nCelsius: ${resultValue.celsius.toFixed(2)}°C, Fahrenheit: ${resultValue.fahrenheit.toFixed(2)}°F`;
            break;
    }

    // Display the results
    const resultTextElement = document.getElementById("resultText");
    const resultElement = document.getElementById("result");
    resultTextElement.innerText = resultText;
    resultElement.innerText = ''; // Clear any previous results
}
