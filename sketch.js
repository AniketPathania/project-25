
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1,dustbin2,dustbin3;
var ground,ball,dustbin;

function preload(){
}

function setup() {
	createCanvas(1200,400);


	engine = Engine.create();
	world = engine.world;
	ball = new Ball(100,370,16);
	ground = new Ground(600,390,1200,20);
	dustbin1 = new Box(800,300,10,160);
	dustbin2 = new Box(950,300,10,160);
	dustbin3 = new Box(875,380,150,10);



	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  ball.display();
  dustbin2.display();
  dustbin1.display();
  dustbin3.display();
  ground.display();


 

  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position, {x:75, y:-75});
	}
}


