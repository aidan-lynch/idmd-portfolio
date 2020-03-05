function setup() {
  createCanvas(400, 400);
  background(220);
  var n = [1, 2, 3]; //sets variables for arrayy
  append(n, 5); //adds to the end
  n[2] = 0; //sets 3rd variable for array = 0
  for (j = 0; j < n.length; j++) { //for loop to draw array
    text(n[j], 50, 25 + 50 * j); //draws array
  }
}