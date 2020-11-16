
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var BoyImg ,Boy;
var Tree,TreeImg;
var ground,vground;
var stone;
var slingShot;
var M1,M2,M3,M4,M5;

function preload()
{
	BoyImg = loadImage("boy.png");
	TreeImg = loadImage("tree.png");
}

function setup() {
	createCanvas(1200, 700);

	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground =new Ground(600,650,1200,20);
	fill("brown");

	vground=createSprite(600,650,1200,20);


	Boy = createSprite(220,570,0,0);
	Boy.addImage("boy",BoyImg);
	Boy.scale = 0.1;

	Tree = createSprite(900,350,0,0);
	Tree.addImage("tree",TreeImg);
	Tree.scale = 0.5;

	M1 = new Mango(750,210,40,40);
	M2 = new Mango(900,110,40,40);
	M3 = new Mango(910,240,40,40);
	M4 = new Mango(1130,260,40,40);
	M5 = new Mango(820,340,40,40);

	stone = new Stone(160,570,20,20);

	slingShot = new Slingshot(stone.body,{x:175,y:530});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  Engine.update(engine);
  
  //function detectcollision(lStone,lMango){
	//MangoBodyPosition = lMango.body.Position
	//StoneBodyPosition = lStone.body.Position

//	var distance = dist(StoneBodyPosition.x, StoneBodyPosition.y, MangoBodyPosition.x, MangoBodyPosition.y)
//	if(distance<=lMango.r+lStone.r){
//		Matter.Body.setStatic(lMango.body,false);
//	}
//}

//	detectcollision(stone,M1);
//	detectcollision(stone,M2);
//	detectcollision(stone,M3);
//	detectcollision(stone,M4);
//	detectcollision(stone,M5);

  
	
  drawSprites();
 ground.display();
 stone.display();
 slingShot.display();
 M1.display();
 M2.display();
 M3.display();
 M4.display();
 M5.display();
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
}

function mouseReleased(){
	slingShot.fly();
}

function keyPressed() {
	if (keyCode ===32) {
	Matter.Body.setPosition(stone.body,{x:160,y:570});
	slingshot.attach(stone.body);	
	}
}



