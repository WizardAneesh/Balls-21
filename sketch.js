
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var canvas;
var ball;
var groundObj;
var leftSide;
var rightSide;


function setup() {
	createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;
	fill ("green")
	groundObj = new Ground(width/2,670,width,120);
	leftSide = new Ground(1100,600,20,120);
	rightSide = new Ground(700,600,20,120);

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ball = Bodies.circle(200,100,30,ball_options);
	World.add(world,ball)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  fill ("lime")
  groundObj.display();
  leftSide.display();
  rightSide.display();
  ellipse(ball.position.x,ball.position.y,30,30)
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
	
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})	

		
	}
	
}

