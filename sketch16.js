let sketch16 = function(p) {
  let x = [0, 0, 0], y = [0, 0, 0];
  let c;
  let mx = 50, my = 50, pmx = 50, pmy = 50;
  let a = 0, b = 0.5, a2 = 0, b2 = 0.5;
  let go = false;
  let fx = 0, fy = 0, fb = 1, fyb = 1;
  let n = 0, nb = 1;

  p.setup = function() {
    p.createCanvas(800, 600);
    p.background(135, 23, 255);
    c = [p.color(15, 96, 247), p.color(161, 20, 1), p.color(135, 23, 255)];
  };

  function fish(fx, fy, fb) {
    p.push();
    p.translate(fx, fy);
    if (fb < 0) {
      p.scale(-1, 1);
      p.translate(-206, 0);
    }
    p.stroke(22, 133, 12, 80);
    p.noFill();
    p.beginShape();
    p.vertex(156, 180);
    p.vertex(156, 200);
    p.vertex(170, 190);
    p.vertex(173, 195);
    p.vertex(180, 201);
    p.vertex(187, 203);
    p.vertex(193, 202);
    p.vertex(198, 200);
    p.vertex(202, 196);
    p.vertex(205, 194);
    p.vertex(205, 192);
    p.vertex(202, 192);
    p.vertex(205, 192);
    p.vertex(206, 191);
    p.vertex(205, 188);
    p.vertex(204, 185);
    p.vertex(204, 183);
    p.vertex(202, 182);
    p.vertex(198, 178);
    p.vertex(190, 175);
    p.vertex(178, 176);
    p.vertex(173, 177);
    p.vertex(168, 182);
    p.vertex(156, 180);
    p.endShape();
    p.pop();
  }

  p.draw = function() {
    p.noStroke();
    p.ellipseMode(p.CORNER);
    p.fill(242, 14, 241, 30);
    if (fb > 0) {
      p.ellipse(fx + 150, fy + 170, 65, 40);
    } else {
      p.ellipse(fx, fy + 170, 65, 40);
    }
    if (fx > p.width || fx < -200) {
      fb = -fb;
      fy += fyb * 30;
      if (fy > 300 || fy < -100) {
        fyb = -fyb;
      }
    }
    fx += fb;
    fish(fx, fy, fb);

    p.strokeWeight(1);
    p.ellipseMode(p.CENTER);
    p.stroke(0, 50);
    p.noFill();
    if (a > p.width - 50 || a < 0) { b = -b; }
    a = a + b;
    if (a >= p.width - 50) go = true;
    if (a2 > p.width - 50 || a2 < 0) { b2 = -b2; }
    if (go) a2 += b2;
    p.ellipse(a, p.height / 2, 200, 200);
    p.stroke(135, 23, 255, 80);
    p.ellipse(a2, p.height / 2, 200, 200);

    pmx = mx; pmy = my;
    mx = p.constrain(mx + p.random(-20, 20), -50, p.width + 50);
    my = p.constrain(my + p.random(-20, 20), -50, p.height + 50);
    p.stroke(103, 0, 255, 200);
    p.line(pmx, pmy, mx, my);

    x[0] = p.constrain(x[0] + p.random(-20, 20), -50, p.width + 50);
    y[0] = p.constrain(y[0] + p.random(-20, 20), -50, p.height + 50);
    for (let i = 1; i < 3; i++) {
      x[i] = p.random(p.width);
      y[i] = p.random(p.height);
    }
    for (let i = 0; i < 3; i++) {
      p.stroke(c[i]);
      p.line(x[i], y[i], x[i] + p.random(-5, 5), y[i] + p.random(-5, 5));
    }

    p.stroke(1, 66, 17, 30);
    p.noFill();
    p.strokeWeight(0.5);
    n = n + nb / 3;
    if (n > 760 || n < 0) { nb = -nb; }
    p.rect(20 + n / 2, 20, p.width - 40 - n, p.height - 40);
    p.stroke(135, 23, 255, 30);
    n = n + nb;
    p.rect(20 + n / 2, 20, p.width - 40 - n, p.height - 40);

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

let myp5_16 = new p5(sketch16, 'sketch16-container');