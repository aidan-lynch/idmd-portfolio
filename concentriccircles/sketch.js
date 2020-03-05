function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  noFill() //takes away the fill on the ircles so you can see them all
  for(c=0; c <350;c+=10) { //draws c (size of circle) increasing in increments of 10
    ellipse(200,200,c,c);
  }
}