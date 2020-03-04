var g = 50
var t = 0
function setup() {
  createCanvas(200, 200);
    background(220);
}

function draw() {
  background(220);
    if (t == 0) {
  g+=2
  if (g > 250) {
  t += 1
  }
  }
  if (t == 1) {
    g-=2
    if (g < 50) {
      t -= 1
    }
  }
    stroke(g,g/2,g);
  for (let j = 0; j < height; j += 5) {
    for (let i = 0; i < width; i += 5) {
  line(mouseX,mouseY,i,j);
  }
  }
}
