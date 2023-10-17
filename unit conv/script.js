function convert() {
    const inputValue = parseFloat(document.getElementById("inputValue").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    let result;

    if (fromUnit === "meters" && toUnit === "feet") {
        result = inputValue * 3.28084;
    } else if (fromUnit === "meters" && toUnit === "inches") {
        result = inputValue * 39.3701;
    } else if (fromUnit === "meters" && toUnit === "centimeters") {
        result = inputValue * 100;
    } else if (fromUnit === "meters" && toUnit === "yards") {
        result = inputValue * 1.09361;
    } else if (fromUnit === "feet" && toUnit === "meters") {
        result = inputValue / 3.28084;
    } else if (fromUnit === "feet" && toUnit === "inches") {
        result = inputValue * 12;
    } else if (fromUnit === "feet" && toUnit === "centimeters") {
        result = inputValue * 30.48;
    } else if (fromUnit === "feet" && toUnit === "yards") {
        result = inputValue / 3;
    } else if (fromUnit === "inches" && toUnit === "meters") {
        result = inputValue / 39.3701;
    } else if (fromUnit === "inches" && toUnit === "feet") {
        result = inputValue / 12;
    } else if (fromUnit === "inches" && toUnit === "centimeters") {
        result = inputValue * 2.54;
    } else if (fromUnit === "inches" && toUnit === "yards") {
        result = inputValue / 36;
    } else if (fromUnit === "centimeters" && toUnit === "meters") {
        result = inputValue / 100;
    } else if (fromUnit === "centimeters" && toUnit === "feet") {
        result = inputValue / 30.48;
    } else if (fromUnit === "centimeters" && toUnit === "inches") {
        result = inputValue / 2.54;
    } else if (fromUnit === "centimeters" && toUnit === "yards") {
        result = inputValue / 91.44;
    } else if (fromUnit === "yards" && toUnit === "meters") {
        result = inputValue / 1.09361;
    } else if (fromUnit === "yards" && toUnit === "feet") {
        result = inputValue * 3;
    } else if (fromUnit === "yards" && toUnit === "inches") {
        result = inputValue * 36;
    } else if (fromUnit === "yards" && toUnit === "centimeters") {
        result = inputValue * 91.44;
    } else {
        result = inputValue;
    }

    document.getElementById("result").textContent = `${inputValue} ${fromUnit} is equal to ${result} ${toUnit}`;
}
