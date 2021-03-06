/*content*/
var t;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);
  stroke(254, 190, 19, 30);
  strokeWeight(2);
  noFill();
  t = 0;
}
function draw() {
	
	 
  translate(width/2, height/2);
  beginShape();
  for (var i = 0; i < 900; i++) {
    var ang = map(i, 0, 300, 0, TWO_PI);
    var rad = 200 * noise(i * 0.01, t * 0.005);
    var x = rad * cos(ang);
    var y = rad * sin(ang);
    curveVertex(x, y);
  }
  endShape(CLOSE);

  t += .5;
  background(0, 10);
}
