function setup() {
  createCanvas(400, 400);
  background(200);
  drawTulip(width / 2, height / 2);
}

function drawTulip(x, y) {
  // Stem
  fill(34, 139, 34);
  rect(x - 5, y, 10, 100);

  // Leaves
  fill(0, 128, 0);
  ellipse(x - 10, y + 20, 30, 20);
  ellipse(x + 10, y + 20, 30, 20);

  // Flower
  fill(255, 0, 0);
  ellipse(x, y, 40, 40);
  fill(255, 192, 203);
  ellipse(x - 15, y, 30, 30);
  ellipse(x + 15, y, 30, 30);
}
