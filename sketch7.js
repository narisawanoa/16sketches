let sketch7 = function(p) {
  let a = 0, b = 0, numR = 0, row = 0;

  p.setup = function() {
    p.createCanvas(600, 400);
    p.background(255, 254, 177);
  };

  p.draw = function() {
    p.stroke(0);
    p.fill(230, 155, 0, 150);
    if (a < 500) { a += 0.5; } else { a = 0; }
    if (b < 200) { b += 0.5; } else { b = 0; }
    p.ellipse(220 - a, 200, 60, 60 - b);

    p.fill(205, 25, 125, 150);
    p.ellipse(200 + a, 200, 70, 70 - b);

    p.beginShape();
    p.fill(225, 20, 20, 70);
    p.vertex(0 + a * 1.3, 190);
    p.vertex(120 + a * 1.3, 195);
    p.vertex(0 + a * 1.3, 200);
    p.endShape();

    p.stroke(225 - row, 20, 20, 70);
    if (numR < 550) {
      numR += a * 0.01;
    } else {
      numR = 0;
      p.noStroke();
      p.fill(255, 254, 177, 100);
      p.rect(0, 20 + row * 20, p.width, 35);
      if (row < 20) { row++; } else { row = 0; }
    }
    for (let i = 0; i < numR; i += 10) {
      p.line(30 + i, 30 + row * 20, 30 + i, 50);
    }
    let numR2 = numR - 50;
    p.stroke(60, 60, 220);
    for (let i = 0; i < numR2; i += 10) {
      p.line(30 + i, 30 + row * 20, 30 + i, 50);
    }
  };
};

let myp5_7 = new p5(sketch7, 'sketch7-container');