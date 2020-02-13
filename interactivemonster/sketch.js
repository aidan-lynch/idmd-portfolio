//sets starting positions
var eyeposx = 0
var eyeposy = 0
var posx = 0
var posy = 0
var time = 0
function setup() {
  createCanvas(1600, 1000);
}

function draw() {
  if (mouseX < 800 && eyeposx > -25) {
    eyeposx -=2 
  }
  if (mouseX > 800 && eyeposx < 25) {
  eyeposx +=2 
  }
  background(220);
  stroke(1)
  strokeWeight(5)
  //leg
  fill(255)
  rect(posx+800,posy+500,10,100)
  fill(180)
  //wheel
  ellipse(posx+805,posy+600,20,20)
  fill(120)
  ellipse(posx+805,posy+600,10,10)
  fill(255)
  //head
  rect(posx+780,posy+400,50,100)
  //left arm
  ellipse(posx+775,posy+450,20,20)
  ellipse(posx+765,posy+455,20,20)
  ellipse(posx+755,posy+465,20,20)
  ellipse(posx+750,posy+478,20,20)
  ellipse(posx+748,posy+494,20,20)
  //right arm
  ellipse(posx+835,posy+450,20,20)
  ellipse(posx+845,posy+455,20,20)
  ellipse(posx+855,posy+465,20,20)
  ellipse(posx+860,posy+478,20,20)
  ellipse(posx+862,posy+494,20,20)
  strokeWeight(5)
  //left fingers
  line(posx+740,posy+500,posx+732,posy+530)
  line(posx+750,posy+505,posx+750,posy+534)
  line(posx+756,posy+500,posx+766,posy+530)
  //right fingers
  line(posx+870,posy+500,posx+878,posy+530)
  line(posx+860,posy+505,posx+860,posy+534)
  line(posx+854,posy+500,posx+844,posy+530)
  fill(0)
  //head
  triangle(posx+900,posy+400,posx+700,posy+400,posx+800,posy+300)
  noStroke()
  fill(255)
  triangle(posx+850,posy+375,posx+750,posy+375,posx+800,posy+325)
  fill(0)
  //eye
  ellipse(eyeposx+posx+800,eyeposy+posy+355,10,10)
  fill(255)
  ellipse(eyeposx+posx+800,eyeposy+posy+355,5,5)
  //ground
  stroke(1)
  strokeWeight(5)
  line(0,610,1600,610)
  if (mouseIsPressed && posy == 0) {
    posy -= 100
  }
  if (posy < 0) {
    posy += 5
  }
  }