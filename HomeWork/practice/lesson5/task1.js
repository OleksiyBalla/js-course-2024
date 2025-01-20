let radius = getNumricValue("Введіть радіус");

function getCircleArea(radius) {
    return Math.PI * Math.pow(radius, 2);
}

function getCirclePerimeter(radius) {
    return 2 * Math.PI * radius;
}

alert(
    `Площа кола  = ${getCircleArea(radius).toFixed(2)} \n\nПериметер кола = ${getCirclePerimeter(radius).toFixed(2)}`
);
