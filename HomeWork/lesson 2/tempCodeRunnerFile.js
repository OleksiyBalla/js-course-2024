const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const text = document.querySelector("#text");

btn1.addEventListener("click", () => {
    text.classList.toggle("hidden");
    text.classList.remove("color");
    btn2.classList.toggle("hidden");
});
btn2.addEventListener("click", () => {
    text.classList.add("color");
});
btn3.addEventListener("click", () => {
    alert(new Date());
});
btn4.addEventListener('click', () => {
    let name = +prompt("Як вас звати?")
    console.log(typeof(name));
    alert("Привіт," + name)
}); 