var bullet , wall;
var thickness, speed, weight;

function setup() {

  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(25,90);

  bullet =  createSprite(400, 200, 150, 50);
  bullet.velocityX= speed;
  bullet.shapeColor="white";

 wall =  createSprite(1200,200,thickness,height/2);
 wall.shapeColor=color(80,80,80);
}

function draw() {
  background(0,255,255);  

  if(keyDown("Space")){
    speed=random(55,90);
    weight=random(400,1500);
    bullet.shapeColor="white";
    bullet.x=100;
    bullet.y=200;
    bullet.velocityX=speed;
  }

  if(hasCollided(bullet,wall)){
    bullet.veolcityX=0
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    
    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }

    if(damage<20){
      wall.shapeColor=color(0,255,0);
    }

 
}
  drawSprites();

  textSize(25);
  fill("orange");
  text("Press Space To Start The Test✨",600,40);
  fill("green");
  text(" 🟢 Green color show the damage is okay" ,200 , 80 );
  fill("red");
  text(" 🔴 Red color show the damage is dangerous",800,80);

}

function hasCollided(lbullet, lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true 
  }
  return false 
}