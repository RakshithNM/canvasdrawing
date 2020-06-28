const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const context = canvas.getContext('2d') as CanvasRenderingContext2D;
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
let isMouseDown = false;

interface TouchData {
  x: number,
  y: number
}

let touches: TouchData[] = [];

canvas.addEventListener('mousedown', function(e) {
  isMouseDown = true;
  touches.push({
    x: e.clientX,
    y: e.clientY
  });
});

canvas.addEventListener('mousemove', function(e) {
  if(isMouseDown) {
    console.log(e);
    let oldTouchData: TouchData = touches[0];
    let currentTouchData: TouchData = {
      x: e.clientX,
      y: e.clientY
    }
    touches[0] = currentTouchData;
    context.beginPath();
    context.moveTo(oldTouchData.x, oldTouchData.y);
    let midPoint = {
      x: (oldTouchData.x + currentTouchData.x) * 0.5,
      y: (oldTouchData.y + currentTouchData.y) * 0.5
    }
    context.quadraticCurveTo(midPoint.x, midPoint.y, currentTouchData.x, currentTouchData.y);
    context.lineCap = "round"
    context.lineWidth = 5;
    context.stroke();
  }
});

canvas.addEventListener('mouseup', function(e) {
  if(isMouseDown) {
    isMouseDown = false;
    touches.splice(0, 1);
  }
});