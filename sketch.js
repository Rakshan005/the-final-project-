var monkey, monkey_running, monkey_collided;
var banana, bananaImage, apple, appleImage, obstacleImage;
var bananaGroup, appleGroup, cloudsGroup;
//var backgroundImage, groundImage, cloudImage;
var gameOver, gameOverImage, restart, restartImage;
var invisibleGround,backGround;
var score=0;

function preload(){
monkey_running = loadAnimation("pictures/monkey walking .gif");

bananaImage = loadImage("pictures/banana.png");
appleImage = loadImage("pictures/banana.png");
backgroundImage = loadImage("pictures/background.png");
groundImage = loadImage("pictures/ground.png");
//cloudImage = loadImage("pictures/cloud.png");
gameOverImage = loadImage("pictures/gameOver.png");
restartImage = loadImage("pictures/restart.png");
}

function setup() {
  createCanvas(400,400);
  backGround = createSprite(400,200,800,400);
  backGround.addImage("background",backgroundImage);

  monkey = createSprite(50,380,20,20);
  monkey.AddAnimation("monkey",monkey_running);
  
  
  ground = createSprite(400,390,800,20);
  ground.addImage(groundImage);

  invisibleGround = createSprite(400,395,800,10);
  invisibleGround.visible = false;

  gameOver = createSprite(400,200,20,20);
  gameOver.addImage(gameOverImage);

  restart = createSprite(400,100,20,20);
  bananaGroup=new Group();
  appleGroup=new Group();
  
}

function draw() {
if(backGround<0){
  backGround.x=backGround.width/2;
}

stroke("black");
  textSize(20);  
  fill("black");
  text("Survival Time: "+score,110,100);
  
  if(gameState===PLAY){
    text("Get bonus 100 points for banana",50,50);
  }
    
    gameOver.visible=false;
    restart.visible=false;
    
   score=score + Math.round(frameCount/200); 
    
    ground.velocityX=-(3 + score/100);

    


















    

//monkey jump
if(keyDown("J")){
  monkey.velocityY=-10;
}
monkey.velocityY = monkey.velocityY+1;
spawningBanana();
spawningApple();
if(bananaGroup.isTouching(monkey)){
  score=score+5;
}else if(appleGroup.isTouching(monkey)){
  score=score-10;
}

monkey.collide(invisibleGround);
  drawSprites();
  textSize(30);
  text("Score:"+score,650,20);

}

function spawningApple(){
  if(frameCount % 100 ===0){
    apple=createSprite(800,40,20,20);
    apple.velocityX=-4;
    apple.addImage("apple",appleImage);
    apple.lifetime=200;
    appleGroup.add(apple);

  }
}

function spawningBanana(){
  if(frameCount % 60 ===0){
    banana=createSprite(800,50,20,20);
    banana.velocityX= -6;
    banana.addImage("banana",bananaImage);
    banana.lifetime=133;
    bananaGroup.add(banana);
  }
}
