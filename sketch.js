//variable declaration -> var name;
var fixedBlock , movingBlock;

function setup() {
  createCanvas(800,400);
  fixedBlock = createSprite(400, 200, 50, 50);
  movingBlock = createSprite(200, 200, 100, 100);
}

function draw() {
  background(255,255,255);
    movingBlock.x = mouseX;
    movingBlock.y = mouseY;
    //console.log(movingBlock.x)
  if (fixedBlock.x - movingBlock.x <= fixedBlock.width/2 + movingBlock.width/2 
      && movingBlock.x - fixedBlock.x <= fixedBlock.width/2 + movingBlock.width/2
      && fixedBlock.y - movingBlock.y <= fixedBlock.height/2 + movingBlock.height/2 
      && movingBlock.y - fixedBlock.y <= fixedBlock.height/2 + movingBlock.height/2
    ) {
     fixedBlock.shapeColor = "Pink"
     movingBlock.shapeColor = "Yellow"
   } else { 
    fixedBlock.shapeColor = "Black"
    movingBlock.shapeColor = "Green"
   }
  drawSprites();
  
}