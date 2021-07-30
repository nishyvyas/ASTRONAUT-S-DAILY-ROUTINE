//creating variables
var bg,sleep,brush,gym,eat,drink,move,bath;
var bgImg,sleepImg,brushImg,gymImg,eatImg,drinkImg,moveImg,bathImg;

var astronaut;

function preload(){
//loading images

bg=loadImage("iss.png");
sleep=loadImage("sleep.png");
brush=loadImage("brush.png");
gym=loadImage("gym1.png" , "gym2.png" , "gym11.png" , "gym12.png");
eat=loadImage("eat1.png" , "eat2.png");
drink=loadImage("drink1.png" , "drink2.png");
move=loadImage("move.png" , "move1.png");
bath=loadImage("bath1.png" , "bath2.png");

}

function setup() {
  createCanvas(400,400);
  createSprite(400, 200, 50, 50);

  //adding background
  bg=createSprite(400,100);
  bg.addImage(bgImg);

  astronaut=createSprite(300,230);
  astronaut.addAnimation("sleeping" , sleep);
  astronaut.scale=0.1;

}

function draw() {
  background(255,255,255);  
  drawSprites();

  //dispalying instruction in text format
  TextSize(30);

  Text("instructions:",50,50);
  Text("Up Arrow = Brushing",50,100);
  Text("Down Arrow = Gymming",50,150);
  Text("Left Arrow = Eating",50,200);
  Text("Right Arrow = Bathing",50,250);
  Text("m Key = Moving",50,300);
  
  //code to show movement according to key press

  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }

  if(keyDown("DOWN_ARROW")){

    astronaut.addAnimation("gymming",gym);
    astronaut.changeAnimation("gymming");
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }

  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating");
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }

  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing",bath);
    astronaut.changeAnimation("bathing");
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }

  if(keyDown("M_KEY")){
    astronaut.addAnimation("moving",move);
    astroaunt.changeAnimation("moving");
    astroaunt.y=350;
    astroaunt.velocityX=0;
    astroaunt.velocityY=0;
  }

  drawSprites();
}