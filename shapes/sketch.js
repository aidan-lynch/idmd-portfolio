function setup() {
  createCanvas(800, 400);
  background(185, 250, 222)
}

function draw() {
  if (mouseIsPressed) {
    fill (242, 184, 234);
  } else {
    fill (243, 247, 178);
  }
  rect(mouseX,mouseY,100,50, 20);
}
