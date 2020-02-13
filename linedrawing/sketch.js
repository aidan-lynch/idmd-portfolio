let button;
function setup() {
  createCanvas(400, 400);
  background(220);
    button = createButton('reset');
  button.position(width-50,height-25);
  button.mousePressed(reset);
}
function draw() {
  if (mouseIsPressed) {
    fill(random(255),random(255),random(255))
     line(200,200,mouseX,mouseY)
  ellipse(mouseX,mouseY,20,20)
  }
}
function reset() {
clear()
background(220)
}
