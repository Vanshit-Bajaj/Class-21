var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  fixedRect2= createSprite(600, 200, 50, 80);
  fixedRect.velocityX=3;
  fixedRect2.velocityX=-3;
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY; 
  if(isTouching(movingRect,fixedRect2))
  {movingRect.shapeColor="red";
  fixedRect2.shapeColor="red";

}
else{movingRect.shapeColor="green";
fixedRect2.shapeColor="green";

}
bounceBack(fixedRect,fixedRect2)
  drawSprites();
}
