let values = [10, 9, -8, 3, 500, 0, 1, -12, 47, -10, 100];

values = values.map(value => value < 0 ? 0 : value);

values.forEach((value, index) => console.log(`index ${index} = ${value}`));