let g = 35 //sets starting gradiant
let t = 0 //sets tick counter
let r = 0 //sets rotation
function setup() {
  createCanvas(400, 400);
    background(200);
}

function draw() {
  //if tick = 0 gradiant increases
  if (t == 0) {
  g++
    //if gradiant gets too big set t = 1
    if (g == 230) {
      t+= 1
    }
  }
  //if t = 1 gradiant decreases
  if (t == 1) {
    g--
    //if gradiant gets too small set t = 0
    if (g == 35) {
      t -= 1
    }
  }
  //rotates all the lines
      rotate(r)
  rotate(r)
  r+=0.25
  //defines lines and their color
    strokeWeight(2)
  stroke(g,g*0.5,g*2)
  line(200,200,200,0);
  stroke(g-2,g*0.5-12,g*2+random(130))
  line(600,200,200,0);
  stroke(g+20,g*0.5,g*2+15)
  line(0,0,50,50);
  stroke(g-random(120),g*0.5+20,g*2+40)
  line(0,0,200,200);
}