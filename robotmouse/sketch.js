  var PosX = 280;
  var PosY = 250;
function setup() {
createCanvas(1550, 540);
    background(255, 204, 204)
}
function draw() {
  var PPosX = PosX;
  //movement
PosY = mouseY
PosX = mouseX
   background(255, 204, 204)
fill(40)
  //head
rect(PosX,PosY,50,40)
  fill(255)
  //eyes
  ellipse(PosX,PosY,30,40,50)
  ellipse(PosX+50,PosY,30,40,50)
  fill(0)
  //pupils
  ellipse(PosX,PosY,20,30,50)
  ellipse(PosX+50,PosY,20,30,50)
  //eyebrows
  line(PosX-20,PosY-20,PosX+10,PosY-30)
  line(PosX+40,PosY-30,PosX+70,PosY-20)
  fill(30)
  //jacket
  rect(PosX,PosY+40,50,100)
  fill(205)
  //shirt
  rect(PosX+15,PosY+40,20,100)
  fill(0)
  //tie
  triangle(PosX+25,PosY+45,PosX+20,PosY+50,PosX+30,PosY+50)
  triangle(PosX+25,PosY+105,PosX+20,PosY+50,PosX+30,PosY+50)
  fill(255)
  //teeth
  rect(PosX+5,PosY+22,10,15,50)
  rect(PosX+15,PosY+22,10,15,50)
  rect(PosX+25,PosY+22,10,15,50)
  rect(PosX+35,PosY+22,10,15,50)
  //legs
  line(PosX+10,PosY+140,PosX,PosY+180)
  line(PosX+40,PosY+140,PosX+50,PosY+180)
   //arms
  if (PosX>PPosX) {
    line(PosX+50,PosY+50,((PosX-PPosX)*3)+PosX+100,PosY+20);
  } else {
    line(PosX+50,PosY+50,PosX+70,PosY+110); 
  }
  if (PosX<PPosX) {
    line(PosX,PosY+50,((PosX-PPosX)*3)+PosX-50,PosY+20);
  } else {
    line(PosX,PosY+50,PosX-20,PosY+110);
  }
}  
