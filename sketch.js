
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var Box1;
var bob1,bob2,bob3,bob5,bob4;
var rope1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;



	bobDiameter=40;

	Box1 = new Box(390,400,300,30)
	startBobPositionX=width/2;
	startBobPositionY=height/4+500;
	bob1=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bob2=new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bob3=new Bob(startBobPositionX,startBobPositionY,bobDiameter);
	bob4=new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bob5=new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);
	

	rope1=new Chain(bob1.body,Box1.body,-bobDiameter*2, 0)
	rope2=new Chain(bob2.body,Box1.body,-bobDiameter*1, 0)
	rope3=new Chain(bob3.body,Box1.body,0, 0)
	rope4=new Chain(bob4.body,Box1.body,bobDiameter*1, 0)
	rope5=new Chain(bob5.body,Box1.body,bobDiameter*2, 0)

	

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");


Box1.display();
bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();



  
  drawSprites();
 
}

function keyPressed() {

	if (keyCode ===UP_ARROW)  {
   
   Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
   
	}

	if (keyCode ===DOWN_ARROW)  {
   
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:60,y:45});
		
		 }
   
   
   }

   function mouseDragged() {
	   Matter.Body.setPosition(bob1.body, {x: mouseX, y:mouseY}) ;
	   
   }



