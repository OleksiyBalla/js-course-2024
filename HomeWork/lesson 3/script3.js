// const btnSend = document.querySelector("#btnSend");

// btnSend.addEventListener("click", () => {
//     checkYear();
// });

// function checkYear() {
//     const year = parseInt(document.querySelector("#year").value);
//     let output = document.querySelector("#output");

//     if (isNaN(year) || year <= 0) {
//         output.innerHTML = "Помилка! Введіть коректне число.";
//         return;
//     }

//     let isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
//     if (isLeap) {
//         output.innerHTML = `${year} є високосним роком.`;
//     } else {
//         output.innerHTML = `${year} Не є високосним роком.`;
//     }
// }

const btnSend = document.querySelector("#btnSend");

function checkYear() {
    const year = parseInt(document.querySelector("#year").value);
    let result = document.querySelector("#output");

    if (isNaN(year) || year <= 0) {
        result.innerHTML = "Помилка! введіть число";
        return;
    }

    let isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    result.innerHTML = isLeap ? `${year} є високосним роком` : `${year} не є високосним роком`;
}

btnSend.addEventListener("click", () => {
    checkYear();
});
