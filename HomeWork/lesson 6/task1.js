let grades = [25, 89, 62, 12, 32, 10, 45, 78, 100];

function max(arr) {
    let max = Math.max(...arr);
    return max;
}
function min(arr) {
    let min = Math.min(...arr);
    return min;
}
function sum(arr) {
    let sum = 0;
    for (const value of arr) {
        sum += value;
    }
    return sum;
}
function avg(arr) {
    let avg = sum(arr) / arr.length;
    return avg;
}

const maxGrade = max(grades);
const minGarde = min(grades);
const sumGrades = sum(grades);
const avgGrade = avg(grades);

console.log(maxGrade);
console.log(minGarde);
console.log(sumGrades);
console.log(avgGrade.toFixed(2));
