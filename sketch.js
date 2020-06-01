
var fixr, movr, thir, bo1, bo2
function setup() {
  createCanvas(800,800);
  movr = createSprite(400, 400, 50, 50);
  movr.shapeColor = "black"; 
  //movr.velocityX = -4
  //movr.velocityY = -4
  fixr = createSprite(100, 100, 50, 50);
  fixr.shapeColor = "black";
  thir = createSprite(20, 100, 50, 50);
  thir.shapeColor = "black";
  bo1 = createSprite(20, 200, 50, 50);
  bo1.shapeColor = "black";
  bo2 = createSprite(700, 200, 50, 50);
  bo2.shapeColor = "black";
  bo2.velocityX = -4
  bo1.velocityX = 4
  //fixr.velocityX = 4
  //fixr.velocityY = 4
  movr.debug = true;
  fixr.debug = true;

}

function draw() {
  background(255,255,255);  
  drawSprites();
  movr.y = mouseY;
  movr.x = mouseX;
  if(isTouching(fixr, movr)){
    fixr.shapeColor = "red"
    movr.shapeColor = "red"
  }
  else if (isTouching(movr, thir)){
    thir.shapeColor = "blue"
    movr.shapeColor = "blue"
  }
  else{
    fixr.shapeColor = "black";
    movr.shapeColor = "black";
    thir.shapeColor = "black";
  }
  if(bounceOff(bo1, bo2)){
    bo1.shapeColor = "yellow"
    bo2.shapeColor = "yellow"
  }
}

