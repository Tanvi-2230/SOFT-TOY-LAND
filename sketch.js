var monster, monsterImg, girl, girlImg;
var softToy1, softToy2, softToy3, softToy4, softToy5;
var obstacle1, obstacle2, obstacle3;
var bg, bgImg;
var invisibleG;
var toysGroup, obstaclesGroup;

function preload(){

  monsterImg = loadAnimation("images/monster1.png", "images/monster2.png", "images/monster3.png","images/monster4.png","images/monster5.png", "images/monster6.png", 
  "images/monster7.png","images/monster8.png", "images/monster9.png", "images/monster10.png");

  girlImg = loadAnimation("images/girl1.png", "images/girl2.png", "images/girl3.png", "images/girl4.png", 
  "images/girl5.png", "images/girl6.png", "images/girl7.png", "images/girl8.png");

  softToy1 = loadImage("images/bear.png");
  softToy2 = loadImage("images/jerry.png");
  softToy3 = loadImage("images/panda.png");
  softToy4 = loadImage("images/pikachu.png");
  softToy5 = loadImage("images/pusheen.png");

  obstacle1 = loadImage("images/obstacle1.png");
  obstacle2 = loadImage("images/obstacle2.png");
  obstacle3 = loadImage("images/obstacle3.png");

  bgImg = loadImage("images/bg.jpg");
}


function setup() {
  createCanvas(800,400);

  bg = createSprite(width/2, height/2, width, height);
  bg.addImage(bgImg);
  bg.velocityX = -5;

  girl = createSprite(400, height-120, 50, 50);
  girl.addAnimation("girl running", girlImg);

  monster = createSprite(100, height-130, 50, 50);
  monster.addAnimation("monster running", monsterImg);

  invisibleG = createSprite(width/2, height-55, width, 20);
  invisibleG.visible = false;
  
  obstaclesGroup = new Group();
}

function draw() {
  background(0);  

  girl.collide(invisibleG);
  monster.collide(invisibleG);

  spawnObstacles();

  if(bg.x <0){
    bg.x = bg.width/2
  }

  if(keyDown("space")){
    girl.velocityY = -10;
  }
  girl.velocityY = girl.velocityY+ 0.8;



  drawSprites();
}

function spawnObstacles(){

  if(frameCount%150===0){
    var obstacle = createSprite(width, height-95, 20, 30);
    obstacle.velocityX = -3;
    obstacle.setCollider('circle',0,0,45);

    var rand = Math.round(random(1,3));
    switch(rand){
      case 1: obstacle.addImage(obstacle1);
      obstacle.scale = 0.5;
      break;
      case 2: obstacle.addImage(obstacle2);
      obstacle.scale = 0.3;
      break;
      case 3: obstacle.addImage(obstacle3);
      obstacle.scale = 0.2;
      break;
      default: break;
    }
    
    obstacle.lifetime = 500;
    obstacle.depth = girl.depth;
    obstacle.depth+=1;
    obstaclesGroup.add(obstacle);
  }
}