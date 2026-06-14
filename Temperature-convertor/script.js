function convertTemperature(){

    let temp =
    parseFloat(
        document.getElementById("temperature").value
    );

    let unit =
    document.getElementById("unit").value;

    if(isNaN(temp)){
        alert("Please enter a valid temperature.");
        return;
    }

    let celsius;
    let fahrenheit;
    let kelvin;

    if(unit === "celsius"){

        celsius = temp;
        fahrenheit = (temp * 9/5) + 32;
        kelvin = temp + 273.15;

    }

    else if(unit === "fahrenheit"){

        celsius = (temp - 32) * 5/9;
        fahrenheit = temp;
        kelvin = celsius + 273.15;

    }

    else{

        celsius = temp - 273.15;
        fahrenheit = (celsius * 9/5) + 32;
        kelvin = temp;

    }

    document.getElementById("celsiusResult").innerHTML =
        celsius.toFixed(2) + "°C";

    document.getElementById("fahrenheitResult").innerHTML =
        fahrenheit.toFixed(2) + "°F";

    document.getElementById("kelvinResult").innerHTML =
        kelvin.toFixed(2) + "K";
}