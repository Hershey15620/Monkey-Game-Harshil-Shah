//Global Variables
var bananaImage, obstacleImage, obstaclegroup, background, score, ground, monkeyrun;


function preload(){
  backImage=loadImage("jungle.jpg");
  monkeyrun=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaImage= loadImage("Banana.png");
  obstacle_img=loadImage("stone.png");
  groundImage= loadImage("ground2.png");
}


function setup() {
  createCanvas(600,600);
   
  background=createSprite(200,200,800,600);
  background.addImage(backImage);
  background.velocityX=-3;
  
   monkey=createSprite(50,430,10,10);
  monkey.addAnimation("monkey",monkeyrun);
  monkey.scale=0.1;
  
   score=0;
  
   ground= createSprite(600,470,600,10);
    ground.addImage("ground",groundImage);
  ground.visible=false;
  
 obstaclegroup=new Group();
  bananagroup=new Group();
  
}


function draw(){
 if (background.x<100){
   background.x=200;
  background.x=200;
  background.velocityX=-3;
 }
if (bananagroup.collide(monkey)){
    score=score+2; 
    bananagroup.destroyEach();
   }
 
  if (keyDown("space")&&monkey.y>=435){
    monkey.velocityY=-17;
  }
   monkey.velocityY=monkey.velocityY+0.6;

  if (obstaclegroup.collide(monkey)){
    monkey.scale=0.1;
    score=0;
    obstaclegroup.destroyEach();
     }
  console.log(monkey.scale);
   
  
  monkey.collide(ground);
  
  
  
foodgroup();
rockgroup();
drawSprites();
text("Score:"+score,500,100);
}


function foodgroup(){
  if (frameCount%130===0){
  var banana=createSprite(600,300,10,10);
  banana.addImage("multipleban",bananaImage);
  banana.velocityX=-6;
  banana.scale=0.1;
  banana.lifetime=120;
  bananagroup.add(banana);
  }  
}

function rockgroup(){
  if (frameCount%130===0){
   var obstacle=createSprite(600,430,10,10);
    obstacle.addImage("obs",obstacle_img);
    obstacle.scale=0.2;
    obstacle.velocityX=-6;
    obstacle.lifetime=120;
    obstaclegroup.add(obstacle);
  switch(score){
    case 10: monkey.scale=0.12;
      break;
    case 20: monkey.scale=0.14;  
      break;
    case 30: monkey.scale=0.16;
      break;
    case 40: monkey.scale=0.18;
      break;
      default: break;
   }
  } 
  
}