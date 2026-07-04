let sketch12 = function(p) {
  let w = 0, v = 0, dir = 1, numSegments = 3;
  let segColors = new Array(numSegments + 1);
  let bgLayer, lineLayer, topLayer;
  let x = 300, y = 200;

  p.setup = function() {
    p.createCanvas(600, 400);
    bgLayer = p.createGraphics(600, 400);
    lineLayer = p.createGraphics(600, 400);
    topLayer = p.createGraphics(600, 400);
    for (let i = 0; i <= numSegments; i++) {
      segColors[i] = p.color(p.random(255), p.random(255), p.random(255));
    }
  };

  p.draw = function() {
    p.image(bgLayer, 0, 0);
    bgLayer.background(p.random(20, 153), p.random(18, 153), p.random(20, 153));

    p.image(topLayer, 0, 0);
    hand(0);
    hand(300);

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
      lineLayer.stroke(p.red(segColors[(i + 1) % numSegments]), p.green(segColors[(i + 1) % numSegments]), p.blue(segColors[(i + 1) % numSegments]), 80);
      lineLayer.strokeWeight(3);
      let sx = p.lerp(x1, x2, start);
      let sy = p.lerp(y1, y2, start);
      let ex = p.lerp(x1, x2, end);
      let ey = p.lerp(y1, y2, end);
      lineLayer.line(sx + p.random(-10, 0), sy, ex + p.random(0, 10), ey);
      lineLayer.stroke(segColors[i + 1]);
      lineLayer.line(sy, sx, ey, ex);
    }

    lineLayer.strokeWeight(2);
    p.colorMode(p.HSB, 255);
    lineLayer.stroke(p.frameCount % 255, (p.frameCount / 2) % 255 + 20, (p.frameCount / 3) % 255 + 50);
    lineLayer.point(x, y);
    p.colorMode(p.RGB, 255);

    for (let s = 0; s < 5; s++) {
      let r = p.int(p.random(4));
      if (r === 0) {
        x = x + 1;
      } else if (r === 1) {
        x = x - 1;
      } else if (r === 2) {
        y = y + 1;
      } else {
        y = y - 1;
      }
      lineLayer.point(x, y);
    }
  }

  function hand(xOffset) {
    topLayer.push();
    topLayer.stroke(p.random(20, 253), p.random(18, 153), p.random(20, 153));
    topLayer.fill(p.random(20, 253), p.random(18, 153), p.random(20, 153));
    topLayer.translate(4 + xOffset, 0);
    topLayer.beginShape();
    topLayer.vertex(114, 428);
    topLayer.vertex(109, 413);
    topLayer.vertex(109, 368);
    topLayer.vertex(111, 361);
    topLayer.vertex(112, 353);
    topLayer.vertex(114, 346);
    topLayer.vertex(124, 343);
    topLayer.vertex(126, 343);
    topLayer.vertex(129, 353);
    topLayer.vertex(129, 368);
    topLayer.vertex(130, 376);
    topLayer.vertex(133, 353);
    topLayer.vertex(133, 323);
    topLayer.vertex(135, 308);
    topLayer.vertex(138, 307);
    topLayer.vertex(144, 307);
    topLayer.vertex(150, 310);
    topLayer.vertex(151, 353);
    topLayer.vertex(153, 308);
    topLayer.vertex(154, 295);
    topLayer.vertex(162, 296);
    topLayer.vertex(165, 296);
    topLayer.vertex(169, 299);
    topLayer.vertex(171, 338);
    topLayer.vertex(172, 353);
    topLayer.vertex(174, 308);
    topLayer.vertex(181, 305);
    topLayer.vertex(184, 308);
    topLayer.vertex(187, 346);
    topLayer.vertex(189, 353);
    topLayer.vertex(192, 368);
    topLayer.vertex(193, 323);
    topLayer.vertex(199, 323);
    topLayer.vertex(202, 338);
    topLayer.vertex(205, 368);
    topLayer.vertex(204, 398);
    topLayer.vertex(204, 413);
    topLayer.vertex(202, 428);
    topLayer.endShape();
    topLayer.pop();
  }
};

let myp5_12 = new p5(sketch12, 'sketch12-container');