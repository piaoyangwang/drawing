var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var radius = 10;
var dragging = false;
context.fillStyle = 'black';
context.strokeStyle = 'black';
canvas.width = 500;
canvas.height = 800;

context.lineWidth = radius * 2;

var putPoint = function (e) {

    if (dragging) {
        context.lineTo(e.clientX, e.clientY);
        context.stroke();
        context.beginPath();
        context.arc(e.clientX, e.clientY, radius, 0, Math.PI * 2);
        context.fill();
        context.beginPath();
        context.moveTo(e.clientX, e.clientY);
    }

}

var clearCanvas = function () {
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
}

var engage = function (e) {
    dragging = true;
    putPoint(e);
}

var disengage = function () {
    dragging = false;
    context.beginPath();
}

var keyEvent = function (e) {
    if (e.code === 'Space') {
        clearCanvas();
    } else {
        if (e.code === 'KeyB') {
            context.fillStyle = 'blue';
            context.strokeStyle = 'blue';
        } else if (e.code === 'KeyG') {
            context.fillStyle = 'green';
            context.strokeStyle = 'green';
        } else if (e.code === 'KeyR') {
            context.fillStyle = 'red';
            context.strokeStyle = 'red';
        } else if (e.code === 'KeyY') {
            context.fillStyle = 'yellow';
            context.strokeStyle = 'yellow';
        } else if (e.code === 'ArrowUp') {
            context.lineWidth = context.lineWidth +10;
        } else if (e.code === 'ArrowDown') {
            context.lineWidth = context.lineWidth -10;
        }
    }
}
canvas.addEventListener('mousedown', engage);
canvas.addEventListener('mousemove', putPoint);
canvas.addEventListener('mouseup', disengage);
window.addEventListener('keydown', keyEvent);
canvas.addEventListener('touchstart', engage);
canvas.addEventListener('touchmove', putPoint);
canvas.addEventListener('touchend', disengage);
