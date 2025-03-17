function doSquare() {
    const dd1 = document.getElementById("div1");
    const dd2 = document.getElementById("div2");
    const sizeInput = document.getElementById("sldr");
    let size = sizeInput.value;
    const ctx = dd1.getContext("2d");

    dd1.style.backgroundColor = "#2970f3";
    ctx.clearRect(0, 0, div1.width, div1.height);
    ctx.fillStyle = "yellow";
    ctx.fillRect(10, 10, size, size);
}

function doColor() {
    const dd1 = document.getElementById("div1");
    const dd2 = document.getElementById("div2");
    const userInput = document.getElementById("clr");
    let color = userInput.value;
    dd1.style.backgroundColor = color;
    dd2.style.backgroundColor = color;
}
