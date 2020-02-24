var img //sets img as a vairiable
function preload(){
img = loadImage("aidan.jpg"); //loads the image
}

function setup() { 
  createCanvas(600, 600);
} 

function draw() { 
  background(220);
  image(img,mouseX-300,mouseY-300,width,height); //puts image at location of mouse
}