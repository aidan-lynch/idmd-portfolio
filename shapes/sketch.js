let button;
function setup() {
  createCanvas(800, 400);
  background(185, 250, 222)
  button = createButton('reset');
  button.position(width-50,height-25);
  button.mousePressed(reset);
}
function draw() {
  if (mouseIsPressed) {
    fill(random(255),random(255),random(255));
  }
  ellipse(mouseX,mouseY,50,50,20);
}
function reset() {
clear()
background(185, 250, 222)
}
