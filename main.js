const box = document.getElementById("box");
const ball = document.getElementById("ball");

let dx = 2;
let dy = 2;
let x = 0;
let y = 0;

function moveBall() {
  x += dx;
  y += dy;

  const boxRect = box.getBoundingClientRect();
  const ballRect = ball.getBoundingClientRect();

  if (x + ballRect.width >= boxRect.width || x <= 0) {
    dx = -dx;
  }
  if (y + ballRect.height >= boxRect.height || y <= 0) {
    dy = -dy;
  }

  ball.style.left = x + "px";
  ball.style.top = y + "px";
}

setInterval(moveBall, 10);
