// function showInfo() {
//     console.log(this.price);
//     console.log(this.name);
// }
// //фабрична функція
// function createProduct(id, name, price) {
//     let product = {};
//     product.id = id;
//     product.name = name;
//     product.price = price;
//     product.displayInfo = showInfo;

//     return product;
// }
// let product1 = createProduct(1, "Phone", 10000);
// let product2 = createProduct(2, "Laptop", 30000);
// product1.displayInfo();
// product2.displayInfo();
// //========================================================================================================================================================
// //конструктор
// class Product {
//     constructor(id, name, price) {
//         this.id = id;
//         this.name = name;
//         this.price = price;
//     }
//     showInfo() {
//         console.log(this.price);
//         console.log(this.name);
//         console.log(this.id);
//     }
// }

// let product3 = new Product(3, "PC", 50000);
// let product4 = new Product(4, "Tablet", 20000);

// product3.showInfo();
// product4.showInfo();
const addNewListBtn = document.getElementById("add-new-btn");
let lists = document.getElementById("lists");

addNewListBtn.addEventListener("click", () => addNewList());

function addNewList() {
    let newItem = document.createElement("div");
    newItem.classList.add("todo__item", "item");
    newItem.innerHTML = ` 
                <input type="text" class="item__title" id="item-title" placeholder="List name..." />
                <div class="item__row">
                    <input type="text" class="add-task-input" placeholder="New task..." />
                    <button type="button" class="item__btn-add-task btn btn-add" id="add-task-btn">+</button>
                </div>    
                <div class="item__body" id="item-body">
                <ul class="item__list" id="item-list">
                </ul>
                </div>`;
    lists.appendChild(newItem);

    const addButton = newItem.querySelector("#add-task-btn");
    if (addButton) {
        addButton.addEventListener("click", (event) => addNewTask(event));
    } else {
        console.error("Елемент з id 'add-task-btn' не знайдено.");
    }
}

function addNewTask(event) {
    let itemBody = event.target.closest(".item").querySelector("#item-list");
    const userInput = event.target.closest(".item").querySelector(".add-task-input");
    const inputValue = userInput.value;
    if (inputValue !== "") {
        let newItem = document.createElement("li");
        newItem.classList.add("item__list-row");
        newItem.innerHTML = `                   
                        <span class="item__list-item">${inputValue}</span>
                        <button type="button" class="list__btn-finished btn" id="list-dtn-f">&#10004;</button>
                        <button type="button" class="list__btn-remove btn" id="list-dtn-r">&#10006;</button>                          
                    `;
        itemBody.appendChild(newItem);
        userInput.value = "";
    }
}

// Делегування подій для кнопок виконання та видалення завдань
lists.addEventListener("click", (event) => {
    if (event.target && event.target.id === "list-dtn-f") {
        finished(event);
    }
    if (event.target && event.target.id === "list-dtn-r") {
        removeTask(event);
    }
});

function finished(event) {
    let taskItem = event.target.closest(".item__list-row").querySelector(".item__list-item");
    taskItem.classList.add("finished");
}

function removeTask(event) {
    let taskItem = event.target.closest(".item__list-row");
    taskItem.remove();
}
