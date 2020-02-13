let button;
function setup() {
  createCanvas(800, 400);
  background(185, 250, 222)
    button = createButton('reset');
  button.position(width-50,height-25);
  button.mousePressed(reset);
  setupp = setup
}

function draw() {
  if (mouseIsPressed) {
    fill (242, 184, 234);
  } else {
    fill (243, 247, 178);
  }
  rect(mouseX,mouseY,100,50, 20);
}
function reset() {
clear()
background(185, 250, 222)
}
