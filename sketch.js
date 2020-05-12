var log1

var log2

var logm
var log3
var log4
var log5
var log6
var log7
var log8
function setup() {
  createCanvas(800,400);
  logm = createSprite(400,300,150,250);
  log1 = createSprite(300,350,50,200);
  log2 = createSprite(270,330,20,280);
  log3 = createSprite(250,350,50,200);
  log4 = createSprite(230,330,20,250);
  log5 = createSprite(500,350,50,200);
  log6 = createSprite(530,330,20,250);
  log7 = createSprite(550,350,50,200);
  log8 = createSprite(570,330,20,250);
  
}

function draw() {
  background(0,0,0);
  logm.display();
  log1.display();
  log2.display();
  log3.display();
  log4.display();
  log5.display();
  log6.display();
  log7.display();
  log8.display()
  drawSprites();
}