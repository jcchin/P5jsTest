  var playing = false;
  var fingers;
  var button;

function setup() {
  createCanvas(640, 480);

}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
