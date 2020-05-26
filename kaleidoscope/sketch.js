let a; //angle
let r = 200; //red color
let g = 200; //blue color
let changeX = 450; //changes balls position over time
let changeY = 0;
let z = 0; //variable to test against mouseX
let y = 0; //variable to test against mouseY
let timer = 0; //variable to give balls more time to change
function setup() {
  createCanvas(800, 1000);
  angleMode(DEGREES);
  mouseX+=1 
  mouseY+=1 
  textSize(20);
}

function draw() {
  if (timer == 20) {
  let z = mouseX;
  let y = mouseY;
  }
  timer+=1
  background(220);
   text('The more you move your mouse the more the kaleidoscope changes!',100,40);
  translate(width/2, height);
  //line(width/2, height, width/2, height-200);
  spread(200);
  a = map(mouseX*2+100, 1, width, 1, 45);
  let g = mouseY/random(120);
  let r = mouseX/random(120);
  if (timer == 10) {
  if (z < mouseX) {
    changeX+=random(1);
  }
  if (z > mouseX) {
    changeX+=random(-1);
}
  if (y < mouseY) {
    changeY+=random(1);
  }
  if (y > mouseY) {
    changeY+=random(-1);
  }
    timer -= 10
  }
}

function spread (variability) {
  ellipse(changeY, changeX, -variability);
  variability *= 0.65;
  translate(changeY, -variability-70);
  if (variability > 2) {
    fill(r,g,random(40,160));
    push();
    rotate(a);
  spread(variability);
  pop();
  push();
  rotate(-a);
  spread(variability);
  pop();
  }
}
