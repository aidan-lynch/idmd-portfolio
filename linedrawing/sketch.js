function setup() {
  createCanvas(400, 400);
  background(220);
}
function draw() {
  line(200,200,mouseX,mouseY)
  ellipse(mouseX,mouseY,20,20)
  if (mouseIsPressed) {
    fill(random(255),random(255),random(255))
  }
}