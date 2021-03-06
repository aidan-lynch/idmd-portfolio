// sets variable for positions
var PosY = 50
var PosX = 50
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(12)
  if (PosX > mouseX-25 && PosX < mouseX+25 && PosY > mouseY-25 && PosY < mouseY+25) { //changes color of ball if touching mouse
    fill (255,0,0)
  } else {
    fill (255)
  }
  //movement
   if (keyIsDown(LEFT_ARROW)) {
    PosX +=-3;
  } if (keyIsDown(RIGHT_ARROW)) {
    PosX +=3;
  } if (keyIsDown(UP_ARROW)) {
    PosY +=-3;
  } if (keyIsDown(DOWN_ARROW)) {
    PosY +=3;
  }
  //stops ball if it goes outside boundaries
  if (PosX >= width-25) {
    PosX -= 3
  }
    if (PosX <= 25) {
    PosX += 3
  }
  if (PosY >= height-25) {
    PosY -= 3
  }
  if (PosY <= 25) {
    PosY +=3
  }
  ellipse(PosX,PosY,50,50,50)
}
