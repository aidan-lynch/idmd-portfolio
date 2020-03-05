function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for(i=10; i < width; i+=10) { //draws x coordinate of dots in increments of 10
    for(j=10; j < height; j+= 10) { //draws y coordinate of dots in increments of 10
   ellipse(i,j,5,5);
  }
  }
}