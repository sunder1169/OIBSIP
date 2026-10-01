function convertTemperature() {

    const input =
        document.getElementById("temperature");

    const temperature =
        Number(input.value);

    const unit =
        document.getElementById("unit").value;

    const celsiusResult =
        document.getElementById("celsiusResult");

    const fahrenheitResult =
        document.getElementById("fahrenheitResult");

    const kelvinResult =
        document.getElementById("kelvinResult");

    if (input.value === "" || isNaN(temperature)) {

        alert("Please enter a valid number.");

        return;
    }

    let celsius;
    let fahrenheit;
    let kelvin;

    if (unit === "celsius") {

        celsius = temperature;

        fahrenheit =
            (temperature * 9 / 5) + 32;

        kelvin =
            temperature + 273.15;
    }

    else if (unit === "fahrenheit") {

        fahrenheit = temperature;

        celsius =
            (temperature - 32) * 5 / 9;

        kelvin =
            celsius + 273.15;
    }

    else if (unit === "kelvin") {

        kelvin = temperature;

        celsius =
            temperature - 273.15;

        fahrenheit =
            (celsius * 9 / 5) + 32;
    }

    if (kelvin < 0) {

        alert("Temperature cannot be below absolute zero.");

        return;
    }

    celsiusResult.textContent =
        "Celsius: " + celsius.toFixed(2) + " °C";

    fahrenheitResult.textContent =
        "Fahrenheit: " + fahrenheit.toFixed(2) + " °F";

    kelvinResult.textContent =
        "Kelvin: " + kelvin.toFixed(2) + " K";
}