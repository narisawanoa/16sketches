let sketch15 = function(p) {
  let x = [0, 0, 0], y = [0, 0, 0];
  let c;
  let mx = 50, my = 50, pmx = 50, pmy = 50, a = 0, b = 0.5;

  p.setup = function() {
    p.createCanvas(800, 600);
    p.background(225);
    c = [p.color(15, 96, 247), p.color(161, 20, 1), p.color(135, 23, 255)];
  };

  p.draw = function() {
    p.stroke(0, 50);
    p.noFill();
    if (a > p.width - 50 || a < 0) { b = -b; }
    a = a + b;
    p.ellipse(a, p.height / 2, 200, 200);

    pmx = mx; pmy = my;
    mx = p.constrain(mx + p.random(-20, 20), -50, p.width + 50);
    my = p.constrain(my + p.random(-20, 20), -50, p.height + 50);
    p.stroke(85, 77, 107, 120);
    p.line(pmx, pmy, mx, my);

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

    p.stroke(62 + p.random(50), 58 + p.random(50), 71 + p.random(50));
    p.noFill();
    p.strokeWeight(0.5);
    p.rect(20, 20, p.width - 40, p.height - 40);
    p.noStroke();

    p.fill(62 + p.random(100), 58 + p.random(100), 71 + p.random(100), 100);
    p.ellipse(300, 500, 2, 2.5);
    p.ellipse(420, 290, 3, 2.5);
    p.ellipse(500, 90, 3, 2.5);
    p.fill(8585 + p.random(100), 77 + p.random(100), 107 + p.random(100));
    p.ellipse(220, 500, 2, 2.5);
    p.ellipse(200, 510, 2, 2.5);
  };
};

let myp5_15 = new p5(sketch15, 'sketch15-container');s