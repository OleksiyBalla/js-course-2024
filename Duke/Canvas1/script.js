const ccbtn = document.getElementById("ccbtn");

ccbtn.addEventListener("click", () => changeColor);

function changeColor() {
    const divEl1 = document.getElementById("div1");
    const divEl2 = document.getElementById("div2");

    divEl1.className = "bg__yellow";
    divEl2.className = "bg__blue";
}
