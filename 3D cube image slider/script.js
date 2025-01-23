const cube = document.querySelector(".cube");
const rotateUp = document.getElementById("rotate-up");
const rotateDown = document.getElementById("rotate-down");
const rotateLeft = document.getElementById("rotate-left");
const rotateRight = document.getElementById("rotate-right");

let xRotation = 0;
let yRotation = 0;

// Rotate Up
rotateUp.addEventListener("click", () => {
  xRotation -= 90;
  cube.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
});

// Rotate Down
rotateDown.addEventListener("click", () => {
  xRotation += 90;
  cube.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
});

// Rotate Left
rotateLeft.addEventListener("click", () => {
  yRotation -= 90;
  cube.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
});

// Rotate Right
rotateRight.addEventListener("click", () => {
  yRotation += 90;
  cube.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
});
