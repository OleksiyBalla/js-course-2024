let userCount = 0;
let computerCount = 0;
let rounds = 0;

while (rounds < 3) {
    let userChoice = prompt(
        ' Введіть: камінь, ножиці або папір. \nАбо введіть "вихід" для завершенн гри'
    ).toLocaleLowerCase();
    if (userChoice === "вихід") {
        alert(`Гру завершено \n Рахунок: \n Ви ${userCount}, противник ${computerCount}`);
        break;
    }

    const choices = ["камінь", "ножиці", "папір"];
    if (!choices.includes(userChoice)) {
        alert("Помилка, спробуйте ще !");
        continue;
    }

    let computerChoice = choices[Math.floor(Math.random() * 3)];
    if (computerChoice === userChoice) {
        alert("Нічия!");
    } else if (
        (userChoice === "камінь" && computerChoice === "папір") ||
        (userChoice === "папір" && computerChoice === "ножиці") ||
        (userChoice === "ножиці" && computerChoice === "камінь")
    ) {
        alert(`Ви програли, противник обрав ${computerChoice}`);
        computerCount++;
    } else {
        alert(`Ви виграли, противник обрав ${computerChoice}`);
        userCount++;
    }
    rounds++;
    alert(` Рахунок: \n Ви ${userCount}, противник ${computerCount}`);
}
if (rounds === 3) {
    if (userCount > computerCount) {
        alert("Ви перемогли");
    } else if (userCount < computerCount) {
        alert("переміг противник");
    } else {
        alert("Нічия! Переможця не визначено");
    }
} else {
    alert("Переможця не визначено");
}
