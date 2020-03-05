function setup() {
  createCanvas(400, 400);
  strokeWeight(5); //sets width of lines
}

function draw() {
  background(220);
  for(i = 10; i < mouseY; i = i + 20) { //draws y coordiante according to location of mouse
    for(j = 10; j < mouseX; j = j + 20) { //draws x coordianate accordding to location of mouse
    line(0, i, width, i);  //draws horrizontal lines
      line(j, 0, j, height); //draws vertical lines
    }
  }
}