// let array = [];
var modeChoice = '1';
let noiseOffset = 0.0;
let strokeSize = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  ellipseMode(CENTER);
  textSize(32);
  angleMode(DEGREES);
  bgColor = color(0, 0 , 0, 5);

  saveButton = select("#saveButton")
  saveButton.mousePressed(saveMe);
  saveButton.class("saveButton");

  clearButton = select("#clearButton")
  clearButton.mousePressed(clearMe);
  clearButton.class("clearButton");
}


function draw() {
  background(bgColor);

  x = mouseX;
  y = mouseY;
  px = pmouseX;
  py = pmouseY;

  if (x > width * 0.3 || y > height * 0.3) {
    if (keyIsPressed) {
      modeChoice = key;
    }
    if (mouseIsPressed) {
      newModeChoice(modeChoice);
    }
  }
}


  function newModeChoice(modeChoice) {

    if (modeChoice == '1') {

      // stroke(random(255), random(255), random(255));
      strokeWeight(strokeSize);

      noiseOffset += 0.05;
      strokeSize = noise(noiseOffset) * 100;

      stroke(map(mouseX, 0, 600, 0, 255, true));
      line(width - x, height - y, width - px, height - py);
      line(x, y, px, py);

    } else if (modeChoice == '2') {
      noFill();
      strokeWeight(3);
      stroke(255);
      translate(width / 2, height / 2);
      for (var i = 0; i < 16; i++) {
        rotate(360 / 10);
        ellipse(x - width / 2, y - height / 2, px, py, 50);
      }

    } else if (modeChoice == '3') {

      strokeWeight(3);
      stroke(random(255), random(255), random(255));

      line(x, y, px, py);
      line(width - x, y, width - px, py);
      line(x, height - y, px, height - py);
      line(width - x, height - y, width - px, height - py);

    } else if (modeChoice == '4') {

      // noFill();
      // strokeWeight(3);
      // stroke(0);
      translate(width / 2, height / 2);
      for (let i = 0; i < 6; i++) {
        rotate(i * 60);
        line(x - width / 2, y - height / 2, px - width / 2, py - height / 2);
      }
    }


  };
  //    }
  //
  // }
  function saveMe() {
    saveCanvas('design', 'png');
  }

  function clearMe() {
    clear();
    modeChoice = '1';
  }

  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
