//starting size of dot
var dotsize=50; 
//starting red color of dot
var r=0; 
//runs sequence once
function setup() {
  //creates a canvas at a designated size
  createCanvas(400, 400);
  //starting background color
  background(220);
  //starting color
  fill(0);
  //starting ellipse
  ellipse (200,200,dotsize,dotsize,50); 
}
//runs sequence 60 times a second
function draw() {
  //tests if mouse is within borders of dot
  if (mouseX>=175 && mouseY<=225 && mouseY>=175 && mouseY<=225) { 
    //increases dot size by 1
    dotsize += 1 
    //increases red color by 1
    r += 0.75 
    //color of dot
    fill(r,0,0) 
    //constantly replaces dot with new parameters
     ellipse (200,200,dotsize,dotsize,50); 
  }
  //tests if the dot reaches a certain size and if so activates color sequence
  if (dotsize>width) {
    //color sequence
      background(random(255),random(0),random(0))
  }
}
