let figure = () => prompt("Оберіть фігуру: коло, трикутник, прямокутник");

let circleArea = (r) => (Math.PI * Math.pow(r, 2)).toFixed(2);
let circlePerimeter = (r) => (2 * Math.PI * r).toFixed(2);
let rectangleArea = (a, b) => a * b;
let rectanglePerimeter = (a, b) => 2 * (a + b);
let triangleArea = (a, b, c) => {
    let hp = trianglePerimeter(a, b, c) / 2;
    let area = Math.sqrt(hp * (hp - a) * (hp - b) * (hp - c));
    return area;
};
let trianglePerimeter = (a, b, c) => a + b + c;
let isFigure = figure();
while (isFigure !== "коло" && isFigure !== "трикутник" && isFigure !== "прямокутник") {
    alert("Помилка вводу");
    isFigure = figure();
}
if (isFigure == "коло") {
    let radius = Number(prompt("Введіть радіус"));
    while (isNaN(radius)) {
        alert("Ви ввели не число, спробуйте ще");
        radius = Number(prompt("Введіть радіус"));
    }
    alert(`Коло з радіусом ${radius}, має площу ${circleArea(radius)}, з периметром ${circlePerimeter(radius)}`);
} else if (isFigure == "трикутник") {
    let getValue = () => {
        let a = Number(prompt("сторона a ="));
        let b = Number(prompt("сторона b ="));
        let c = Number(prompt("сторона с ="));
        return { a, b, c };
    };
    let { a, b, c } = getValue();
    if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
        alert(
            `Площа трикутника зі сторонами ${a}, ${b}, ${c} \n\n  = ${triangleArea(a, b, c).toFixed(
                2
            )} \n\n , а його периметр = ${trianglePerimeter(a, b, c).toFixed(2)}`
        );
    } else {
        alert("Помилка вводу, спробуйте ще");
        getValue();
    }
} else if (isFigure == "прямокутник") {
    let getValue = () => {
        let a = Number(prompt(`Введіть сторону a =`));
        let b = Number(prompt(`сторона b =`));
        return { a, b };
    };
    let { a, b } = getValue();
    let count = 0;
    while (isNaN(a) || isNaN(b)) {
        alert("Помилка вводу, спробуйте ще");
        ({ a, b } = getValue());
        count++;
    }
    if (!isNaN(a) || !isNaN(b) || count <= 3) {
        alert(
            `Площа прямокутника зі сторонами a = ${a} та b = ${b} \n \n дорівнює ${rectangleArea(a, b).toFixed(
                2
            )} \n\n а його периметр = ${rectanglePerimeter(a, b).toFixed(2)}`
        );
    } else {
        alert(`Помилка вводу.`);
    }
}
