  var playing = false;
  var fingers;
  var button;

function setup() {
  createCanvas(640, 480);

  // specify multiple formats for different browsers
  fingers = createVideo(['assets/fingers.mov',
                         'assets/fingers.webm']);
  button = createButton('play');
  button.mousePressed(toggleVid); // attach button listener
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}

// plays or pauses the video depending on current state
function toggleVid() {
  if (playing) {
    fingers.pause();
    button.html('play');
  } else {
    fingers.loop();
    button.html('pause');
  }
  playing = !playing;
}