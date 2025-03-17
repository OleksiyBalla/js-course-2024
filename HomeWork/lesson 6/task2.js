// const addBtn = document.getElementById("addBtn");
// const removeBtn = document.getElementById("removeBtn");

// let list = ["apple", "milk", "bread"];

// addBtn.addEventListener("click", () => addItem());
// removeBtn.addEventListener("click", () => removeItem());

// function addItem() {
//     const userInput = document.getElementById("input").value;
//     if (userInput === "") {
//         alert("Error, try again");
//     } else {
//         list.push(userInput);
//     }
//     showList();
// }
// function removeItem() {
//     const userInput = document.getElementById("input").value;
//     let i = list.indexOf(userInput);
//     if (i !== -1) {
//         list.splice(i, 1);
//     } else {
//         console.log("Element doesn`t found");
//     }
//     showList();
// }
// function showList() {
//     const userList = document.getElementById("userList");
//     userList.innerHTML = "";
//     list.forEach((value, index) => {
//         const listItem = document.createElement("li");
//         listItem.classList.add("listItem");
//         listItem.textContent = `${index + 1}. ${value}`;
//         userList.appendChild(listItem);
//     });
// }
// showList();
//========================================================================================================================================================

// const addNewListBtn = document.getElementById("add-new-btn");
// const addNewTaskBtn = document.getElementById("add-task-btn");
// const finishedBtn = document.getElementById("list-dtn-f");
// const removeBtn = document.getElementById("list-dtn-r");
// let lists = document.getElementById("lists");
// // const newTaskInp = document.getElementById("add-task-input").value;
// addNewListBtn.addEventListener("click", () => addNewList());
// // addNewTaskBtn.addEventListener("click", () => addNewTask());
// function addNewList() {
//     let newItem = document.createElement("div");
//     newItem.classList.add("todo__item", "item");
//     newItem.innerHTML = `
//                 <input type="text" class="item__title" id="item-title" placeholder="List name..." />
//                 <div class="item__row">
//                     <input type="text" class="add-task-input" placeholder="New task..." />
//                     <button type="button" class="item__btn-add-task btn btn-add" id="add-task-btn">+</button>
//                 </div>
//                 <div class="item__body" id="item-body">
//                 <ul class="item__list" id="item-list">
//                 </ul>
//                 </div>`;
//     lists.appendChild(newItem);
//     newItem.querySelector("#add-task-btn").addEventListener("click", (event) => addNewTask(event));
//     newItem.querySelector("#list-dtn-f").addEventListener("click", (event) => finished(event));
// }
// function addNewTask(event) {
//     let itemBody = event.target.closest(".item").querySelector("#item-list");
//     const userInput = event.target.closest(".item").querySelector(".add-task-input");
//     const inputValue = userInput.value;
//     if (inputValue !== "") {
//         let newItem = document.createElement("li");
//         newItem.classList.add("item__list-row");
//         newItem.innerHTML = `
//                         <span class="item__list-item">${inputValue}</span>
//                         <button type="button" class="list__btn-finished btn" id="list-dtn-f">&#10004;</button>
//                         <button type="button" class="list__btn-remove btn" id="list-dtn-r">&#10006;</button>
//                     `;
//         itemBody.appendChild(newItem);
//         userInput.value = "";
//     }
// }
// function finished(event) {
//     let finished = event.target.closest(".item__list-row").querySelector(".item__list-item");
//     finished.classList.add("finished");
// }
//========================================================================================================================================================

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
                </div>
                <button type="button" class="list__btn-remove btn" id="list-remove-btn">&#10006;</button>
                `;
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

lists.addEventListener("click", (event) => {
    if (event.target && event.target.id === "list-dtn-f") {
        finished(event);
    }
    if (event.target && event.target.id === "list-dtn-r") {
        removeTask(event);
    }
    if (event.target && event.target.id === "list-remove-btn") {
        removeList(event);
    }
});

function finished(event) {
    let taskItem = event.target.closest(".item__list-row").querySelector(".item__list-item");
    taskItem.classList.toggle("finished");
}

function removeTask(event) {
    let taskItem = event.target.closest(".item__list-row");
    taskItem.remove();
}
function removeList(event) {
    let removeList = event.target.closest(".todo__item");
    removeList.remove();
}
