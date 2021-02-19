Canvas = document.getElementById("myCanvas");
ctx = Canvas.getContext("2d");
var mouseEvent = "empty";
var lastpositionofX;
var lastpositionofY;
color = "black";
widthline = 1;
Canvas.addEventListener("mousedown", myMouseDown);

function myMouseDown(e) {
    mouseEvent = "mouseDown";
}
Canvas.addEventListener("mouseup", myMouseUp);

function myMouseUp(e) {
    mouseEvent = "mouseUp";
}
Canvas.addEventListener("mouserleave", myMouseLeave);

function myMouseLeave(e) {
    mouseEvent = "mouseLeave";
}
Canvas.addEventListener("mousemove", myMouseMove);

function myMouseMove(e) {
    currentpositionofmouseX = e.clientX - Canvas.offsetLeft;
    currentpositionofmouseY = e.clientY - Canvas.offsetTop;
    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthline;
        ctx.moveTo(lastpositionofX, lastpositionofY);
        console.log("lastpositionofX " + lastpositionofX);
        console.log("lastpositionofY " + lastpositionofY);
        ctx.lineTo(currentpositionofmouseX, currentpositionofmouseY);
        ctx.stroke();
    }
    lastpositionofX = currentpositionofmouseX;
    lastpositionofY = currentpositionofmouseY;
}