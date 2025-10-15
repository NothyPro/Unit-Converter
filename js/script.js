function convert() {
    let inputValue = document.getElementById("userInput").value;
    let unit = document.getElementById("unit").value;
    let milesToKm = unit === "milesToKm";
    let result = 0;
    let resultString = "";

    if (milesToKm) {
        result = inputValue * 1.60934;
        resultString = inputValue + " miles are " + result + " km";
        console.log(resultString);
    } else if (unit === "fToC") {
        result = (inputValue - 32)* 5/9;
        resultString = inputValue + " fahrenheit is " + result + " celsius";
        console.log(resultString);
    } else if (unit === "cToF") {
        result = inputValue * (9/5) + 32;
        resultString = inputValue + " celsius is " + result + " fahrenheit";
        console.log(resultString);
    } else {
        result = inputValue / 1.60934;
        resultString = inputValue + " km are " + result + " miles";
        console.log(resultString);
    }

    const resultElement = document.getElementById("resultElement");
    resultElement.innerHTML = resultString;
}
