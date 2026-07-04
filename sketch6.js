let sketch6 = function(p) {
  let a = 0, b = 0;

  p.setup = function() {
    p.createCanvas(400, 400);
    p.background(255, 254, 177);
  };

  p.draw = function() {
    p.fill(230, 155, 0, 150);
    if (a < 300) { a += 0.5; } else { a = 0; }
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
  };
};

let myp5_6 = new p5(sketch6, 'sketch6-container');