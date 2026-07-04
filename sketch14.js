let sketch14 = function(p) {
  let x = [0, 0, 0], y = [0, 0, 0];
  let c;

  p.setup = function() {
    p.createCanvas(800, 600);
    p.background(215);
    c = [p.color(15, 96, 247), p.color(3, 168, 104), p.color(135, 23, 255)];
  };

  p.draw = function() {
    x[0] = p.constrain(x[0] + p.random(-20, 20), -50, p.width + 50);
    y[0] = p.constrain(y[0] + p.random(-20, 20), -50, p.height + 50);
    for (let i = 1; i < 3; i++) {
      x[i] = p.random(p.width);
      y[i] = p.random(p.height);
    }
    for (let i = 0; i < 3; i++) {
      p.stroke(c[i]);
      p.line(x[i], y[i], x[i] + p.random(-10, 10), y[i] + p.random(-10, 10));
    }
    p.stroke(62, 58, 71);
    p.noFill();
    p.rect(20, 20, p.width - 40, p.height - 40);
  };
};

let myp5_14 = new p5(sketch14, 'sketch14-container');