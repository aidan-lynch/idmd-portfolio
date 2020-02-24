var gradiant = 0 //makes gradiant a variable
let button;
function setup() {
  createCanvas(500, 500);
          button = createButton('reset');
  button.position(width-50,height-25);
  button.mousePressed(reset);
}

function draw() {
  if (gradiant < height) { //tests location of gradiant
    gradiant ++ //creates a new line
    stroke(gradiant * 1, gradiant * 0.5, 150); //changes color of line and stroke
    line(0, gradiant, 500, gradiant); //creates line
  }
}

function reset() {
clear()
  gradiant = 0
}