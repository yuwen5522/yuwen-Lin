function setup() {
  // put setup code here
  createCanvas(1000, 1000);
  // three-digit hexadecimal RGB notation
  background('#fae');
  describe('canvas with pink background');
}

function draw() {
  // put drawing code here
 if (mouseIsPressed){
  fill(0);
 }else{
  fill(300);
 }
  ellipse(mouseX, mouseY, 75,75);
  let d = day();
text('Current day: \n' + d, 5, 50);
}