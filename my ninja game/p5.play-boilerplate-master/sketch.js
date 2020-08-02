var ninja
var ground
function preload(){
  bg=loadImage("images/woods.jpg");
  ninja_img=loadAnimation("images/ninja1.png","images/ninja2.png","images/ninja3.png","images/ninja4.png")
  stone_img=loadImage("images/stone.png")
}

function setup() {
  createCanvas(1700,400);
  ninja=createSprite(150,270,20,20)
  ninja.addimage("ninja",ninja_img);
  ninja.scale=0.5;
  ground=createSprite(850,380,1400,10);
}


function draw() {
  background(bg);
  stone();
  ground.visible=false;
  if(keyDown(UP_ARROW)){
  ninja.velocityY=-10;
  }
  ninja.velocityY=ninja.velocityY+0.5; 
  ninja.collide(ground);
 // if(ninja.isTouching()){}
  drawSprites();
  

}
function stone(){
  if(World.frameCount%100===0){
var stone=createSprite(1600,330,20,20)
stone.addImage("stone",stone_img);
stone.scale=0.3;
stone.velocityX=-9;
}
}