var time = 0
var thetime = 0
var time2 = 0
var time3 = 660
  var X = 0
  var Y = 0
function setup() {
  createCanvas(800, 800);
    background(220);
  textSize(50)
  strokeWeight(0)
}

function draw() {
  time+=1
  if (time==60) {
    thetime+=2
    fill(random(255),random(255),random(255));
    ellipse(X,Y,100,100);
    fill(0);
    text(thetime,X-25,Y+16);
  time-=120
  }
  X = random(width);
  Y = random(height);
  if (time2==1200) {
  fill(0);
  rect(width-100,height-100,100,100);
    fill(255);
    text(int(time3/60),width-75,height-50);
    if (time3 > 0) {
    time3-=1
    }
  } else {
    time2+=1
}
  if (time3/60 == 0) {
    background(random(255),0,0);
  }
}