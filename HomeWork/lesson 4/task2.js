let rightAnswers = 0;
let notRightAnswers = 0;
let maxRounds = 5;

for (let i = 0; i < maxRounds; i++) {
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;
    const operators = ["+", "-", "/", "*"];
    let randomOperator = operators[Math.floor(Math.random() * operators.length)];

    let rightAnswer;

    switch (randomOperator) {
        case "+":
            rightAnswer = num1 + num2;
            break;
        case "-":
            rightAnswer = num1 - num2;
            break;
        case "*":
            rightAnswer = num1 * num2;
            break;
        case "/":
            rightAnswer = (num1 / num2).toFixed(2);
            break;
    }

    let userAnswer = parseFloat(prompt(`Скільки буде ${num1} ${randomOperator} ${num2} ?`));
    if (userAnswer === rightAnswer) {
        alert("Правильно!");
        rightAnswers++;
    } else {
        alert("Помилка!");
        notRightAnswers++;
    }
}

alert(
    `Гра завершена\n\n Результат.... \n\n Правильних відповідей ----- ${rightAnswers}\n Не правильних відповідей ----- ${notRightAnswers}`
);
