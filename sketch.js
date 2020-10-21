
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

 }

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box3 = new Box(970,639,20,100);
	box2 = new Box(830,639,20,100);
	box1 = new Box(900,639,200,20);
	ground = new Ground(600,height,1200,20);
	ball = new Ball();
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  box3.display();
  box2.display();
  box1.display();
  ground.display();
  ball.display();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
		console.log(ball.body.position);
	}
}
