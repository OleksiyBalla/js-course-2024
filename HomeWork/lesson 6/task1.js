let userInput = () => {
    let input = prompt('Додайте оцінку або натисніть "скасувати"');
    return input !== null ? Number(input) : null;
};

let addGrade = (grade) => grades.push(grade);
let grades = [70, 80, 99, 66, 32, 85, 71, 54];

while (true) {
    let grade = userInput();
    if (grade === null) {
        console.log("Користувач натиснув 'Скасувати'.");
        break;
    }
    if (!isNaN(grade)) {
        addGrade(grade);
    } else {
        console.log("Введене значення не є числом.");
    }
}

let maxGrade = (array) => Math.max(...array);
let minGrade = (array) => Math.min(...array);
let sumGrades = (array) => {
    let sum = 0;
    array.forEach((grade) => {
        sum += grade;
    });
    return sum;
};
let avgGrade = () => sumGrades(grades) / grades.length;

console.log("Максимальна оцінка:", maxGrade(grades));
console.log("Мінімальна оцінка:", minGrade(grades));
console.log("Сума оцінок:", sumGrades(grades));
console.log("Середня оцінка:", avgGrade().toFixed(2));
console.log("Кількість оцінок:", grades.length);
console.log("Оцінки:", grades);
