function setup() {
  createCanvas(800, 400);
  background(37,48,22)
}

function draw() {
  if (mouseIsPressed) {
    fill (120,200,30);
  } else {
    fill (137,104,120);
  }
  rect(mouseX,mouseY,100,50, 20);
}