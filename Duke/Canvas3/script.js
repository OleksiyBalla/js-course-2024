// function doSquare() {
//     const dd1 = document.getElementById("div1");
//     const dd2 = document.getElementById("div2");
//     const sizeInput = document.getElementById("sldr");
//     let size = sizeInput.value;
//     const ctx = dd1.getContext("2d");

//     dd1.style.backgroundColor = "#2970f3";
//     ctx.clearRect(0, 0, div1.width, div1.height);
//     ctx.fillStyle = "yellow";
//     ctx.fillRect(10, 10, size, size);
// }

// function doColor() {
//     const dd1 = document.getElementById("div1");
//     const dd2 = document.getElementById("div2");
//     const userInput = document.getElementById("clr");
//     let color = userInput.value;
//     dd1.style.backgroundColor = color;
//     dd2.style.backgroundColor = color;
// }
//========================================================================================================================================================
const paintcanvas = document.getElementById("canvas1");
const context = paintcanvas.getContext("2d");
let color = "black";
let radius = 10;

// only paint if mouse is  being dragged (moved while the button is pressed)
let isPainting = false;

function setWidth(value) {
    paintcanvas.style.width = value + "px";
}
function setHeight(value) {
    paintcanvas.style.height = value + "px";
}

function clearCanvas() {
    context.clearRect(0, 0, paintcanvas.width, paintcanvas.height);
}

function startPaint() {
    isPainting = true;
}

function endPaint() {
    isPainting = false;
}
function doPaint(x, y) {
    if (isPainting) {
        paintCircle(x, y);
    }
}
function paintCircle(x, y) {
    // make sure to start a new circle each time
    context.beginPath();
    // draw circle using a complete (2*PI) arc around given point
    context.arc(x, y, radius, 0, Math.PI * 2, true);
    context.fillStyle = color;
    context.fill();
}
// verify the given value is actually a number
function isNumeric(value) {
    // standard JavaScript function to determine whether a string is an illegal number (Not-a-Number)
    return !isNaN(value);
}
