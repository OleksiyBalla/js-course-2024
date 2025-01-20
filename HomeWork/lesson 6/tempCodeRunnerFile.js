let grades = [70, 80, 99, 66, 32, 85, 71, 54];
let maxGrade = (array) => Math.max(...array);
let minGrade = (array) => Math.min(...array);
let sumGrades = (array) => {
    let sumGrades = 0;
    array.forEach((grade) => {
        sumGrades += grade;
    });
    return sumGrades;
};
let avgGrade = () => sumGrades(grades) / grades.length;
let addGrade = (grade) => grades.push(grade);
let userInput = 77;

addGrade(userInput);

console.log(maxGrade(grades));
console.log(minGrade(grades));
console.log(sumGrades(grades));
console.log(avgGrade(grades).toFixed(2));
console.log(grades.length);
console.log(grades);