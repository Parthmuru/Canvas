canvas = document.getElementById("mycanvas");

color = "red";
ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = color;
ctx.arc(200, 200, 40, 0, 2 * Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    color = document.getElementById("color_input").value;

    mouseX = e.clientX - canvas.offsetLeft;
    mouseY = e.clientY - canvas.offsetTop;
    drawCircle(mouseX, mouseY);
}

function drawCircle(mouseX,mouseY) {
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = color;
    ctx.arc(mouseX, mouseY, 40, 0, 2 * Math.PI);
    ctx.stroke();
}

function clear() {
    ctx.clearArea(0,0,canvas.width, canvas.height)
}