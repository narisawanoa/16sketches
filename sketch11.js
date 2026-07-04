let sketch11 = function(p) {
  let w = 0, v = 0, dir = 1, numSegments = 10;
  let segColors = new Array(numSegments + 1);
  let bgLayer, lineLayer;

  p.setup = function() {
    p.createCanvas(600, 400);
    bgLayer = p.createGraphics(600, 400);
    lineLayer = p.createGraphics(600, 400);
    for (let i = 0; i <= numSegments; i++) {
      segColors[i] = p.color(p.random(255), p.random(255), p.random(255));
    }
  };

  p.draw = function() {
    p.image(bgLayer, 0, 0);
    bgLayer.background(p.random(20, 153), p.random(18, 153), p.random(20, 153));

    p.image(lineLayer, 0, 0);
    lines();
  };

  function lines() {
    let x1 = 0, y1 = 200 + v, x2 = 600, y2 = 200 + w;
    w += dir;
    v -= dir;
    if (w >= p.random(150, 180) || w <= -p.random(150, 180)) {
      for (let i = 0; i <= numSegments; i++) {
        segColors[i] = p.color(p.random(255), p.random(255), p.random(255));
      }
      dir = -dir;
    }
    for (let i = 0; i < numSegments; i++) {
      let start = i / numSegments;
      let end = (i + 1) / numSegments;
      lineLayer.stroke(segColors[(i + 1) % numSegments]);
      lineLayer.strokeWeight(3);
      let sx = p.lerp(x1, x2, start);
      let sy = p.lerp(y1, y2, start);
      let ex = p.lerp(x1, x2, end);
      let ey = p.lerp(y1, y2, end);
      lineLayer.line(sx + p.random(-10, 0), sy, ex + p.random(0, 10), ey);
      lineLayer.stroke(segColors[i + 1]);
      lineLayer.line(sy, sx, ey, ex);
    }
  }
};

let myp5_11 = new p5(sketch11, 'sketch11-container');