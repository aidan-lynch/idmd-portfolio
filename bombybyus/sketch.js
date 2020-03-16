//number of bombs owned variable
var nd = [2, 9, 13, 50, 170, 299, 438, 841, 1169, 1703, 2422, 3692, 5543, 7345, 12298, 18638, 22229, 25540, 28133, 29463, 31139, 31175, 31225, 29561, 27552, 26008, 25830, 26516, 27835, 28537, 27519, 25914, 25542, 24418, 24138, 24104, 23208, 22886, 23305, 23459, 23368, 23317, 23575, 23205, 22217, 21392, 19008, 13708, 11511, 10979, 10904, 11011, 10903, 10732, 10685, 10577, 10526, 10457, 10027, 8570, 8360, 7853, 5709, 5273, 5113, 4950, 4763, 4680, 4650, 4760];
//date variable
var date = [1945, 1946, 1947, 1948, 1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014];

function setup() {
  createCanvas(720, 500);
  background(220);
  strokeWeight(5);
  textFont('Sen');
}

function draw() {
  background(222, 235, 255);
    for (b = 0; b < nd.length; b+=1) { //sets up variable b with number of variables in nd and date
        stroke(nd[b] / 150, 0, 0); //colors line based off number in data set
      if (b == (int(mouseX / 10.1428))) { //if your mouse is over one of the data plots then
      stroke(255) //it colors that plot white
    }
  line(b*10+10, nd[b] / 90 + 50, b*10+10, 35); //draws the lines according to the number in the data set
  noStroke();
  }
    if (mouseX < 710) { //while the mouse is inside the frame //draws all the data according to what plot your mouse is over
      textSize(25)
    text(('Date: ' + date[int(mouseX / 10.1428)]), int(mouseX) / 1.29, 420) //displays date
      text('Nuclear Weapon', int(mouseX) / 1.29, 440) //displays nuclear weapon
      text('Count: ' + nd[int(mouseX / 10.1428)] , int(mouseX) / 1.29, 460) //displays count
  }
  textSize(21.5)
          text('Number of nuclear weapons the United Stats had on stockpile from 1945 to 2014',5,25)
}