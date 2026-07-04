let sketch13 = function(p) {
  let x, y, x2, y2;

  p.setup = function() {
    p.createCanvas(600, 400);
    p.background(205);
    x = 0;
    y = 0;
  };

  p.draw = function() {
    x = p.constrain(x + p.random(-20, 20), -50, p.width + 50);
    y = p.constrain(y + p.random(-20, 20), -50, p.height + 50);
    x2 = x + p.random(-10, 10);
    y2 = y + p.random(-10, 10);
    p.line(x, y, x2, y2);
  };
};

let myp5_13 = new p5(sketch13, 'sketch13-container');