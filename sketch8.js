let sketch8 = function(p) {
  let bg, fg;
  let a = 0, b = 0;
  let numR = 0;
  let row = 0;
  let angle = -p.HALF_PI;
  let prevAngle = angle;
  let bgR, bgG, bgB;

  function changeBackground() {
    bgR = 60 - p.random(30);
    bgG = 60 - p.random(30);
    bgB = 220 - p.random(100);
    bg.background(bgR, bgG, bgB);
  }

  p.setup = function() {
    p.createCanvas(600, 400);
    bg = p.createGraphics(600, 400);
    fg = p.createGraphics(600, 400);
    bgR = 60 - p.random(30);
    bgG = 60 - p.random(30);
    bgB = 220 - p.random(100);
    bg.background(bgR, bgG, bgB);
    fg.clear();
  };

  p.draw = function() {
    if (p.frameCount % 300 === 0) {
      changeBackground();
    }
    p.image(bg, 0, 0);

    fg.beginShape();
    fg.stroke(10);
    fg.fill(205, 50);
    fg.vertex(0 + a, 330);
    fg.vertex(140 + a, 330);
    fg.vertex(140 + a, 300);
    fg.vertex(190 + a, 355);
    fg.vertex(150 + a, 400);
    fg.vertex(0 + a, 400);
    fg.endShape();

    fg.stroke(60, 60, 220);
    fg.line(300, 200, 300 + 150 * p.cos(prevAngle), 200 + 150 * p.sin(prevAngle));
    fg.stroke(230, 155, 0, 150);
    fg.line(300, 200, 300 + 150 * p.cos(angle), 200 + 150 * p.sin(angle));
    prevAngle = angle;
    angle += 0.02;

    fg.stroke(0);
    fg.fill(230, 155, 0, 150);
    if (a < 500) {
      a += 0.5;
    } else {
      a = 0;
    }
    if (b < 200) {
      b += 0.5;
    } else {
      b = 0;
    }
    fg.ellipse(220 - a, 200, 60, 60 - b);
    fg.fill(205, 25, 125, 150);
    fg.stroke(225, 125, 25);
    fg.ellipse(200 + a, 200, 70, 70 - b);
    fg.ellipse(130 + a, 200, 60, 60 - b);

    fg.beginShape();
    fg.fill(225, 20, 20, 70);
    fg.stroke(10);
    fg.vertex(0 + a * 1.3, 190);
    fg.vertex(120 + a * 1.3, 195);
    fg.vertex(0 + a * 1.3, 200);
    fg.fill(225, 0, 0, 70);
    fg.vertex(0 + a * 1.5, 210);
    fg.vertex(120 + a * 1.5, 215);
    fg.vertex(0 + a * 1.5, 220);
    fg.endShape();

    fg.stroke(225 - row, 20, 20, 70);
    if (numR < 550) {
      numR += a * 0.01;
    } else {
      numR = 0;
      fg.noStroke();
      fg.fill(bgR, bgG, bgB, 100);
      fg.rect(0, 20 + row * 20, p.width, 35);
      if (row < 20) {
        row++;
      } else {
        row = 0;
      }
    }

    for (let i = 0; i < numR; i += 10) {
      fg.line(30 + i, 30 + row * 20, 30 + i, 50);
    }
    let numR2 = numR - 50;
    fg.stroke(bgR, bgG, bgB);
    for (let i = 0; i < numR2; i += 10) {
      fg.line(30 + i, 30 + row * 20, 30 + i, 50);
    }

    p.image(fg, 0, 0);
  };
};

let myp5_8 = new p5(sketch8, 'sketch8-container');