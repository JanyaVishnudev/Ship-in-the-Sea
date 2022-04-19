//VARIABLES
var ship,shipImage;
var sea,seaImage;
var edges;

//PRELOADING ANIMATIONS 
function preload(){
seaImage = loadImage("sea.png");
shipImage = loadAnimation("ship-1.png","ship-2.png")
}

function setup(){
  createCanvas(400,400);
  background("blue");

  // SEA SPRITE
  sea=createSprite(400,200);
  sea.addImage(seaImage);
  sea.scale=0.3;

  //SHIP SPRITE
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImage);
  ship.scale =0.25;
}

function draw() {
  background("white");
    
  drawSprites();
}
