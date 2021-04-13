let circleArray = [];
// var modeChoice = '1';

// let symmetry = 1;
// let strokeSlider;
// let stage = "L1";
let colorchange = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(90);

  colorMode(HSB, 360, 100, 100, 100);

  textAlign(CENTER);
  ellipseMode(CENTER);
  textSize(32);
  angleMode(DEGREES);
  bgColor = color(0);
  background(bgColor);

  // noFill();
  // stroke(255);
  // strokeWeight(5);
  // rect(0,0, 350, 600);

  strokeSlider = select("#strokeSlider");
  strokeSlider.mousePressed();
  strokeSlider.class("strokeSlider");

  symmetrySlider = select("#symmetrySlider");
  symmetrySlider.mousePressed();
  symmetrySlider.class("symmetrySlider");

  saveButton = select("#saveButton")
  saveButton.mousePressed(saveMe);
  saveButton.class("saveButton");

  clearButton = select("#clearButton")
  clearButton.mousePressed(clearMe);
  clearButton.class("clearButton");


}


function draw() {

  x = mouseX;
  y = mouseY;
  px = pmouseX;
  py = pmouseY;

if ((x > 350 || y > 600) && mouseIsPressed) {
    startdraw();
  }
}



function startdraw() {

  translate(width / 2, height / 2);

  let strokevalue = noise(colorchange) * 360;

  //make fading
  let alphavalue = map(x, 0, width, 0, 100);
  let saturationvalue = map(x, 0, width, 0, 100);

  colorchange += 0.05;

  stroke(strokevalue, saturationvalue, 100, alphavalue);

  let symmetry = symmetrySlider.value();
  let rotateAngle = 360 / symmetry;

  for (let i = 0; i < symmetry; i++) {
    rotate(rotateAngle);
    let sw = strokeSlider.value();
    strokeWeight(sw);
    line(x - width / 2, y - height / 2, px - width / 2, py - height / 2);

    push();
    scale(-1, 1);
    line(x - width / 2, y - height / 2, px - width / 2, py - height / 2);
    pop();

  }
}


// } else if (modeChoice == '2') {
//   noFill();
//   strokeWeight(3);
//   stroke(255);
//   translate(width / 2, height / 2);
//   for (var i = 0; i < 16; i++) {
//     rotate(360 / 10);
//     ellipse(x - width / 2, y - height / 2, px, py, 50);
//   }
//
// } else if (modeChoice == '3') {
//
//   strokeWeight(3);
//   stroke(random(255), random(255), random(255));
//
//   line(x, y, px, py);
//   line(width - x, y, width - px, py);
//   line(x, height - y, px, height - py);
//   line(width - x, height - y, width - px, height - py);
//
// } else if (modeChoice == '4') {
//
//   // noFill();
//   // strokeWeight(3);
//   // stroke(0);
//   translate(width / 2, height / 2);
//   for (let i = 0; i < 6; i++) {
//     rotate(i * 60);
//     line(x - width / 2, y - height / 2, px - width / 2, py - height / 2);
//   }
// }
//
// }
// };
//    }
//
// }
function saveMe() {
  saveCanvas('mydesign', 'png');
}

function clearMe() {
  background(bgColor);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(bgColor);

}
