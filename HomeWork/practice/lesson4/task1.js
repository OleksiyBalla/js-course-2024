let userNum = parseInt(prompt("Вгадайте число X"));
let sicretNum = Math.floor(Math.random() * 100) + 1;

while (userNum !== sicretNum) {
    if (isNaN(userNum)) {
        userNum = parseInt(prompt("Помилка вводу! Введіть число..."));
        continue;
    }

    userNum > sicretNum
        ? alert(`Ваше число ${userNum} більше за число X`)
        : alert(`Ваше число ${userNum} менше за число X`);

    userNum = parseInt(prompt("Спробуйте ще раз"));
}

alert(`Ви вгадали! X = ${userNum} `);
