let height = () => Number(prompt("Введіть ваш зріст в метрах..."));
let weight = () => Number(prompt("Введіть вашу вагу в кілограмах..."));
let BMI = (height, weight) => weight / Math.pow(height / 100, 2);
let showResult = () => {
    let userHeight = height();
    let userWeight = weight();
    let bmiValue = BMI(userHeight, userWeight);

    if (!bmiValue) {
        alert("Помилка вводу, спробуйте ще");
    }
    if (bmiValue <= 18.5) {
        alert(`Ваш ІМТ = ${bmiValue.toFixed(2)} - це недостатня вага`);
    } else if (bmiValue > 18.5 && bmiValue <= 24.9) {
        alert(`Ваш ІМТ = ${bmiValue.toFixed(2)} - це нормальна вага`);
    } else if (bmiValue > 25 && bmiValue <= 29.9) {
        alert(`Ваш ІМТ = ${bmiValue.toFixed(2)} - це надлишкова вага`);
    } else if (bmiValue > 30) {
        alert(`Ваш ІМТ = ${bmiValue.toFixed(2)} - це ожиріння!`);
    }
};

showResult();
