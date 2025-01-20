let figure = () => prompt("Оберіть фігуру; коло, прямокутник, трикутник");

let circleArea = (radius) => Math.PI * Math.pow(radius, 2);
let circlePerimeter = (radius) => 2 * Math.PI * radius;
let trianglePerimeter = (a, b, c) => a + b + c;
let triangleArea = (a, b, c) => {
    let p = (a + b + c) / 2;
    return Math.sqrt(p * (p - a) * (p - b) * (p - c));
};
let rectangleArea = (a, b) => a * b;
let rectanglePerimeter = (a, b) => (a + b) * 2;
let isFigure = figure();
while (isFigure !== "коло" && isFigure !== "прямокутник" && isFigure !== "трикутник") {
    alert(`Помилка вводу! Спробуйте ще раз`);
    isFigure = figure();
}
if (isFigure == "коло") {
    let radius = Number(prompt("Введіть радіус кола"));
    alert(
        `Коло має радіус ${radius} \n\nЙого площа = ${circleArea(radius).toFixed(2)}\nЙого периметер = ${circlePerimeter(radius).toFixed(2)}`
    );
} else if (isFigure == "трикутник") {
    let a = Number(prompt("Введіть сторону a"));
    let b = Number(prompt("Введіть сторону b"));
    let c = Number(prompt("Введіть сторону c"));
    alert(
        `Трикутник зі сторонами ${a}, ${b}, ${c} \n\nМає площу ${triangleArea(
            a,
            b,
            c
        )} \nта периметер ${trianglePerimeter(a, b, c)}`
    );
} else if (isFigure == "прямокутник") {
    let a = Number(prompt("Введіть сторону a"));
    let b = Number(prompt("Введіть сторону b"));
    alert(
        `Прямокутник зі сторонами ${a} та ${b} \n\nйого площа = ${rectangleArea(
            a,
            b
        )} \n\nа його периметер = ${rectanglePerimeter(a, b)}`
    );
}
