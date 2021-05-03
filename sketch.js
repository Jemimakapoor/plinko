var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particle
var plinkos = [];
var ground 
var divisions = [];
var gameState= "play"
var count = 0

var divisionHeight=300;
var score =0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
 text(mouseX+","+ mouseY,mouseX, mouseY)
 text("500", 20,530)
 text("500",100,530)
 text("500",180,530)
 text("100",260,530)
 text("100",340,530)
 text("100",420,530)
 text("200",500,530)
 text("200",580,530)
 text("200",660,530)
 text("200",740,530)

 stroke("yellow")
 line(0,500,800,500)

 if (particle!=null){
   particle.display()
   if (particle.body.position.y>500){
     if (particle.body.position.x>0&&particle.body.position.x<245){
          score+=500
          particle=null
          if(count>=5)
          gameState="end"
     }
     else if (particle.body.position.x>250&&particle.body.position.x<485){
      score+=100
      particle=null
      if(count>=5)
      gameState="end"
 }
 else if (particle.body.position.x>490&&particle.body.position.x<800){
  score+=200
  particle=null
  if(count>=5)
  gameState="end"
}
   }
 }

 if (gameState==="end"){
   textSize(100)
   text("GAME OVER", 150,250)
   
 }


  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   


   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   ground.display()
 
   
}

function mousePressed(){
  if (gameState==="play"){
    count++
    particle= new Particle(mouseX,10,10)
  }
}