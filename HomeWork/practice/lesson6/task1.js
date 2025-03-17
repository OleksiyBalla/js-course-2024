// let cities = ["Paris", "London", "Berlin"];
// cities.push("Kiev");
// // for (let i = 0; i < cities.length; i++) {
// //     const city = cities[i];
// //     console.log(city);
// // }
// // cities.splice(0, 0, "Lviv");

// for (const prop in cities) {
//     console.log(cities[prop]);
// }
// // for (const i of cities) {
// //     console.log(i);
// // }
// // cities[1] = "ABC";

// // console.log(cities);
// // console.log(cities[1]);
// // console.log(cities.length);
// let numbers = [1, 2, 3, 4, 5, 6, 7];
// let sum = numbers.map((x) => x * 2);

// console.log(sum);

let numbers = [20, -1, 0, -3, 68, 90, 20, 1, 2, 3, 4, 5, 6];

function min(array) {
    let min = Number.MAX_VALUE;
    for (const value of array) {
        if (value < min) {
            min = value;
        }
    }
    return min;
}
function max(array) {
    let max = Number.MIN_VALUE;
    for (const value of array) {
        if (value > max) {
            max = value;
        }
    }
    return max;
}
function sum(array) {
    let sum = 0;
    for (const value of array) {
        sum += value;
    }
    return sum;
}
function avg(array) {
    let avg = sum(array) / array.length;
    return avg;
}

const minValue = min(numbers);
const maxValue = max(numbers);
const sumValue = sum(numbers);
const avgValue = avg(numbers);

console.log(minValue);
console.log(maxValue);
console.log(sumValue);
console.log(avgValue.toFixed(2));
