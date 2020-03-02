let g = 35 //sets starting gradiant
let r = 0 //sets rotate
let slider; 
function setup() {
  createCanvas(400, 400);
    background(200);
  //creates a slider bar
    slider = createSlider(0, 255, 100);
  slider.position(10, 10);
  slider.style('width', '80px');
}

function draw() {
  //sets slider to affect gradiant
  let val = slider.value();
  g = val;
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