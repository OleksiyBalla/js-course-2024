let shopingList = ["молоко", "хліб", "яйця"];

function addItem(item) {
    shopingList.push(item);
    console.log(`${item} - додано до списку покупок`);
}

function removeItam(item) {
    let index = shopingList.indexOf(item);
    if (index > -1) {
        shopingList.splice(index, 1);
        console.log(`${item} - видалено зі списку покупок`);
    } else {
        console.log(`${item} - не знайдено у списку покупок`);
    }
}

function showList() {
    if (shopingList.length === 0) {
        console.log(`Список порожній`);
    } else {
        console.log(`Поточний список продуктів`);
        shopingList.forEach((item, index) => {
            console.log(`${index + 1} - ${item}`);
        });
    }
}

function menageShopingList() {
    let action;
    do {
        action = prompt(
            "Введіть дію: (add) для додавання продукту, (remove) для видалення продукту, (show) щоб показати список покупок \n\n(exit) для виходу"
        );
        switch (action) {
            case "add":
                let addItemName = prompt("Що хочете додати?");
                addItem(addItemName);
                break;
            case "remove":
                let removeItemName = prompt("Що видалити?");
                removeItam(removeItemName);
                break;
            case "show":
                showList();
                break;
            case "exit":
                console.log("Роботу завершено");
                break;

            default:
                console.log("Помилка вводу, спробуйте ще...");
                break;
        }
    } while (action !== "exit");
}

menageShopingList();
