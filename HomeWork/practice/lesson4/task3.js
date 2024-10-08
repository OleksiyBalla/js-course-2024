let startNum;
let endNum;
let sum = 0;

while (true) {
    startNum = parseInt(prompt("Введіть початкове число"));
    if (!isNaN(startNum)) {
        break;
    }
    alert("Не вірно введене перше число, спробуйте ще раз...");
}

while (true) {
    endNum = parseInt(prompt("Введіть останнє число"));
    if (!isNaN(endNum)) {
        break;
    }
    alert("Не вірно введене друге число, спробуйте ще раз...");
}

if (startNum > endNum) {
    alert("Стартове число більше за кінцеве");
} else {
    for (let i = startNum; i <= endNum; i++) {
        sum += i;
    }

    alert(`Сума чисел в діапазоні від ${startNum} до ${endNum} = ${sum}`);
}
