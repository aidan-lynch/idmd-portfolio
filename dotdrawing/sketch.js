let button;
function setup() {
  createCanvas(400, 400);
  background(220);
      button = createButton('reset');
  button.position(width-50,height-25);
  button.mousePressed(reset);
}
function draw() {
  ellipse(mouseX,mouseY,20,20)
  if (mouseIsPressed) {
    fill(random(255),random(255),random(255))
  }
}
function reset() {
clear()
background(220)
}
