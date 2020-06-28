"use strict";
var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');
var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;
var isMouseDown = false;
var touches = [];
canvas.addEventListener('mousedown', function (e) {
    isMouseDown = true;
    touches.push({
        x: e.clientX,
        y: e.clientY
    });
});
canvas.addEventListener('mousemove', function (e) {
    if (isMouseDown) {
        console.log(e);
        var oldTouchData = touches[0];
        var currentTouchData = {
            x: e.clientX,
            y: e.clientY
        };
        touches[0] = currentTouchData;
        context.beginPath();
        context.moveTo(oldTouchData.x, oldTouchData.y);
        var midPoint = {
            x: (oldTouchData.x + currentTouchData.x) * 0.5,
            y: (oldTouchData.y + currentTouchData.y) * 0.5
        };
        context.quadraticCurveTo(midPoint.x, midPoint.y, currentTouchData.x, currentTouchData.y);
        context.lineCap = "round";
        context.lineWidth = 5;
        context.stroke();
    }
});
canvas.addEventListener('mouseup', function (e) {
    if (isMouseDown) {
        isMouseDown = false;
        touches.splice(0, 1);
    }
});
//# sourceMappingURL=script.js.map