let throwCount = +prompt("Скільки разів кинути кубик?");
let random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

for (let i = 0; i < throwCount; i++) {
    const result = random(1, 6);
    console.log(result);
}
