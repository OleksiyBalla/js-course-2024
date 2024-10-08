let dayNamber = new Date().getDay();

switch (dayNamber) {
    case 1:
        console.log("Понеділок");
        break;
    case 2:
        console.log("Вівторок");
        break;
    case 3:
        console.log("Середа");
        break;
    case 4:
        console.log("Четвер");
        break;
    case 5:
        console.log("П'ятниця");
        break;
    case 6:
        console.log("Cубота");
        break;
    case 7:
        console.log("Неділя");
        break;
    default:
        console.log('Помилка');
        break;
}
