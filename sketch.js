
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score = 0;
var survivalTime = 0;
var sscore;
var yeet = "Bananas eaten: ";
var background; 
var PLAY = 1;
var END = 0;
var gameState = 1;

function preload(){
  
  //loading animations and images
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png","Monkey_09.png","Monkey_10.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  jungle = loadImage("jungle.jpg");
 
}



function setup() {
  createCanvas(600,400);
  background = createSprite(300,200,600,400); 
  background.addImage(jungle);
  background.scale = 1.2;
  
  //creating the monkey
  monkey = createSprite(80,390,20,20);
  monkey.addAnimation("run", monkey_running);
  monkey.scale = 0.1;

  //creating the ground
  ground = createSprite(400,390,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  ground.visible = false;
  
  
  
  //creating the groups
  foodGroup = createGroup();
  obstacleGroup = createGroup();
}


function draw() {
  if(gameState === 1){
      background.velocityX = -4; 
     monkey.collide(ground);
    
    if (background.x < 0){
      background.x = background.width/2;
    }
    
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
     if(keyDown("space") && monkey.y >= 330){
   monkey.velocityY = -14; 
  }
      if(obstacleGroup.isTouching(monkey)){
     monkey.scale = 0.1;
     }
     switch(score){
    case 10: monkey.scale = 0.14;
      break;
    case 20: monkey.scale = 0.14;
      break;
    case 30: monkey.scale = 0.14;
      break;
    case 40: monkey.scale = 0.14;
      break;
    case 50: monkey.scale = 0.14;
      break;
    case 60: monkey.scale = 0.14;
      break;  
    case 70: monkey.scale = 0.14;
      break;
    case 80: monkey.scale = 0.14;
      break;
    case 90: monkey.scale = 0.14;
      break;
    case 100: monkey.scale = 0.14;
      break;  
    default: break;
  }
 
  monkey.velocityY = monkey.velocityY + 0.8;
  
  //score
  if(foodGroup.isTouching(monkey)){
   foodGroup.destroyEach(); 
    score = score + 2;
  }

  food();
  
  oof();
    
  if(obstacleGroup.isTouching(monkey) && monkey.scale === 0.1){
     gameState = 0;
     }  
  }
  
  if (gameState === 0){
     monkey.destroy();
     ground.destroy();
     obstacleGroup.destroyEach();
     foodGroup.destroyEach();
     background.destroy();
     background.velocityX = 0;
     textSize(20);
     text("Game over!", 300,200);
     //text("Press R to restart", 300, 400);
     }
  
  /*if(gameState===0 && keyDown("r")){
    reset();
  }*/
  drawSprites();
 
  stroke("black");
  textSize(20);
  fill("white");
  text (yeet + score, 10,30); //displaying bananas eaten
  }
 


function food(){
  if(frameCount % 70 === 0){
      
    //creating the banana with all its properties
      banana = createSprite(350,20,20,20);
      banana.x = Math.round (random(300,400));
      banana.y = Math.round (random(180,194));  
      banana.addImage(bananaImage);
      banana.scale = 0.1;
      banana.velocityX = -4;
      banana.lifetime = 330;
      //adding banana to group
      foodGroup.add(banana)
     }
}


function oof(){
  if(frameCount % 80 === 0){
   //creating obstacles with properites
    obstacle = createSprite(450,370,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.11;
    obstacle.velocityX = -6;
    obstacle.lifetime = 330;
    obstacle.x = Math.round (random(300,400));
    // adding obstacle to group
    obstacleGroup.add(obstacle);
  }
}

/*function reset(){
  gameState = 1;
  obstacleGroup.destroyEach();
  foodGroup.destroyEach();
  score = 0;
}
*/



