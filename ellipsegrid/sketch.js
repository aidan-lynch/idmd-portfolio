var PosX = 0 //sets posx variable
var PosY = 0 //sets posy varaible
let button; //creates button
function setup() {
  createCanvas(500, 400);
    background(220);
        button = createButton('reset');
  button.position(width-50,height-25);
  button.mousePressed(reset);
}

function draw() {
  ellipse(PosX+25,PosY+25,50,50)
  PosX += 50 //makes a new circle 50 spaces to the right
  if (PosX == width) { //if a the circles reach the end of the grid they move down a line
    PosX -= width
    PosY += 50
  }
}

function reset() {
  clear()
  background(220)
  PosX = 0
  PosY = 0
}
