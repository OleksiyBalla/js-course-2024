// let userCount = 0;
// let computerCount = 0;
// let rounds = 0;

// while (rounds < 3) {
//     let userChoice = prompt(
//         ' Введіть: камінь, ножиці або папір. \nАбо введіть "вихід" для завершенн гри'
//     ).toLocaleLowerCase();
//     if (userChoice === "вихід") {
//         alert(`Гра завершена \nРахунок \n Ви ${userCount} противник ${computerCount} раундів ${rounds}`);
//         break;
//     }

//     const choice = ["камінь", "ножиці", "папір"];
//     if (!choice.includes(userChoice)) {
//         alert("Помилка вводу, спробуйте ще");
//         continue;
//     }

//     let computerChoice = choice[Math.floor(Math.random() * 3)];
//     if (userChoice === computerChoice) {
//         alert("Нічия");
//     } else if (
//         (userChoice === "камінь" && computerChoice === "ножиці") ||
//         (userChoice === "папір" && computerChoice === "камінь") ||
//         (userChoice === "ножиці" && computerChoice === "папір")
//     ) {
//         alert("Ви перемогли");
//         userCount++;
//     } else {
//         alert("Переміг противник");
//         computerCount++;
//     }

//     rounds++;
//     alert(`Гра завершена \nРахунок \n Ви ${userCount} противник ${computerCount} \n раундів ${rounds}`);
// }
// if (rounds < 4) {
//     userCount > computerCount ? alert("Ви перемогли!") : alert("Противник переміг");
// } else {
//     alert("Переможця не визначено!");
// }

let userCount = 0;
let computerCount = 0;
let rounds = 0;

while (rounds < 3) {}
