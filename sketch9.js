let sketch9 = function(p) {
  let w = 0, v = 0, dir = 1;

  p.setup = function() {
    p.createCanvas(600, 400);
  };

  p.draw = function() {
    p.background(p.random(130, 173), p.random(30, 70), p.random(230, 225));
    w += dir;
    v -= dir;
    if (w >= 50 || w <= -50) { dir = -dir; }
    p.line(200, 200 + v, 400, 200 + w);
  };
};

let myp5_9 = new p5(sketch9, 'sketch9-container');