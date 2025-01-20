// const btnSend = document.querySelector("#btnSend");

// btnSend.addEventListener("click", () => {
//     const num = parseInt(document.querySelector("#num").value);
//     let check = num % 2;
//     let output;
//     if (isNaN(num)) {
//         output = "Помилка! Введіть число...";
//         showResult(output);
//     } else {
//         output = check === 0 ? `Число ${num} парне.` : `Число ${num} не парне.`;
//         showResult(output);
//     }
// });

// function showResult(result) {
//     let output = document.querySelector("#output");
//     output.innerHTML = result;
// }

const sendBtn = document.querySelector("#btnSend");

sendBtn.addEventListener("click", function () {
    const num = parseInt(document.querySelector("#num").value);
    let check = num % 2;
    let result;
    if (isNaN(num)) {
        result = "Помилка! Введіть число...";
        showResult(result);
    } else {
        result = check === 0 ? `Число ${num} парне.` : `Число ${num} не парне.`;
        showResult(result);
    }
});
function showResult(result) {
    let output = document.querySelector("#output");
    output.innerHTML = result;
}
