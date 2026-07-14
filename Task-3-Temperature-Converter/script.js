function convertTemperature() {

    let temperature = parseFloat(document.getElementById("temperature").value);

    let unit = document.getElementById("unit").value;

    let error = document.getElementById("error");

    let celsius = document.getElementById("celsius");

    let fahrenheit = document.getElementById("fahrenheit");

    let kelvin = document.getElementById("kelvin");

    // Clear previous error

    error.innerHTML = "";

    // Empty Input

    if (isNaN(temperature)) {

        error.innerHTML = "Please enter a valid temperature.";

        celsius.innerHTML = "--";
        fahrenheit.innerHTML = "--";
        kelvin.innerHTML = "--";

        return;

    }

    // Absolute Zero Validation

    if (
        (unit === "celsius" && temperature < -273.15) ||
        (unit === "fahrenheit" && temperature < -459.67) ||
        (unit === "kelvin" && temperature < 0)
    ) {

        error.innerHTML = "Temperature cannot be below absolute zero.";

        celsius.innerHTML = "--";
        fahrenheit.innerHTML = "--";
        kelvin.innerHTML = "--";

        return;

    }

    let c, f, k;

    // Celsius

    if (unit === "celsius") {

        c = temperature;

        f = (temperature * 9 / 5) + 32;

        k = temperature + 273.15;

    }

    // Fahrenheit

    else if (unit === "fahrenheit") {

        c = (temperature - 32) * 5 / 9;

        f = temperature;

        k = c + 273.15;

    }

    // Kelvin

    else {

        c = temperature - 273.15;

        f = (c * 9 / 5) + 32;

        k = temperature;

    }

    celsius.innerHTML = c.toFixed(2) + " °C";

    fahrenheit.innerHTML = f.toFixed(2) + " °F";

    kelvin.innerHTML = k.toFixed(2) + " K";

}