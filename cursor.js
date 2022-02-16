/* Custom Cursor aka. Ball */
const balls = document.querySelectorAll("div.ball");

// /* Initial Mouse Position */
let aimX = 0;
let aimY = 0;

balls.forEach((ball, index) => {
  /* Initial Ball Position */
  let currentX = 0;
  let currentY = 0;

  /* Speed --> More Speed = Fast Animation */
  let speed = 0.3 - index * 0.015;

  const animateCursor = () => {
    
    /* Update Ball Positon According To Cursor */
    currentX += (aimX - currentX) * speed;
    currentY += (aimY - currentY) * speed;

    ball.style.left = currentX + "px";
    ball.style.top = currentY + "px";

    requestAnimationFrame(animateCursor);
  };
  animateCursor();
})

/* Update Mouse Position on Mousemove Event Trigger */
document.addEventListener("mousemove", (event) => {
    aimX = event.pageX;
    aimY = event.pageY;
})




/* Show Text on Hover */
cursorText = document.querySelector('.cursor-text');
let images = document.querySelectorAll("img[data-hover]");

images.forEach((image) => {
    image.addEventListener("mouseover", () => {
        cursorText.classList.add("visible");
        cursorText.innerText = image.getAttribute("data-hover");
    })
    image.addEventListener("mouseout", () => {
        cursorText.classList.remove("visible");
        cursorText.innerText = image.getAttribute("");
    })
})





















































