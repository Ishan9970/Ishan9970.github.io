function setup() {
    createCanvas(400, 400);
    background(200);
    drawBouquet(500); // Draw a total of 25 flowers
  }
  
  function drawBouquet(numFlowers) {
    for (let i = 0; i < numFlowers; i++) {
      let x = random(50, width - 50);
      let y = random(100, height - 50);
      drawFlower(x, y);
    }
  }
  
  function drawFlower(x, y) {
    // Stem
    fill(34, 139, 34);
    rect(x - 5, y, 10, 100);
  
    // Flower
    fill(255, 0, 0);
    ellipse(x, y - 20, 40, 40);
    ellipse(x - 20, y, 40, 40);
    ellipse(x + 20, y, 40, 40);
  
    // Center
    fill(255, 255, 0);
    ellipse(x, y, 20, 20);
  }
  
