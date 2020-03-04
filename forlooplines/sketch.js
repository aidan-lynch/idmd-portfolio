var t = 0 //tick variable
var g = 50 //gradiant variable
function setup() {
  createCanvas(200, 200);
}

function draw() {
  background(220);
    if (t == 0) { //increases gradiant if tick = 0
  g+=1
  if (g > 250) { //adds 1 to tick if gradiant gets too light
  t += 1
  }
  }
  if (t == 1) { //decreases gradiant if tick = 1
    g-=1
    if (g < 50) { //subtracts 1 from tick if gradiant gets too dark
      t -= 1
    }
  }
  //two for loops set the x and y variables for one point on the lines and the the other point on the line is defined by the location of the mouse
    for (let j = 0; j < height; j += 5) {
    for (let i = 0; i < width; i += 5) {
      stroke(g,g/2,g/2);
  line(mouseX-25,mouseY,0,j);
      stroke(g/2,g,g/2);
  line(mouseX+25,mouseY,width,j);
      stroke(g,g,g/2);
  line(mouseX,mouseY-25,i,0);
      stroke(g/2,g/2,g);
  line(mouseX,mouseY+25,i,height);
       }
       }
}