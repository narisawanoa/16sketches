let sketch4 = function(p) {
  let a = 0, c = 0;
  let m = 0, n = 0;
  let numR = 0, numB = 0;

  p.setup = function() {
    p.createCanvas(600, 400);
  };

  p.draw = function() {
    p.background(70, 70, 220);
    p.fill(0);
    p.rect(0, 0, 600, 200);

    // the tunnel
    p.beginShape();
    p.fill(225, 125, 0);
    p.vertex(10, 10);
    p.vertex(50, 50);
    p.vertex(600, 100 - a / 2);
    p.vertex(10, 120);
    p.endShape();

    p.push();
    p.translate(600, 0);
    p.scale(-1, 1);
    p.beginShape();
    p.stroke(255, 0, 0);
    p.fill(200);
    p.vertex(0, 213);
    p.vertex(30, 211);
    p.vertex(90, 211);
    p.vertex(100, 210);
    p.vertex(110, 215);
    p.vertex(114, 220);
    p.vertex(111, 228);
    p.vertex(100, 230);
    p.vertex(105, 230);
    p.vertex(115, 231);
    p.vertex(116, 233);
    p.vertex(118, 235);
    p.vertex(115, 240);
    p.vertex(110, 241);
    p.vertex(104, 241);
    p.vertex(105, 241);
    p.vertex(113, 250);
    p.vertex(114, 260);
    p.vertex(110, 270);
    p.vertex(100, 278);
    p.vertex(60, 276);
    p.vertex(30, 280);
    p.vertex(0, 278);
    p.vertex(0, 210);
    p.endShape();
    p.pop();

    // the pink circle
    if (a < 300) {
      a += 5;
    } else {
      a = 0;
    }
    p.fill(225, 125, 225);
    p.ellipse(200 + m, 300, 100 + a, 100 + a);

    // turning blue
    if (c < 255) {
      c += 1;
    } else {
      c = 0;
    }
    p.fill(255);

    // blue circles
    numB = 1 + m / 15;
    for (let i = 0; i < numB * 0.3; i++) {
      p.ellipse(i * 20, 100, 20, 20);
    }

    // the black circle at the end top
    p.fill(255 - c / 2.5, 25, c);
    if (n < 400) {
      n += 1;
    } else {
      n = 0;
    }
    p.ellipse(200 + n, 100, 20 - n * 0.01, 20 - n * 0.01);

    // the red circle at the end bottom
    p.fill(255, 0, 0);
    if (m < 500) {
      m += 1;
    } else {
      m = 0;
    }
    p.ellipse(200 + m, 300, 20, 20);
    p.line(180 + m, 290, 180 + m, 320);
    p.line(230 + m, 290, 230 + m, 320);

    // the red circles
    numR = 1 + m / 20;
    for (let i = 0; i < numR; i++) {
      p.ellipse(i * 20, 300, 20, 20);
    }

    // foot shaped object
    p.beginShape();
    p.stroke(255, 0, 0);
    p.fill(225);
    p.vertex(0, 213);
    p.vertex(30, 211);
    p.vertex(90, 211);
    p.vertex(100, 210);
    p.vertex(110, 215);
    p.vertex(114, 220);
    p.vertex(111, 228);
    p.vertex(100, 230);
    p.vertex(105, 230);
    p.vertex(115, 231);
    p.vertex(116, 233);
    p.vertex(118, 235);
    p.vertex(115, 240);
    p.vertex(110, 241);
    p.vertex(104, 241);
    p.vertex(105, 241);
    p.vertex(113, 250);
    p.vertex(114, 260);
    p.vertex(110, 270);
    p.vertex(100, 278);
    p.vertex(60, 276);
    p.vertex(30, 280);
    p.vertex(0, 278);
    p.vertex(0, 210);
    p.endShape();
  };
};

let myp5_4 = new p5(sketch4, 'sketch4-container');