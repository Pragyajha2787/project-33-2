const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var man;
var manimg;
var maxSnow=15;
var snowarray=[];
var bg="snow3.jpg";
var bgimg;

function preload(){
bgimg = loadImage("snow3.jpg");

}

function setup() {
  createCanvas(600,400);
  engine=Engine.create();
  world=engine.world;

  
  
  

  for(var i=0; i<maxSnow; i++){
    snowarray.push(new snowfall(random(0,600), random(0,100)));
  }


}

function draw() {
  background(bgimg);
  Engine.update(engine);

  for(var i=0; i<maxSnow; i++){
    snowarray[i].display();
    snowarray[i].update();
}

  drawSprites();
}

