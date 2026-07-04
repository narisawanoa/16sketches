let sketch3 = function(p) {
  let a = 0;
  let c = 0;

  p.setup = function() {
    p.createCanvas(600, 400);
  };

  p.draw = function() {
    p.background(70, 70, 220);
    p.beginShape();
    p.fill(225, 125, 225);
    p.vertex(10, 10);
    p.vertex(50, 50);
    p.vertex(600, 100);
    p.vertex(10, 120);
    p.endShape();

    if (a < 300) { a += 5; }
    else { a = 0; }
    p.ellipse(200, 300, 100 + a, 100 + a);

    if (c < 255) { c += 1; }
    else { c = 0; }

    p.fill(255);
    for (let i = 0; i < 8; i++) {
      p.ellipse(i * 20, 100, 20, 20);
    }

    p.fill(255 - c, c, c);
    p.ellipse(400, 95, 20, 20);

    p.fill(255, 0, 0);
    p.ellipse(200, 300, 20, 20);
    for (let i = 0; i < 8; i++) {
      p.ellipse(i * 20, 300, 20, 20);
    }

    p.line(180, 290, 180, 320);
    p.line(230, 290, 230, 320);
  };
};

let myp5_3 = new p5(sketch3, 'sketch3-container');