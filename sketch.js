function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES); 
}

function draw() {
  background(220);
  translate(width / 2, height / 2); 

  strokeWeight(4);
  stroke(0);
  ellipse(0, 0, 300, 300);

  let hr = hour();
  let mn = minute();
  let sc = second();

  
  let secondAngle = map(sc, 0, 60, 0, 360);
  let minuteAngle = map(mn + sc / 60, 0, 60, 0, 360);
  let hourAngle = map(hr % 12 + mn / 60, 0, 12, 0, 360);

  push();
  rotate(hourAngle);
  strokeWeight(8);
  line(0, 0, 0, -70);
  pop();

  push();
  rotate(minuteAngle);
  strokeWeight(6);
  line(0, 0, 0, -100);
  pop();

  
  push();
  rotate(secondAngle);
  strokeWeight(2);
  stroke('red');
  line(0, 0, 0, -120);
  pop();
}
