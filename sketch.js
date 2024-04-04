let img;
let button;
let colorValue = 'white';

// const pickupX = 210;
// const pickupY = 0;
// const pickupSize = 700;


function preload() {
  img = loadImage("assets/guitare.png");
}


function setup() {
  createCanvas(400, 700);

  button = createButton("change color", "#aa7942");
  button.position(0, 0);

  button.mousePressed(() => {
    let c = random(["#d95000", "#c4bc00", "#9aa60e", "#006d8f"]);
    button.value(c);
  });

  size = 20;
  degree = 0;
}
//motion
function degreeToRad(degree) {
  return (degree * Math.PI) / 100;
}


function draw() {
  let c = button.value();
  //background(c);

  //background_left
  strokeWeight(1.0);
  //fill(170, 110, 75);//
  fill(c);
  rect(0, 0, 210, 700);

  //background_right
  // fill(250, 232, 200);
  // rect(210, 0, 210, 700);
  const pickupX = 210;
  const pickupY = 0;
  const pickupSize = 700;

  const collisionX = mouseX > pickupX && mouseX < pickupX + pickupSize;
  const collisionY = mouseY > pickupY && mouseY < pickupY + pickupSize;
  if (collisionX && collisionY) fill("beige");
  else fill(250, 232, 200);

  square(pickupX, pickupY, pickupSize);

  //white shape
  fill(colorValue);
  quad(205, 150, 310, 120, 355, 530, 213, 580);
  arc(275, 325, 180, 180, 200, QUARTER_PI, OPEN);

  //beige quad_left
  fill(250, 232, 200);
  quad(13, 180, 210, 97, 213, 580, 50, 640);

  //shadow
  fill(190, 175, 155);
  strokeWeight(0.0);
  bezier(210, 97, 100, 140, 90, 185, 125, 240);
  bezier(125, 240, 50, 270, 60, 330, 80, 360);
  bezier(80, 360, 10, 400, 10, 600, 202, 565);
  strokeJoin(BEVEL);
  beginShape();
  vertex(210, 100);
  vertex(213, 565);
  vertex(150, 560);
  vertex(80, 360);
  vertex(125, 240);
  vertex(200, 100);
  endShape();

  //grayBlue shape
  fill(50, 60, 80);
  strokeWeight(0.0);
  strokeJoin(BEVEL);
  beginShape();
  vertex(210, 122);
  vertex(215, 520);
  vertex(85, 550);
  vertex(50, 400);
  vertex(105, 373);
  vertex(105, 280);
  vertex(150, 260);
  vertex(125, 150);
  endShape();

  //brown shape
  fill(150, 110, 80);
  strokeWeight(0.0);
  strokeJoin(BEVEL);
  beginShape();
  vertex(150, 150);
  vertex(285, 152);
  vertex(270, 245);
  vertex(302, 245);
  vertex(320, 400);
  vertex(250, 425);
  vertex(205, 520);
  vertex(70, 525);
  vertex(85, 398);
  vertex(105, 395);
  vertex(100, 278);
  vertex(180, 275);
  endShape();

  //darkRed shadow (120, 0, 0)
  fill('#831100');
  quad(165, 400, 270, 325, 305, 515, 180, 523);
  if(mouseIsPressed){
    fill(random(255), random(255), random(255));
  quad(165, 400, 270, 325, 305, 515, 180, 523);
  }

  image(img, -20, -13, 430, 750);

  translate(212, 378);
  degree = degree + 2;
  rad = degreeToRad(degree);
  //console.log(degree, rad);
  fill("white");
  circle(Math.cos(rad) * size, Math.sin(rad) * size, 10);
  fill("red");
  circle(Math.cos(rad) * size, 0, 10);
  fill("yellow");
  circle(0, Math.sin(rad) * size, 10);
}


function mousePressed() {
  if (colorValue === 'white') {
    colorValue = 'PowderBlue' ;
  } else {
    colorValue = 'white';
  }
}
