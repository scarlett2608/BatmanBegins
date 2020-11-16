//constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//variables
var world,engine;
var walking_man;
var umbrella;
var drops=[];
var thunder,t1,t2,t3,t4;

function preload(){
//thunder
    t1 = loadImage('images/thunderbolt/1.png');
    t2 = loadImage('images/thunderbolt/2.png');
    t3 = loadImage('images/thunderbolt/3.png');
    t4 = loadImage('images/thunderbolt/4.png');
}

function setup(){
    createCanvas(500,500)

    //physics engine
    engine = Engine.create();
    world = engine.world;

    
    

    //umbrella
    umbrella = new Umbrella(200,415);
    
}

function draw(){
    background('black');
    Engine.update(engine);
    rectMode(CENTER);
    noStroke();
    fill('green')
    rect(250,500,500,10);
    drawSprites();

    if(frameCount%60!=0&&thunder!=null){    
    thunder.destroy();
    }    

    //thunderbolts
    if(frameCount%60==0){
        thunder = createSprite(250,50);
        thunder.scale = 0.7;
        
        var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: thunder.addImage(t1);
              break;
      case 2: thunder.addImage(t2);
              break;
      case 3: thunder.addImage(t3);
              break;
      case 4: thunder.addImage(t4);
              break;
      default: break;
    }
}

    //display
    umbrella.display();

    //drops
    for(var m = 0; drops.length < 50; m++){
        drops.push(new Drop(random(0,500),random(0,500)))
    }
    console.log(drops.length);
    //display drops
    for(var i = 0 ; i < drops.length; i++){
        drops[i].display();
        drops[i].update();
    }

}   

