var monkey_running,obstacleImage,bananaImage,obstacleGroup,back;
var monkey,backImage,score,ground,banana,obstacle;

function preload() {
  
  obstacleImage=loadImage("stone.png");
  backImage=loadImage("jungle.jpg")
  
  monkeyrun=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png",                 "Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
 bananaImage=loadImage("banana.png");
  obstacleImage=loadImage("stone.png");
}
function setup() {
  createCanvas(400, 400);
  
  back= createSprite(400,200,0,0);
  back.addImage("image",backImage);
  back.velocityX=-5;
  
  ground=createSprite(200,380,400,10);
  ground.visible=false;
  
  monkey= createSprite(100,350);
  monkey.addAnimation("m",monkeyrun)
  monkey.scale=0.1;
  
  bananaGroup= createGroup();
  obstacleGroup= createGroup();
  
  score=0;
  
  
}

function draw() {
  background(220);
  console.log(back.x);
  
  bananas();
  obstacles();
  
  monkey.velocityY=monkey.velocityY+0.6;
  
  if(keyDown("space") && monkey.y>=305){
    monkey.velocityY=-11;
  }
  
  if(back.x===0) {
    back.x=400;
  }
  
 
  
  if(bananaGroup.isTouching(monkey)){
    bananaGroup.destroyEach();
    switch(score){
      case 10 :monkey.scale=0.12;
        break;
      case 20 :monkey.scale=0.12;
        break;
      case 30 :monkey.scale=0.12;
        break;
      case 40 :monkey.scale=0.12;
        break;
        default: break;
    }
  }
  
  if(obstacleGroup.isTouching(monkey)){
    obstacleGroup.destroyEach();
    monkey.scale=0.1;
  }
  
  score=Math.round(frameCount/4);
  
  monkey.collide(ground);
  
  drawSprites();
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+score,300,100);
}

function bananas(){
  if(frameCount % 80===0){
    banana=createSprite(400,200,15,15);
    banana.addImage(bananaImage);
    banana.scale=0.05;
    banana.velocityX=-5;
    banana.lifetime=200;  
    bananaGroup.add(banana);
 }
  
  }

function obstacles(){
  
  if(frameCount % 250===0){
    obstacle=createSprite(400,340,15,15);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.21;
    obstacle.velocityX=-7;
    obstacle.lifetime=150;
    obstacleGroup.add(obstacle);
  }
  
}

