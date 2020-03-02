let bally = 200; //ball x cor
let ballx = 200; //ball y cor
//two color variables, we use 2 colors to have more variety in the color
let c1 = 100 ;
let c2 = 100;
let button;

function setup() {
  createCanvas(400, 400);
    background(80);
            button = createButton('reset'); //gives value to reset button
  button.position(width-50,height-25);
  button.mousePressed(reset);
}

function draw() {
  //randomly moves the ball between -25,25 and keeps the ball within the bounds of the canvas
  if (bally > 12.5) {
  bally += random(-25);
  }
  if (ballx > 12.5) {
  ballx += random(-25);
  }
  if (bally < height-12.5) {
    bally += random(25);
  }
  if (ballx < width-12.5) {
  ballx += random(25);
  }
  //adds to the color variables for the ball depending on what quadrant of hte plane they are in
  if (bally < height/2) {
    c1 += 0.35
}
  if (bally > height/2) {
    c1 -= 0.35
  }
  if (ballx < width/2) {
    c2 += 0.35
  }
  if (ballx > width/2) {
    c2 -= 0.35
  }
  //keeps the colors from getting too dark or too light by adding or subtracting if they get too dark or light
  if (c1 > 150) {
    c1 -= 10
  }
  if (c2 > 150) {
    c2 -= 10
  }
  if (c1 < 50) {
    c1 += 10
  }
  if (c2 < 50) {
    c2 += 10
  }
  noStroke()
  //fills color of ellipse with the different colors and draws ellipse
  fill(c1 + c2, c1 * 0.5 + c2, c1 * 2 + c2)
  ellipse(ballx, bally, 25, 25);
}

function reset() {
  clear()
  background(80);
}
