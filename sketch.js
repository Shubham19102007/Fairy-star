var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;
var ground1,ground2

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");
     starBody=loadImage("starImage.png")
}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;
	fairy.velocityX=4
	

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;


	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

ground1=createSprite(786,460,10,3000)
ground2=createSprite(0,323,10,3000)
}


function draw() {
  background(bgImg);
 
  ground1.shapeColor="black"
ground2.shapeColor="black"

fairy.collide(ground1)

star.x=starBody.position.x
star.y=starBody.position.y


if(starBody.position.y>470){
	star.collide(fairy)
	star.velocityY=0
}


  drawSprites();

}

function keyPressed() {
	if(keyCode===UP_ARROW){
    Matter.Body.setStatic(starBody,false)

	}


}
