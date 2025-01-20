let getValue = () => Number(document.querySelector("#temp").value);

let convertToCelsius = () => {
    let temp = getValue();
    let result = (5 / 9) * (temp - 32);
    showResult(result);
};

let convertToFarenheit = () => {
    let temp = getValue();
    let result = (9 / 5) * temp + 32;
    showResult(result);
};

document.querySelector("#btnF").onclick = convertToCelsius;
document.querySelector("#btnC").onclick = convertToFarenheit;
function showResult(result) {
    document.querySelector("#output").innerHTML = result;
}
