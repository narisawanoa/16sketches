let sketch10 = function(p) {
  let w = 0, v = 0, dir = 1, numSegments = 2;
  let segColors = new Array(numSegments);

  p.setup = function() {
    p.createCanvas(600, 400);
    for (let i = 0; i < numSegments; i++) {
      segColors[i] = p.color(p.random(255), p.random(255), p.random(255));
    }
  };

  p.draw = function() {
    lines();
  };

  function lines() {
    let x1 = 0, y1 = 200 + v, x2 = 600, y2 = 200 + w;
    w += dir;
    v -= dir;
    if (w >= 100 || w <= -100) {
      for (let i = 0; i < numSegments; i++) {
        segColors[i] = p.color(p.random(255), p.random(255), p.random(255));
      }
      dir = -dir;
    }
    for (let i = 0; i < numSegments; i++) {
      let start = i / numSegments;
      let end = (i + 1) / numSegments;
      p.stroke(segColors[i]);
      let sx = p.lerp(x1, x2, start);
      let sy = p.lerp(y1, y2, start);
      let ex = p.lerp(x1, x2, end);
      let ey = p.lerp(y1, y2, end);
      p.line(sx, sy, ex, ey);
    }
  }
};

let myp5_10 = new p5(sketch10, 'sketch10-container');