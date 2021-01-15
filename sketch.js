const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, d1, d2, d3, d4, d5, d6, d7;
var engine, world;
var plinkos = [];
var particles = [];
// hello 
// setup function

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,780,480,20);

  d1 = new Divisions(0, 630, 3, 300);
  d2 = new Divisions(80, 630, 3, 300);
  d3 = new Divisions(160, 630, 3, 300);
  d4 = new Divisions(240, 630, 3, 300);
  d5 = new Divisions(320, 630, 3, 300);
  d6 = new Divisions(400, 630, 3, 300);
  d7 = new Divisions(480, 630, 3, 300);

  for (var j = 40; j <= width; j = j + 50){
       plinkos.push(new Plinko(j, 75, 10));
  }

  for (var j = 20; j <= width; j = j + 50){
       plinkos.push(new Plinko(j, 175, 10))
  }

  for (var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j, 275, 10))
}

for (var j = 20; j <= width; j = j + 50){
  plinkos.push(new Plinko(j, 375, 10))
}

 // if(frameCount%40 === 0){
  //  particles.push(new Particle(random(width / 2 - 10, width / 2 + 10), 10, 10));
  //}

  


}

function draw() {
  background("black"); 
  
  textSize(30);
  text("PLINKO", 160, 50)

  Engine.update(engine);

  ground.display();

  console.log(frameCount);

  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    
  }

 for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }
  d1.display();
  d2.display();
  d3.display();
  d4.display();
  d5.display();
  d6.display();
  d7.display();

  drawSprites();
}