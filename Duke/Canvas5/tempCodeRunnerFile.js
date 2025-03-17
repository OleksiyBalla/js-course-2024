let num1 = 8;
let num2 = 2;
let mark = "+";

function count(num1, num2, mark) {
    let result;
    if (mark == "+") {
        result = num1 + num2;
    } else if (mark == "-") {
        result = num1 - num2;
    } else if (mark == "*") {
        result = num1 * num2;
    } else if (mark == "/") {
        result = num1 / num2;
    }
    return result;
}

console.log(count(num1, num2, mark));
