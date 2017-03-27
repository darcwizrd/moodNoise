/*fustrated*/
var t;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);
  stroke(255, 40, 40, 30);
  noFill();
  t = 0;
}
function draw() {
  translate(width/2, height/2);
  beginShape();
  for (var i = 0; i < 300; i++) {
    var ang = map(i, 0, 300, 0, TWO_PI);
    var rad = 250 * noise(i * 0.01, t * 0.005);
    var x = rad * cos(ang);
    var y = rad * sin(ang);
    curveVertex(x, y);
  }
  endShape(CLOSE);

  t += .5;

  // clear the background every 600 frames using mod (%) operator
  if (frameCount % 600 == 0) {
	background(0);
  }

}