 const Engine = Matter.Engine;
 const World= Matter.World;
 const Bodies = Matter.Bodies;
 const Constraint = Matter.Constraint;
 
 var engine, world;

 var bg,ice=[]

 function preload(){


bg =loadImage("snow2.jpg");



 }
 function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;
  if(frameCount%100===0){
    ice.push(new Snow(random(10,790),10))
  }
}

function draw() {
  Engine.update(engine)
  background(bg);
  for (var j = 0; j < ice.length; j++) {
    ice[j].display();
  }  
  drawSprites();
}