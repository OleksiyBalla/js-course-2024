"use strict";

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const text = document.querySelector("#text");

btn1.addEventListener("click", function () {
    btn2.classList.toggle("hidden");
    text.classList.toggle("hidden");
    text.classList.remove("color");
});
btn2.addEventListener("click", function () {
    text.classList.add("color");
});
btn3.addEventListener("click", function () {
    alert(new Date());
});
btn4.addEventListener("click", function () {
    let name = prompt("Як вас звати?");
    if (name) {
        alert("Привіт, " + name);
    } else {
        alert("Привіт, незнайомець");
    }
});
