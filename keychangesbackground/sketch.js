function setup() {
  createCanvas(400, 400);
    background(220);
}

function draw() {
      textSize(32);
  textFont('merriweather') //sets font
text('try pressing "r", "g", or "b"!', 10, 30); //types instructions
}

function keyTyped() {
  //changes background color based on key pressed
  if (key === 'r') {
    background(255,0,0)
  }
  else if (key === 'g') {
    background(0,255,0)
  }
  else if (key === 'b') {
    background(0,0,255)
  } else {
        background(220)
      textSize(100)
  text(key,height/2,width/2)
  }
}