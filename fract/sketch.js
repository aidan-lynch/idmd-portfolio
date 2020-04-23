let slider;
let p = 0
let g = 0

function drawSquare(x, y, s) {
  fill(random(255), random(255), random(255));
  rect(x, y, s, s);
  if (s > 2) {
    fill(random(255), random(255), random(255));
    drawSquare(x + s / 2, y * 2, s / 2);
    drawSquare(x - s / 2, y, s / 2);
    drawSquare(x, y + s / 2, s / 2);
    drawSquare(x, y + s * 2, s / 2);
  }
}

function setup() {
  createCanvas(600, 600);
  slider = createSlider(0, 255, 100);
  slider.position(10, 10);
  slider.style('width', '80px');
}

function draw() {
  background(220);
  noFill();
  drawSquare(width / 2, height / 3, 200);
  let n = slider.value();
  fill(0)
  textSize(20)
  text('n =', 50, 50);
  text(n, 85, 50);
  text('n! =', 50, 70);
  let p = n
  let g = n
  for (let i = 0; i < 255; i += 1) {
    if (p > 0) {
      g -= 1
      n += g
      p -= 1
    }
  }
  text(n, 90, 70);
}
