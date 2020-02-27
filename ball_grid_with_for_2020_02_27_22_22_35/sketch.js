function setup() {
  createCanvas(500, 500);
  background(200);
  
  for (i = 0; i < 10; i++) {
    for (b = 0; b < 10; b++) {
      ellipse(i * 50 + 25, b * 50 + 25, 25, 25);
    }
  }
}

function draw() {

}