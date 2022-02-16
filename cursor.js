/* Custom Cursor aka. Ball */
const ball = document.querySelector(".ball");

// /* Initial Mouse Position */
let aimX = 0;
let aimY = 0;

/* Initial Ball Position */
let currentX = 0;
let currentY = 0;

/* Speed --> More Speed = Fast Animation */
let speed = 0.1;

const animateCursor = () => {
  /* Update Ball Positon According To Cursor */
  currentX += (aimX - currentX) * speed;
  currentY += (aimY - currentY) * speed;

  ball.style.left = currentX + "px";
  ball.style.top = currentY + "px";

  requestAnimationFrame(animateCursor);
};

animateCursor();

/* Update Mouse Position on Mousemove Event Trigger */
document.addEventListener("mousemove", (event) => {
  aimX = event.pageX;
  aimY = event.pageY;
});
