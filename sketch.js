const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var snowis;
var engine,world;
var snowy1,snowy2,snowy3,snowy4,snowy5,snowy6,snowy7,snowy8,snowy9,snowy10,snowy11,snowy12,
snowy13,snowy14,snowy15,snowy16;
var snow;

function preload(){
snowis = loadImage("snow3.jpg");

}

function setup() {
  createCanvas(1360,663);


engine = Engine.create();
world = engine.world;

snowy1 = new Snow(random(0,600),random(0,600));
snowy2 = new Snow(random(0,600),random(0,600))
snowy3= new Snow(random(0,600),random(0,600))
snowy4 = new Snow(random(0,600),random(0,600))
snowy5 = new Snow(random(0,600),random(0,600))
snowy6 = new Snow(random(0,600),random(0,600))
snowy7 = new Snow(random(0,600),random(0,600))
snowy8 = new Snow(random(0,600),random(0,600))
snowy9 = new Snow(random(0,600),random(0,600))
snowy10 = new Snow(random(0,600),random(0,600))
snowy11= new Snow(random(0,600),random(0,600))
snowy12 = new Snow(random(0,600),random(0,600))
snowy13 = new Snow(random(0,600),random(0,600))
snowy14 = new Snow(random(0,600),random(0,600))
snowy15 = new Snow(random(0,600),random(0,600))
snowy16 = new Snow(random(0,600),random(0,600))
}

function draw() {
  background(snowis);  
  drawSprites();
 
  Engine.update(engine);

  snowy1.display();
  snowy2.display();
  snowy3.display();
  snowy4.display();
  snowy5.display();
  snowy6.display();
  snowy7.display();
  snowy8.display();
  snowy9.display();
  snowy10.display();
  snowy11.display();
  snowy12.display();
  snowy13.display();
  snowy14.display();
  snowy15.display();
  snowy16.display();
}

