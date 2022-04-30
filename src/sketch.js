function setup() {
  createCanvas(550, 550);
}

function draw() {
  background(100);
  fill(0);
  const blockWidth = 49;
  const blockHeight = 20;
  const start = 0;
  const end = 550;
  for(i=2;i<end/2;i+=blockHeight) {
    for(j=5.5;j<end-blockWidth;j+=blockWidth){
    fill(200,200,0);
    rect(j,i,blockWidth-4, blockHeight-2);
    }
  }
  fill(0);
  ellipse((frameCount * 2) % width, height / 2, 20, 20);
}
