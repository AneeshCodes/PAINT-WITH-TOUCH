var mouseEvent = "";
var lastPositionOfX,lastPositionOfY;
var canvas = document.getElementById("myCanvas");
ctx=canvas.getContext('2d');
color = "red";
widthOfLine = 2;
var screenWidth = screen.width;
var newWidth = screen.width - 70;
var newHeight = screen.height - 300;
if (screenWidth < 992) {
    document.getElementById('myCanvas').width = newWidth;
    document.getElementsById('myCanvas').height = newHeight;
    document.body.style.overflow = 'hidden';
}
//Mouse Events//
canvas.addEventListener('mousedown',mymousedown)
function mymousedown(e){
    color = document.getElementById('color').value;
    widthOfLine = document.getElementById('width').value;
    mouseEvent = "mousedown";
}

canvas.addEventListener('mousemove',mymousemove)
function mymousemove(e){
    var currentPositionOfX = e.clientX - canvas.offsetLeft;
    var currentPositionOfY = e.clientY - canvas.offsetTop;
    if(mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthOfLine;
        ctx.moveTo(lastPositionOfX,lastPositionOfY);
        ctx.lineTo(currentPositionOfX,currentPositionOfY);
        ctx.stroke();
    }
    lastPositionOfX = currentPositionOfX;
    lastPositionOfY = currentPositionOfY;
}

//Touch Events//
canvas.addEventListener('touchstart',mytouchstart)
function mytouchstart(e){
    color = document.getElementById('color').value;
    widthOfLine = document.getElementById('width').value;
    mouseEvent = "touchstart";
    lastPositionOfX = e.touches[0].clientX - canvas.offsetLeft;
    lastPositionOfY = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener('touchmove',mytouchmove)
function mytouchmove(e){
    var currentPositionOfX = e.touches[0].clientX - canvas.offsetLeft;
    var currentPositionOfY = e.touches[0].clientY - canvas.offsetTop;
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthOfLine;
        ctx.moveTo(lastPositionOfX,lastPositionOfY);
        ctx.lineTo(currentPositionOfX,currentPositionOfY);
        ctx.stroke();
    lastPositionOfX = currentPositionOfX;
    lastPositionOfY = currentPositionOfY;
}

canvas.addEventListener('mouseup',mymouseup)
function mymouseup(e){
    mouseEvent = "mouseup"

}

canvas.addEventListener('mouseleave',mymouseleave)
function mymouseleave(e){
    mouseEvent = "mouseleave"
    
}

function cleararea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}