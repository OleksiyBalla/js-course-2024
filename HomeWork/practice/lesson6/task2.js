// let values = [10, 9, -8, 3, 500, 0, 1, -12, 47, -10, 100];

// for (let i = 0; i < values.length; i++) {
//     if (values[i] < 0) values[i] = 0;
// }

// function result(value, index) {
//     console.log(`index ${index} = ${value}`);
// }

// values.forEach(result);

let values = [10, 9, -8, 3, 500, 0, 1, -12, 47, -10, 100];


values = values.map((value) => (value < 0 ? 0 : value));

values.forEach((value, index) => console.log(`index ${index} = ${value}`));
