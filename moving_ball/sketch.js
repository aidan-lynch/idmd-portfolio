var x = 25; //starting xpos of ball
var y = 100 //starting ypos of ball
var dirx = 1.25; //x direction of ball
var diry = 1.25; //y direction of ball

function setup() {
  createCanvas(300, 200);
  background(120, 200, 255);
}

function draw() {
  background(120, 200, 255);
  noStroke();
  ellipse(x, y, 50, 50);
  if (x > 275 || x < 25) { //sets x borders for the ball
    dirx = dirx * -1;
      fill(random(255),random(255),random(255)); //chooser a random color
  }
  if (y > 175 || y < 25) { //sets y borders for the ball
     diry = diry * -1;
      fill(random(255),random(255),random(255)); //chooser a random color
  }
  x = x + dirx; //flips direction of ball by changing x coordinate
  y = y + diry; //flips direction of ball by changing y coordinate
}