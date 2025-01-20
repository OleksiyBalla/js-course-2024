let values = [10, 9, 8, 3, 500, 0, 1, 12, 47, -10, 1000];

let min = (array) => Math.min(...array);
let max = (array) => Math.max(...array);
let sum = (array) => {
    let sum = 0;
    array.forEach((value) => {
        sum += value;
    });
    return sum;
};

console.log(min(values));
console.log(max(values));
console.log(sum(values));
